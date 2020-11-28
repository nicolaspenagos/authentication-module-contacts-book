/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * @author Nicolás Penagos Montoya
 * nicolas.penagosm98@gmail.com
 **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
class ContactComponent {

    constructor(contact) {
        this.contact = contact;
    }

    render = () => {


        let component = document.createElement('div');
        component.className = 'contact';

        let nameDiv = document.createElement('div');
        nameDiv.className = 'name';
        nameDiv.innerHTML = this.contact.name;

        let telDiv = document.createElement('div');
        telDiv.className = 'tel';
        telDiv.innerHTML = this.contact.tel;

        let deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.innerHTML = 'X';

        deleteButton.addEventListener('click', () => {

            let reference = database.ref('contacts/' + this.contact.brachId + '/' + this.contact.id).set(null);

        });

        component.appendChild(nameDiv);
        component.appendChild(telDiv);
        component.appendChild(deleteButton);

        return component;

    }

}