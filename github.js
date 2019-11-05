class GitHub{
    constructor(){
        this.clinet_id = 'b89f7f3a81b40c3b92a7';
        this.clinet_secret = 'a6b04ac2eb80062a6dbc5e72faa04a04c22ef8f6';
    }

    // Get Users
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?clinet_id=${this.clinet_id}&client_secret=${this.clinet_secret}`);
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}