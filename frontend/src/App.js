import React, { useState, useEffect } from 'react';
import Login from './login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', role: '', department: '' });

  const loadEmployees = () => {
    fetch('http://localhost:8080/api/employees')
     .then(res => res.json())
     .then(data => setEmployees(data));
  };

  useEffect(() => {
    if (isLoggedIn) {
      loadEmployees();
    }
  }, [isLoggedIn]);

  const handleAdd = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(() => {
      setForm({ name: '', email: '', role: '', department: '' });
      loadEmployees();
    });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/employees/${id}`, { method: 'DELETE' })
     .then(() => loadEmployees());
  };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Employee Dashboard - ECE C - 24EG104C10</h1>
        <button onClick={() => setIsLoggedIn(false)} style={{ padding: '8px 15px', background: '#2e1a8a', color: 'white', border: 'none', borderRadius: '8px' }}>Logout</button>
      </div>
      <h3>Total Employees: {employees.length}</h3>

      <form onSubmit={handleAdd} style={{ margin: '20px', background: '#f0f0f0', padding: '15px' }}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required style={{margin:'5px', padding:'8px'}} />
        <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required style={{margin:'5px', padding:'8px'}} />
        <input placeholder="Role" value={form.role} onChange={e => setForm({...form, role: e.target.value})} required style={{margin:'5px', padding:'8px'}} />
        <input placeholder="Department" value={form.department} onChange={e => setForm({...form, department: e.target.value})} required style={{margin:'5px', padding:'8px'}} />
        <button type="submit" style={{padding:'8px 15px', background:'green', color:'white'}}>ADD</button>
      </form>

      <table border="1" cellPadding="10" style={{ width: '90%', margin: '20px auto', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#3498db', color: 'white' }}>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Department</th><th>Action</th></tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td><td>{emp.name}</td><td>{emp.email}</td><td>{emp.role}</td><td>{emp.department}</td>
              <td><button onClick={() => handleDelete(emp.id)} style={{background:'red', color:'white', padding:'5px 10px'}}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;