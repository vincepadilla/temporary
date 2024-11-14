document.addEventListener('DOMContentLoaded', () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersTable = document.getElementById('ordersTable');
    
    orders.forEach(order => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${order.name}</td>
        <td>${order.email}</td>
        <td>${order.phone}</td>
        <td>${order.category}</td>
        <td>${JSON.stringify(order)}</td>
      `;
      ordersTable.appendChild(row);
    });
  });
  