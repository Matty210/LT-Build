function iconText(iconName, text) {
  const div = document.createElement('div');
  div.className = 'icon-text';
  div.innerHTML = `<span class="iconify" data-icon="${iconName}"></span> ${text}`;
  return div;
}

fetch('services.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load JSON file');
    }
    return response.json();
  })
  .then(services => {
    const container = document.getElementById('services');
    services.forEach(service => {
      container.appendChild(iconText(service.icon, service.text));
    });
  })
  .catch(error => {
    console.error('Error loading services:', error);
  });
