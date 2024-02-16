import React, { useState } from 'react';
import './App.css';

const App : React.FC = ()  => {

  let employee : Array<Employee> = [
    { id: 1, name: "Meritech1", position: "Software Engineer"},
    { id: 2, name: "Meritech2", position: "Product Engineer" },
  ]

  const [employees, setEmployee] = useState<Array<Employee>>(employee);

  const handleDelete = (id: number) => {
    // Implement delete functionality
    setEmployee((Employees)=>{
      return Employees.filter(e=>e.id!==id);
    });
  };
 

 interface Employee {
    id: number;
    name: string;
    position: string;
  }
  
  // Generate unique employee ID
  let nextId : number = employees.length + 1;
  
  // Component for displaying a list of employees
  const EmployeeList: React.FC = () => {
    return (
      <div>
        <h2>Employee List</h2>
        <ul>
          {employees.map((employee:Employee) => (
            <li key={employee.id}>
              {employee.name} - {employee.position}
              <button onClick={() => handleDelete(employee.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  // Component for adding a new employee
  const AddEmployee: React.FC = () => {
    const [name, setName] = React.useState("");
    const [position, setPosition] = React.useState("");
  
    const handleSubmit = () => {
      const newEmployee: Employee = { id: nextId++, name, position };
      setEmployee((Employees)=>{
        return [...Employees,newEmployee]
      });
      setName("");
      setPosition("");
    };
  
    return (
      <div>
        <h2>Add Employee</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
    );
  };
  
  return (
    <div>
      <h1>Employee Management</h1>
      <EmployeeList />
      <AddEmployee />
    </div>
  );

}

export default App;
