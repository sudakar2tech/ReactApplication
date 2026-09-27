import { useEffect, useState } from 'react';
import React from 'react';
import './Home.css';
import axios from 'axios';



function Home() {
  
    const [employee, setemployee] = useState([]);
   
    useEffect(() => {
      axios.get('http://localhost:5001/api/employee')
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
   <h2>Employee List</h2>
   <ul>
     {employee.map(emp => (
       <li key={emp.employeeid}>{emp.employeeid}</li>
     ))}
   </ul>
  </div>
   
    

  


  <div class="column">
    <h2>Admin</h2>
    <p>Rob</p>
  </div>
  <div class="column">
    <h2>Manager</h2>
    <p>Paul</p>
    <p>Rob</p>
  </div>
  <div class="column">
    <h2>User</h2>
    <p>Rob</p>
    <p>Paul</p>
    <p>Bill</p>
  </div>
</div>
  );
}

export default Home;