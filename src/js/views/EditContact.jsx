import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export function EditContact() {
    const {actions, store} = useContext(Context)
    const { theid } = useParams()
    const [editedContact, setEditedContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    const [showAlert, setShowAlert] = useState(false)

    function handleChange(event) {
         setEditedContact({
            ...editedContact,
            [event.target.name]: event.target.value
    })
}
    function editCurrentContact() {
        if (editedContact.name.trim() != "" && editedContact.email.trim() != "" && editedContact.phone.trim() != "" && editedContact.address.trim() != "")
            {
                actions.editContact(editedContact, theid)
            }
            else {
                setShowAlert(true)
            }
    }
    function getContact(theid) {
        let result = store.contacts.find((item) => item.id == theid)
        setEditedContact(result)
    }
    useEffect(() => {
        getContact(theid)
    }, [store.contacts])

    return (
        <>
            <div className="d-flex justify-content-center">
                <h1>Edit editedContact</h1>
            </div>
            <div className="container">
                <form className="row">
                    <div className="col-12 mb-3">
                        <label for="fullname" className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            placeholder="Full Name"
                            onChange={handleChange}
                            name="name"
                            value={editedContact?.name}
                        ></input>
                    </div>
                    <div className="col-12 mb-3">
                        <label for="address" className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Enter address"
                            onChange={handleChange}
                            name="address"
                            value={editedContact?.address}
                        ></input>
                    </div>
                    <div className="col-12 mb-3">
                        <label for="phone" className="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Enter phone"
                            onChange={handleChange}
                            name="phone"
                            value={editedContact?.phone}
                        ></input>
                    </div>
                    <div className="col-12 mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            name="email"
                            value={editedContact?.email}
                        ></input>
                    </div>
                </form>
                <div className="col-12 mb-3">
                    <button className="btn btn-primary w-100" onClick={editCurrentContact}>save</button>
                </div>
                {
                    showAlert == true && <div class="alert alert-danger" role="alert">All fields are required</div>
                }
                <Link to="/">or get back to editedContacts</Link>
            </div>
        </>
    )
}