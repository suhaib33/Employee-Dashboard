
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search({ employees, setSelectedEmployee }) {
  const [searchId, setSearchId] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const result = employees.find((employee) => employee.id === parseInt(searchId, 10));
    if (result) {
      setSelectedEmployee(result);
      navigate('/employee'); 
    } else {
      setSelectedEmployee(null);
    }
  };

  return (
    <div>
      <h2 style={{color : "blue"}}>Search Employee</h2>
      <input
        type="text"
        placeholder="Employee ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
