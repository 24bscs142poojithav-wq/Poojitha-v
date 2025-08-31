document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent =
    'Thank you for reaching out. I will get back to you soon!';
  document.getElementById('contactForm').reset();
};

};