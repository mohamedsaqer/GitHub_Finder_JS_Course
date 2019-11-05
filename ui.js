class UI {
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    // Display Profile
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">${user.public_repos}</span>
                    <span class="badge badge-secondary">${user.public_gists}</span>
                    <span class="badge badge-success">${user.followers}</span>
                    <span class="badge badge-info">${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    // Clear Profile
    clearProfile(){
        this.profile.innerHTML = '';
    }

    // Show Alert 
    showAlert(msg, className){
        // Clear the last alerts
        this.clearAlert();

        // Create alert message
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));

        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');

        container.insertBefore(div, search) 

        // remove the message after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear Alert Message 
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }
}