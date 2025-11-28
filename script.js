// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  mobileMenuBtn.addEventListener('click', function() {
    mainNav.classList.toggle('active');
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        mainNav.classList.remove('active');
      }
    });
  });
  
  // Scroll to top button
  const scrollTopBtn = document.querySelector('.scroll-top-btn');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Form validation
  const cotizacionForm = document.getElementById('cotizacion-form');
  if (cotizacionForm) {
    cotizacionForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      let isValid = true;
      const requiredFields = this.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = 'red';
          isValid = false;
        } else {
          field.style.borderColor = '#ddd';
        }
      });
      
      if (isValid) {
        // Here you would typically send the form data to the server
        alert('Cotización enviada con éxito. Nos contactaremos pronto contigo.');
        this.reset();
      } else {
        alert('Por favor complete todos los campos requeridos.');
      }
    });
  }
  
  // Dynamic dropdown population (example for departments)
  const origenDepartamento = document.getElementById('origen-departamento');
  const destinoDepartamento = document.getElementById('destino-departamento');
  
  // In a real app, you would fetch this data from an API
  const departamentos = [
    'Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 
    'Cajamarca', 'Callao', 'Cusco', 'Huancavelica', 'Huánuco', 
    'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 
    'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 
    'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'
  ];
  
  departamentos.forEach(depto => {
    const option1 = document.createElement('option');
    option1.value = depto;
    option1.textContent = depto;
    origenDepartamento.appendChild(option1);
    
    const option2 = document.createElement('option');
    option2.value = depto;
    option2.textContent = depto;
    destinoDepartamento.appendChild(option2);
  });
});