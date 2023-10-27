// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import './App.css';
import Card from './Components/Card';
import Search from './Components/Search';



const API_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <Router>
      <div className="App">
        <h1 style={{color: 'blue'}}>Employee Dashboard</h1>
        <Link to="/search">Search</Link>
        <Routes>
  <Route path="/search" element={<Search employees={employees} setSelectedEmployee={setSelectedEmployee} />} />
  <Route
    path="/"
    element={employees.map((employee) => (
      <Card
        key={employee.id}
        employee={employee}
        onDelete={() => handleDelete(employee.id)}
        onEdit={() => setSelectedEmployee(employee)}
      />
    ))}
  />
  <Route path="/employee" element={selectedEmployee && <EmployeeDetail employee={selectedEmployee} />} />
</Routes>
      </div>
    </Router>
  );
}

function EmployeeDetail({ employee }) {
  return (
    <div>
      <h2 style={{color : 'green'}}>Employee Details</h2>
      <p style={{color : 'red'}}>ID: {employee.id}</p>
      <p style={{color : 'red'}}>Name: {employee.name}</p>
      <p style={{color : 'red'}}>Username: {employee.username}</p>
      <p style={{color : 'red'}}>Email: {employee.email}</p>
      <p style={{color : 'red'}}>Phone: {employee.phone}</p>
    </div>
  );
}

export default App;
