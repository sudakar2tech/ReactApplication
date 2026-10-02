import { useEffect } from 'react';
import React, { useState }from 'react';
import axios from 'axios';
function Manager() {
  // 1. Manage form state using a single object
  const [employee, setEmployee] = useState({
     Ename: '',   
   
    Task: ''
  });
  const [ddemployee, setddemployee] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:5000/api/employee')
        .then(response => {
          setddemployee(response.data);
        })
        .catch(error => {
          console.error('Error fetching employee data:', error);
        });
    }, []);
  // 2. Handle input changes dynamically for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Handle form submission
  const handleSubmit = async () => {
    try
    {
        const response =
         await axios.put('http://localhost:5000/api/Employee/Update', employee);
    
    console.log('response:', response.data);
    alert('Task assigned successfully! check console.');
    }
    catch (error) {
      console.error('Error:', error);
      alert('Error assigning task. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create and assign tasks to team members.</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <div style={styles.inputGroup}>
          <label>
            Employee Name:</label>
            <select
              name="Ename"
              value={employee.Ename}
              onChange={handleChange}
              required
            >
              <option value="">Select an employee</option>
              {ddemployee.map((emp) => (
                <option key={emp.employeeid} value={emp.ename}>
                  {emp.ename}
                </option>
              ))}
            </select>
          </div>

         <div style={styles.inputGroup}>
          <label>Task:</label>
          <input
            type="text"
            name="Task"
            value={employee.Task}
            onChange={handleChange}
            required
          />
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

export default Manager;