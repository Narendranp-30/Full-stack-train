import React, { useState } from 'react';

const initialStaffDetails = [
    {
        name: "Alice",
        staffId: "STAFF001",
        subject: "Mathematics"
    },
    {
        name: "Bob",
        staffId: "STAFF002",
        subject: "Science"
    },
    {
        name: "Charlie",
        staffId: "STAFF003",
        subject: "English"
    }
];

const Staffdata = ({ addStaffMember }) => {
    const [staff, setStaff] = useState(initialStaffDetails);
    const [name, setName] = useState('');
    const [staffId, setStaffId] = useState('');
    const [subject, setSubject] = useState('');

    const handleAddStaff = (e) => {
        e.preventDefault();
        const newStaffMember = { name, staffId, subject };
        setStaff([...staff, newStaffMember]);
        addStaffMember(newStaffMember);
        setName('');
        setStaffId('');
        setSubject('');
    };

    const deleteStaff = (staffId) => {
        setStaff(staff.filter(member => member.staffId !== staffId));
    };

    return (
        <div className="container">
            <h2>Staff Details</h2>
            <form onSubmit={handleAddStaff}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Name" 
                    required 
                />
                <input 
                    type="text" 
                    value={staffId} 
                    onChange={(e) => setStaffId(e.target.value)} 
                    placeholder="Staff ID" 
                    required 
                />
                <input 
                    type="text" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)} 
                    placeholder="Subject" 
                    required 
                />
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
