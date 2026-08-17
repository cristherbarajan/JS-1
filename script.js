function insertNumber() {
  const input = document.getElementById('numberInput').value;
  if (input && input > 0) {
    const table = document.getElementById('numbersTable');
    const row = table.insertRow();
    row.insertCell(0).innerText = input;
    row.insertCell(1).innerText = (input % 2 === 0) ? "EVEN" : "ODD";
    row.insertCell(2).innerHTML = 
      '<button class="edit" onclick="editNumber(this)">Edit</button> ' +
      '<button class="remove" onclick="removeNumber(this)">Remove</button>';
  } else {
    alert("Please enter a valid positive number.");
  }
}

function clearEntry() {
  document.getElementById('numberInput').value = "";
}

function removeNumber(btn) {
  const row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function editNumber(btn) {
  const row = btn.parentNode.parentNode;
  const currentValue = row.cells[0].innerText;
  const newValue = prompt("Enter new number:", currentValue);
  if (newValue && newValue > 0) {
    row.cells[0].innerText = newValue;
    row.cells[1].innerText = (newValue % 2 === 0) ? "EVEN" : "ODD";
  }
}

function clearItems() {
  const table = document.getElementById('numbersTable');
  table.innerHTML = "<tr><th>Number</th><th>Parity</th><th>Actions</th></tr>";
}

function getTotal() {
  const table = document.getElementById('numbersTable');
  let total = 0;
  for (let i = 1; i < table.rows.length; i++) {
    total += parseInt(table.rows[i].cells[0].innerText);
  }
  alert("Total: " + total);
}

function identifyHighLow() {
  const table = document.getElementById('numbersTable');
  let numbers = [];
  for (let i = 1; i < table.rows.length; i++) {
    numbers.push(parseInt(table.rows[i].cells[0].innerText));
  }
  if (numbers.length > 0) {
    alert("Highest: " + Math.max(...numbers) + "\nLowest: " + Math.min(...numbers));
  } else {
    alert("No numbers inserted.");
  }
}

function sortNumbers() {
  const option = document.getElementById('sortOptions').value;
  const table = document.getElementById('numbersTable');
  let rows = Array.from(table.rows).slice(1);
  rows.sort((a, b) => {
    const numA = parseInt(a.cells[0].innerText);
    const numB = parseInt(b.cells[0].innerText);
    return option === "asc" ? numA - numB : numB - numA;
  });
  table.innerHTML = "<tr><th>Number</th><th>Parity</th><th>Actions</th></tr>";
  rows.forEach(row => table.appendChild(row));
}
