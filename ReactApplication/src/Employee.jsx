import React, { useState } from 'react';
import axios from 'axios';
function Employee() {
  // 1. Manage form state using a single object
  const [employee, setEmployee] = useState({
    EName: '',   
    Address: '',
    Age: '',
    Active: '1',
    Role: 'Admin',
    Task: ''
  });

  // 2. Handle input changes dynamically for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log('Employee Data Submitted:', employee);

    axios.post('http://localhost:5000/api/employee', employee)
    .then((response) => {
      console.log('Success:', response.data);
      setSuccess(true);
    })
    .catch((error) => {
      console.error('Error:', error);
      setError(error.message);
    });

    alert('Employee data submitted successfully! check console.');
  };

  return (
    <div style={styles.container}>
      <h2>Employee Registration Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <div style={styles.inputGroup}>
          <label>
            Employee Name:</label>
          <input
            type="text"
            name="EName"
            value={employee.EName}
            onChange={handleChange}
            required
          />
        </div>

         <div style={styles.inputGroup}>
          <label>Address:</label>
          <input
            type="text"
            name="Address"
            value={employee.Address}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Age</label>
          <input
            type="text"
            name="Age"
            value={employee.Age}
            onChange={handleChange}
            required
          />
        </div>

       

        <div style={styles.inputGroup}>
          <label>Role:</label>
          <select 
            name="Role" 
            value={employee.Role} 
            onChange={handleChange}
          >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="User">User</option>
           
          </select>
        </div>

       

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

// Basic inline styling for presentation
const styles = {
  container: {
    maxWidth: '400px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Employee;