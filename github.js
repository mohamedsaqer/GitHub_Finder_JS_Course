class GitHub{
    constructor(){
        this.clinet_id = 'b89f7f3a81b40c3b92a7';
        this.clinet_secret = 'a6b04ac2eb80062a6dbc5e72faa04a04c22ef8f6';
        this.repos_count = 5;
        this.repos_sort = 'created_at desc'
    }

    // Get Users
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?clinet_id=${this.clinet_id}&client_secret=${this.clinet_secret}`);

        const profileRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&clinet_id=${this.clinet_id}&client_secret=${this.clinet_secret}`);

        const profile = await profileResponse.json();
        const repos = await profileRepos.json();

        return {
            profile,
            repos
        }
    }
}