export default class ProjectService {
    _apiBase = '/api/projects.json';

    async getProjects() {
        const response = await fetch(this._apiBase);

        if (!response.ok) {
            throw new Error(`Could not fetch ${this._apiBase}, received ${response.status}`);
        }

        return await response.json();
    }
}
