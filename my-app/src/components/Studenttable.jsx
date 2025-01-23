import './Studenttable.css';
import { useState } from 'react';

function Studenttable(props) {
    const [sortOrder, setSortOrder] = useState('asc');

    const toggleSortOrder = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
        props.setSor(newSortOrder); // Update parent component with the new sort order
    };

    const sortedData = props.data.slice().sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.grade - b.grade;
        } else {
            return b.grade - a.grade;
        }
    });

    const handleEdit = (rollNo) => {
        // Implement edit functionality here, e.g., navigate to edit page
        console.log('Edit student with roll number:', rollNo);
    };

    const handleDelete = (rollNo) => {
        props.deleteStudent(rollNo);
    };

    return (
        <>
            <div className="container">
                <h2>Student Table</h2>
                <ul className="responsive-table">
                    <li className="table-header">
                        <div>Student Name</div>
                        <div>Roll No</div>
                        <div>Mark1</div>
                        <div>Mark 2</div>
                        <div>Mark 3</div>
                        <div>
                            Grade
                            <button onClick={toggleSortOrder}>{sortOrder === 'asc' ? '▲' : '▼'}</button>
                        </div>
                        <div>Action</div> {/* New column for actions */}
                    </li>
                    {sortedData.map((data) => (
                        <li className="table-row" key={data.rollno}>
                            <div>{data.name}</div>
                            <div>{data.rollno}</div>
                            <div>{data.mark1}</div>
                            <div>{data.mark2}</div>
                            <div>{data.mark3}</div>
                            <div>{data.grade}</div>
                            <div>
                                <button onClick={() => handleEdit(data.rollno)}>Edit</button>
                                <button onClick={() => handleDelete(data.rollno)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Studenttable;
