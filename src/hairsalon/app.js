const form = document.getElementById('booking-form');
const list = document.getElementById('appointments');

const loadAppointments = () => {
  const items = JSON.parse(localStorage.getItem('appointments') || '[]');
  list.innerHTML = '';
  items.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.date} - ${item.service}`;
    const del = document.createElement('button');
    del.textContent = 'Supprimer';
    del.addEventListener('click', () => {
      items.splice(idx, 1);
      localStorage.setItem('appointments', JSON.stringify(items));
      loadAppointments();
    });
    li.appendChild(del);
    list.appendChild(li);
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const appointment = {
    name: document.getElementById('name').value,
    date: document.getElementById('date').value,
    service: document.getElementById('service').value,
  };
  const items = JSON.parse(localStorage.getItem('appointments') || '[]');
  items.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(items));
  form.reset();
  loadAppointments();
});

loadAppointments();
