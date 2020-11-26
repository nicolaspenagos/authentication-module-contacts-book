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

// -------------------------------------
// EVENTS
// -------------------------------------
loginButton.addEventListener('click', () => {

    alert('Hi');
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
});

signup.addEventListener('click', ()=>{
    window.location.href = 'signup.html';
});