// Init
const github = new GitHub();

// Search Input
const searchUser = document.querySelector('#searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;

    if(userText !== ''){
        // Make HTTP call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show Alert

            }else{
                // Show Profile

            }
        })
    }else{
        // Clear profile

    }
})