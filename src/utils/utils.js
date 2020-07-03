export const getParsedDate = date => new Date(date).toLocaleDateString();

export const fetchData = async url => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    throw new Error(err);
  }
};
