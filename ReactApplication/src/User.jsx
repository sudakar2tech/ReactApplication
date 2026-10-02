import { useEffect, useState } from 'react';
import React from 'react';
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function User() {
  const navigate = useNavigate();
  
    const [employee, setemployee] = useState([]);
      const handleSubmit = () => {
    // 3. Pass the root path '/' to go to the home page
     navigate('/Employee', { replace: true });
  };
    useEffect(() => {
      axios.get('http://localhost:5000/api/employee')
        .then(response => {
          setemployee(response.data);
        })
        .catch(error => {
          console.error('Error fetching employee data:', error);
        });
    }, []);

  return (
    <div class="container">
       <div class="column">
    <h2>Team Task Management System</h2>
    <p>Role-Based Full-Stack Application Assessment</p>
  </div>

  <div>
   <h2>View and Manage assigned task</h2>
   <ul>
     {employee.map(emp => (
       <li key={emp.employeeid}>{emp.ename} - {emp.address} - {emp.role} - {emp.task}</li>
     ))}
   </ul>
  </div>
   
    

  
</div>
  );
}

export default User;