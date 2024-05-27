document.addEventListener('DOMContentLoaded', () => {
    const graphqlEndpoint = 'http://localhost:3001/graphql';

    const Sign_In = `
        query SignIn($email: String!, $password: String!) {
            signIn(email: $email, password: $password) {
                first_name
                middle_name
                last_name
                email
            }
        }
    `;

    document.getElementById('signinForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = {
            email: document.getElementById('email_address').value,
            password: document.getElementById('psw-input').value,
        };

        try {
            const response = await fetch(graphqlEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: Sign_In,
                    variables: formData,
                }),
            });

            const result = await response.json();

            if (result.errors) {
                console.error('Error signing in:', result.errors);
                alert(result.errors[0].message); // Display the error message to the user
            } else {
                console.log('User signed in:', result.data.signIn);

                // Save user details to localStorage
                localStorage.setItem('user', JSON.stringify(result.data.signIn));

                // Handle success (e.g., redirect to a welcome page or dashboard)
                window.location.href = '/index.html'; // Replace with your actual page
            }
        } catch (error) {
            console.error('Error signing in:', error);
            alert('An error occurred while signing in. Please try again later.');
        }
    });
});
