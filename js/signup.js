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
const password1Input = document.getElementById('password1Input');
const password2Input = document.getElementById('password2Input');
const registerButton = document.getElementById('registerButton');
const nameInput = document.getElementById('nameInput');
const telInput = document.getElementById('telInput');
const toLogin = document.getElementById('login');

// -------------------------------------
// EVENTS
// -------------------------------------
registerButton.addEventListener('click', () => {

    let nameS = nameInput.value;
    let emailS = emailInput.value;
    let telS = telInput.value;

    if(password1Input.value != '' && password2Input.value != '' && emailInput.value != ''){

        if(password1Input.value == password2Input.value){

        
            auth.createUserWithEmailAndPassword(emailInput.value, password1Input.value).then(
                (data) => {
                    let user = {
                        id: data.user.uid,
                        name: nameS,
                        email: emailS,
                        tel: telS
                    }

                    database.ref('users/'+user.id).set(user).then( ()=>{
                        window.location.href = 'index.html';
                    });
                   
                }
            );
        
        }else{
            alert('Passwords must be the same and cannot');
        }

    }else{
        alert('There cannot be any empty value');
    }

    password1Input.value = '';
    password2Input.value = '';
    emailInput.value = '';
    nameInput.value = '';
    telInput.value = '';
       
});

toLogin.addEventListener('click', ()=>{
    window.location.href = 'login.html';
});