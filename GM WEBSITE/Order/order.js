
document.addEventListener('DOMContentLoaded', () => {
    const category = document.getElementById('category');
    const idOptions = document.getElementById('idOptions');
    const printOptions = document.getElementById('printOptions');
    
    category.addEventListener('change', () => {
      const selectedCategory = category.value;
      idOptions.style.display = selectedCategory === 'ID' ? 'block' : 'none';
      printOptions.style.display = selectedCategory === 'Print' ? 'block' : 'none';
    });
    
    document.getElementById('orderForm').addEventListener('submit', (event) => {
      event.preventDefault();
      
      const formData = new FormData(event.target);
      const order = Object.fromEntries(formData.entries());
      
      saveOrder(order);
      alert('Order submitted successfully!');
      event.target.reset();
    });
  });
  
  function saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
  }
  