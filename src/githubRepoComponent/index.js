import getRepos from './getRepos';
import createTable from './createTable';
import createNotification from './createNotificationDiv';

class GithubRepo extends HTMLElement {
  constructor() {
    super();
    this.userName = this.getAttribute('data-user');
    this.updatedAt = this.getAttribute('data-update');
  }

  async connectedCallback() {
    const repoInfo = { userName: this.userName, updatedAt: this.updatedAt };
    const repos = await getRepos(repoInfo);

    const isRepoFound = repos.length;

    if (isRepoFound) {
      createTable(repos);
    } else {
      createNotification(repoInfo);
    }
  }
}

const createGithubRepoCustomElement = () => customElements.define('github-repo', GithubRepo);

export default createGithubRepoCustomElement;
