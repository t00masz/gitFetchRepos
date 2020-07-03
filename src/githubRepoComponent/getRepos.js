import { headers } from '../constants';
import { getParsedDate, fetchData } from '../utils/utils';

import createNotificationDiv from './createNotificationDiv';

const desiredRepoInformation = Object.values(headers);

const getRepos = async ({ userName, updatedAt }) => {
  const dataUpdate = getParsedDate(updatedAt);
  const url = `https://api.github.com/users/${userName}/repos`;

  const result = await fetchData(url).catch(error => createNotificationDiv({ error }));

  const reposFilteredByUpdateDate = result.filter(
    ({ updated_at }) => getParsedDate(updated_at) === dataUpdate
  );

  const formattedRepos = reposFilteredByUpdateDate.map(repo =>
    Object.entries(repo).reduce((acc, [key, value]) => {
      if (!desiredRepoInformation.includes(key)) {
        return acc;
      }

      if (key === headers.UPDATED_AT) {
        return { ...acc, [key]: getParsedDate(value) };
      }

      return {
        ...acc,
        [key]: value || 'Empty',
      };
    }, {})
  );

  return formattedRepos;
};

export default getRepos;
