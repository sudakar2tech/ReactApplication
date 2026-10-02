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
       

  
 
   <ul>
    
   <h2>Name:</h2> 
     {employee.map(emp => (
         <div className="employee-card" key={emp.employeeid}>

        
         {emp.ename}  
      </div>
     ))}
   </ul>
  
   <ul>
    <h2>Address:</h2>
     {employee.map(emp => (
         <div className="employee-card" key={emp.employeeid}>

        
         {emp.address} 
      </div>
     ))}
   </ul>
 
   <ul>
    <h2>Role:</h2>
     {employee.map(emp => (
         <div className="employee-card" key={emp.employeeid}>

        
         {emp.role} 
      </div>
     ))}
   </ul>
   <ul>
    <h2>Task assigned:</h2>
     {employee.map(emp => (
         <div className="employee-card" key={emp.employeeid}>

        
         {emp.task} 
      </div>
     ))}
   </ul>
  </div>
   
  

  

  );
}

export default User;