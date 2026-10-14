const API_URL = "http://localhost:8080/api/employees";

async function loadEmployees() {
  const res = await fetch(API_URL);
  const employees = await res.json();
  const table = document.querySelector("tbody");
  table.innerHTML = "";
  employees.forEach(emp => {
    table.innerHTML += `
      <tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${emp.department}</td>
        <td>${emp.role}</td>
        <td><button onclick="deleteEmp(${emp.id})" style="background:red;color:white">Delete</button></td>
      </tr>`;
  });
}

async function addEmployee() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const dept = document.getElementById("dept").value;
  const role = document.getElementById("role").value;
  
  if(!name || !email) { alert("Name & Email required"); return; }
  
  await fetch(API_URL, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({name, email, department:dept, role})
  });
  loadEmployees();
}

async function deleteEmp(id) {
  await fetch(`${API_URL}/${id}`, {method:"DELETE"});
  loadEmployees();
}

// Load on start
loadEmployees();