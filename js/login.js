/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * @author Nicolás Penagos Montoya
 * nicolas.penagosm98@gmail.com
 **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// -------------------------------------
// FIREBASE CONSTANTS
// -------------------------------------
const database = firebase.database();
const auth = firebase.auth();

// -------------------------------------
// DECLARATIONS
// -------------------------------------
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const loginButton = document.getElementById('loginButton');
const signup = document.getElementById('signup');

//User Authentication
auth.onAuthStateChanged(
    (user) => {

        if (user !== null) {
            window.location.href = 'index.html';
        }

    }
);

// -------------------------------------
// EVENTS
// -------------------------------------
loginButton.addEventListener('click', () => {

    let emailS = emailInput.value;
    let passwordS = passwordInput.value;

    if (emailS != null && emailS != '' && passwordS != null && passwordS != '') {

        auth.signInWithEmailAndPassword(emailInput.value, passwordInput.value).then(

            (data) => {

                window.location.href = 'index.html';
                passwordInput.value = '';
                emailInput.value = '';

            }

        ).catch(

            (error) => {

                alert(error.message)
                passwordInput.value = '';
                emailInput.value = '';

            }

        );

    } else {
        alert('There cannot be empty values');
    }


});

signup.addEventListener('click', () => {
    window.location.href = 'signup.html';
});