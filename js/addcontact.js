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
const nameInput = document.getElementById('nameInput');
const telInput = document.getElementById('telInput');
const addButton = document.getElementById('addButton');
const goBackButton = document.getElementById('goBack');

var userID = '';

//User Authentication
auth.onAuthStateChanged(

    (user) => {

        if (user !== null) {

            database.ref('users/' + user.uid).once(
                'value',
                (data) => {

                    let userDB = data.val();
                    console.log(userDB);
                    userID = userDB.id;

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
goBackButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

addButton.addEventListener('click', () => {



    let telS = telInput.value;
    let nameS = nameInput.value;

    if (telS != null && telS != '' && nameS != null && nameS != '') {

        let reference = database.ref('contacts/' + userID).push();

        let contact = {

            id: reference.key,
            brachId: userID,
            tel: telS,
            name: nameS
        }

        reference.set(contact);

    } else {
        alert('There cannot be empty values');
    }

    telInput.value = '';
    nameInput.value = '';

});
