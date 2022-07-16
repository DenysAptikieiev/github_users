class GitHubServices {
  _apiBase = 'https://api.github.com/';
  _apiKey = '';

  getResource = async (url:string) => {
    const res = await fetch(url);
    if(!res.ok) throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
    return res.json();
  }

  getUsers = async () => {
    const res = await this.getResource(`${this._apiBase}search/users`);
    return res;
  }
}

export default GitHubServices;