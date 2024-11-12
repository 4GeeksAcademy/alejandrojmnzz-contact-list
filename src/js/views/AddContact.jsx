import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export function AddContact() {
    const context = useContext(Context)
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    const [showAlert, setShowAlert] = useState(false)

    function addNewContact() {
        if (contact.name.trim() != "" && contact.email.trim() != "" && contact.phone.trim() != "" && contact.address.trim() != "")
        {
            context.actions.addContact(contact)
            setShowAlert(false)
        }
        else {
            setShowAlert(true)
        }
        console.log(showAlert)
    }
    function handleChange(event) {
        setContact({
            ...contact,
        [event.target.name]: event.target.value
    })
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1>Add a new contact</h1>
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
                        value={contact.name}
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
                        value={contact.address}
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
                        value={contact.phone}
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
                        value={contact.email}
                         ></input>
                    </div>
                </form>
                <div className="col-12 mb-3">
                        <button className="btn btn-primary w-100" onClick={addNewContact}>save</button>
                </div>
                {
                    showAlert == true && <div class="alert alert-danger" role="alert">All fields are required</div>
                }
                <Link to="/">or get back to contacts</Link>
            </div>
        </>
    )
}