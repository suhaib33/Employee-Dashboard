import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Card({ employee, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <Link to={`/employee/${employee.id}`} className="employee-link">
        <div>
          <h3>{employee.name}</h3>
          <p>ID: {employee.id}</p>
          <p>Username: {employee.username}</p>
          <p>Email: {employee.email}</p>
          <p>Phone: {employee.phone}</p>
        </div>
      </Link>
      <div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
