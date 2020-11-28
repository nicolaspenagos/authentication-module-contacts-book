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
const contactsContainer = document.getElementById('itemsDiv');

var userIDS = '';

//User Authentication
auth.onAuthStateChanged(

    (user) => {

        if (user !== null) {

            database.ref('users/' + user.uid).once(
                'value',
                (data) => {

                    let userDB = data.val();
                    headerDiv.innerHTML = userDB.name;

                    let userID = userDB.id;
                    userIDS = userDB.id;

                    database.ref('contacts/' + userIDS).on('value', function (data) {
                        contactsContainer.innerHTML = '';

                        data.forEach(

                            contact => {

                                let val = contact.val();
                                let contactQueue = new ContactComponent(val);
                                contactsContainer.appendChild(contactQueue.render());

                            }
                        );
                    });


                }
            );

        } else {
            window.location.href = 'login.html';
        }
        
    }

);

// -------------------------------------
// EVENTS
// -------------------------------------
logoutButton.addEventListener('click', () => {

    auth.signOut().then(

        () => {
            window.location.href = 'login.html';
        }

    ).catch(
        (error) => {
            alert(error.message);
        }
    );

});

addContactButton.addEventListener('click', () => {
    window.location.href = 'addcontact.html';
});

// -------------------------------------
// READING
// -------------------------------------
