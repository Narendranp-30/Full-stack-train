import React, { useState } from 'react';

const Staffdata = () => {
    const [staff, setStaff] = useState([]);
    const [newStaff, setNewStaff] = useState({
        name: "",
        staffId: "",
        subject: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStaff({
            ...newStaff,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStaff([...staff, newStaff]);
        setNewStaff({ name: "", staffId: "", subject: "" });
    };

    const deleteStaff = (staffId) => {
        setStaff(staff.filter(member => member.staffId !== staffId));
    };

    return (
        <div className="container">
            <h2>Staff Details</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={newStaff.name} onChange={handleChange} placeholder="Staff Name" required />
                <input type="text" name="staffId" value={newStaff.staffId} onChange={handleChange} placeholder="Staff ID" required />
                <input type="text" name="subject" value={newStaff.subject} onChange={handleChange} placeholder="Subject" required />
                <button type="submit">Add Staff</button>
            </form>
            <ul className="responsive-table">
                <li className="table-header">
                    <div>Staff Name</div>
                    <div>Staff ID</div>
                    <div>Subject</div>
                    <div>Action</div>
                </li>
                {staff.map((member) => (
                    <li className="table-row" key={member.staffId}>
                        <div>{member.name}</div>
                        <div>{member.staffId}</div>
                        <div>{member.subject}</div>
                        <div>
                            <button onClick={() => deleteStaff(member.staffId)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Staffdata;
