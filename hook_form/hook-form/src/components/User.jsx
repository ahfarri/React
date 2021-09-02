import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <div className="container w-50">
        <form onSubmit={ createUser }>
            <div className="input-group mb-3">
                <span className="input-group-text">First name:</span>
                <input className="form-control" type="text" onChange={ (e) => setFirstname(e.target.value) }/>
            </div>
            {firstname.length<2?
                <p className="text-danger">First name must be at least 2 characters.</p>:
                ""}
            <div className="input-group mb-3">
                <span className="input-group-text">Last name:</span>
                <input className="form-control" type="text" onChange={ (e) => setLastname(e.target.value) }/>
            </div>
            {lastname.length<2?
                <p className="text-danger">Last name must be at least 2 characters.</p>:
                ""}
            <div className="input-group mb-3">
                <span className="input-group-text">Email Address: </span>
                <input className="form-control" type="text" onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            {email.length<5?
                <p className="text-danger">Email must be at least 5 characters.</p>:
                ""}
            <div className="input-group mb-3">
                <span className="input-group-text">Password: </span>
                <input className="form-control" type="text" onChange={ (e) => setPassword(e.target.value) }/>
            </div>
            {password.length<8?
                <p className="text-danger">Password must be at least 8 characters.</p>:
                ""}
            {password !== confirmpassword?
                <p className="text-danger">Passwords must match.</p>:
                ""}
            <div className="input-group mb-3">
                <span className="input-group-text">Confirm Password: </span>
                <input className="form-control" type="text" onChange={ (e) => setConfirmPassword(e.target.value) }/>
            </div>
            <input type="submit" value="Create User" />
        </form>
        <hr/>
        <h3>Your Form Data</h3>
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmpassword}</p>
        </div>
    );
};
    
export default UserForm;
