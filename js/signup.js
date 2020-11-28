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

// ------------------------------------
// DECLARATIONS
// -------------------------------------
const emailInput = document.getElementById('emailInput');
const password1Input = document.getElementById('password1Input');
const password2Input = document.getElementById('password2Input');
const registerButton = document.getElementById('registerButton');
const nameInput = document.getElementById('nameInput');
const telInput = document.getElementById('telInput');
const toLogin = document.getElementById('login');

//User Authentication
var isSigningUp = false;

auth.onAuthStateChanged(
    (user) => {

        if (user !== null) {

            if (isSigningUp) {

                let nameS = nameInput.value;
                let emailS = emailInput.value;
                let telS = telInput.value;

                let userDB = {
                    id: user.uid,
                    name: nameS,
                    email: emailS,
                    tel: telS
                }

                database.ref('users/' + userDB.id).set(userDB).then(
                    () => {
                        window.location.href = 'index.html';
                    }
                );

                password1Input.value = '';
                password2Input.value = '';
                emailInput.value = '';
                nameInput.value = '';
                telInput.value = '';

            } else {
                window.location.href = 'index.html';
            }

        }
    }
);

// -------------------------------------
// EVENTS
// -------------------------------------
registerButton.addEventListener('click', () => {

    let nameS = nameInput.value;
    let emailS = emailInput.value;
    let telS = telInput.value;

    if (password1Input.value != '' && password2Input.value != '' && emailInput.value != '' && nameS != null && nameS != '' && emailS != null && emailS != '' && telS != null && telS != '') {

        if (password1Input.value == password2Input.value) {

            isSigningUp = true;
            auth.createUserWithEmailAndPassword(emailInput.value, password1Input.value);

        } else {

            alert('Passwords must be the same and cannot');

            password1Input.value = '';
            password2Input.value = '';
            emailInput.value = '';
            nameInput.value = '';
            telInput.value = '';

        }
    } else {

        alert('There cannot be empty values');

        password1Input.value = '';
        password2Input.value = '';
        emailInput.value = '';
        nameInput.value = '';
        telInput.value = '';

    }

});

toLogin.addEventListener('click', () => {
    window.location.href = 'login.html';
});