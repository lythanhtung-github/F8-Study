import { useState, useRef } from "react";
const contact_db = 'contact_db';

function ContactApp() {
    const [contacts, setContacts] = useState(() => {
        var contactList = [];
        if (localStorage.getItem(contact_db) == null) {
            contactList = ['Bình bê đê chúa', 'Sang bê đê chúa'];
            localStorage.setItem(contact_db, JSON.stringify(contactList));
        }
        else contactList = JSON.parse(localStorage.getItem(contact_db));
        return contactList;
    });

    const [contact, setContact] = useState("");

    const contactInput = useRef();

    const handleAddContact = (e) => {
        e.preventDefault();
        setContacts((pre) => {
            let data = [...pre];
            data.unshift(contact);
            localStorage.setItem(contact_db, JSON.stringify(data));
            return data;
        })
        setContact("");
        contactInput.current.focus();
    };

    const handleRemoveContact = (contact) => {
        let confirm = window.confirm("Are you sure you want to remove this contact?");
        if (confirm) {
            setContacts((pre) => {
                let data = [...pre];
                data = data.filter((item) => item !== contact);
                localStorage.setItem(contact_db, JSON.stringify(data));
                return data;
            })
        }
    };

    return (
        <div className="container vh-100">
            <h1>Contact App</h1>
            <div>
                <form className='d-flex w-25'
                    onSubmit={handleAddContact}
                >
                    <input type='text' className='form-control'
                        ref={contactInput}
                        value={contact}
                        onInput={(e) => setContact(e.target.value)}
                    />
                    <button type='submit' className='btn btn-success ms-2'
                    >
                        Add
                    </button>
                </form>
            </div>
            <div className="w-25">
                <ul className="list-group list-group-flush">
                    {
                        contacts.map((contact, index) => (
                            <li key={index}
                                className="list-group-item d-flex justify-content-between"
                            >{contact}
                                <span role='button'
                                    className='text-danger fw-bolder'
                                    onClick={() => handleRemoveContact(contact)}
                                >&times;</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ContactApp;