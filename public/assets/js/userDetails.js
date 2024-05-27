document.addEventListener('DOMContentLoaded', () => {
    const userDetails = document.getElementById('userDetails');
    const user = JSON.parse(localStorage.getItem('user'));

    var signupSection = document.getElementById("signupSection");

    var profileSection = document.getElementById("profileSection");

    console.log(document.getElementById("signupSection"));

    if (user) {
        console.log('Logged in user exists with details:', user);
        signupSection.style.display = "none";
        profileSection.style.display = "block";
        displayUserDetails();Z
    } else {
        console.log('No user logged in');
        signupSection.style.display = "block";
        profileSection.style.display = "none";
        // signupSection.classList.remove('d-none'); 
        // Handle case where no user is logged in
    }

    function displayUserDetails() {
        userDetails.innerHTML = `${user.first_name} ${user.last_name}`;
    }

    // Check if user is signed in on page load
    if (localStorage.getItem('username')) {
    }
});
