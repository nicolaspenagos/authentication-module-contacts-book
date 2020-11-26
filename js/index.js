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
const logoutButton = document.getElementById('logoutButton');
const addContactButton = document.getElementById('addContactButton');
const headerDiv = document.getElementById('headerDiv');

//User Authentication
auth.onAuthStateChanged(

    (user) =>{
        database.ref('users/'+user.uid).once(
            'value',
            (data)=>{

                let userDB = data.val();
                headerDiv.innerHTML = userDB.name;

            }
        );
    }

);

// -------------------------------------
// EVENTS
// -------------------------------------
logoutButton.addEventListener('click', ()=>{

    auth.signOut().then(

        ()=>{
            window.location.href = 'login.html';
        }
      
    ).catch(
        (error) =>{
            alert(error.message);
        }
    );

});