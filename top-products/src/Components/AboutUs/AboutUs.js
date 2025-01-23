import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', rollNumber: 101, marks: 85 },
    { id: 2, name: 'Jane Smith', rollNumber: 102, marks: 78 },
    { id: 3, name: 'Mike Johnson', rollNumber: 103, marks: 92 },
    { id: 4, name: 'Emily Brown', rollNumber: 104, marks: 88 },
    { id: 5, name: 'Chris Wilson', rollNumber: 105, marks: 90 },
    { id: 6, name: 'Sarah Thompson', rollNumber: 106, marks: 75 },
    { id: 7, name: 'Daniel Martinez', rollNumber: 107, marks: 81 },
    { id: 8, name: 'Amanda Davis', rollNumber: 108, marks: 87 },
    { id: 9, name: 'Michael Rodriguez', rollNumber: 109, marks: 94 },
    { id: 10, name: 'Jessica Miller', rollNumber: 110, marks: 79 }
  ]);
  const [searchRollNumber, setSearchRollNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const result = students.find(student => student.rollNumber === parseInt(searchRollNumber));
    setSearchResult(result || 'No student found with this roll number');
  };

  return (
    <div className="about-us">
      <h1>About Us</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSearch} className="search-form">
        <label>
          Search by Roll Number:
          <input type="number" value={searchRollNumber} onChange={(e) => setSearchRollNumber(e.target.value)} required />
        </label>
        <button type="submit">Search</button>
      </form>
      {searchResult && (
        <div className="search-result">
          <h2>Search Result</h2>
          <p>ID: {searchResult.id}</p>
          <p>Name: {searchResult.name}</p>
          <p>Roll Number: {searchResult.rollNumber}</p>
          <p>Marks: {searchResult.marks}</p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
