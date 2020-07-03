import { headers } from '../constants';

const createTableHeader = (table, headerCellNames) => {
  const thead = table.createTHead();
  const row = thead.insertRow();

  headerCellNames.forEach(headerCellName => {
    const th = document.createElement('th');
    const text = document.createTextNode(headerCellName);

    row.appendChild(th);
    th.appendChild(text);
  });
};

const createTableLink = value => {
  const link = document.createElement('a');
  link.setAttribute('href', value);

  return link;
};

const createTableCells = (table, tableData) => {
  tableData.forEach(element => {
    const row = table.insertRow();

    Object.entries(element).forEach(([key, value]) => {
      const cell = row.insertCell();
      const text = document.createTextNode(value);

      if (key === headers.URL) {
        const link = createTableLink(value);

        link.appendChild(text);
        cell.appendChild(link);
      } else {
        cell.appendChild(text);
      }
    });
  });
};

const createTable = tableData => {
  const table = document.createElement('table');
  const headerCellsNames = Object.keys(tableData[0]);

  createTableHeader(table, headerCellsNames);
  createTableCells(table, tableData);

  const divResult = document.getElementById('divResult');
  divResult.appendChild(table);
};

export default createTable;
