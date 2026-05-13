// Simple interactions and form feedback
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? 'flex' : 'flex';
    });
  }
});

// Simple form handler (demo)
function handleSubmit() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  if (!name || !email || !msg) {
    status.textContent = 'Please fill in all fields to submit your message.';
    status.style.color = '#b91c1c';
    return;
  }

  // Simulate success
  status.textContent = 'Thank you! Your message was received. We will get back to you soon.';
  status.style.color = '#16a34a';
  // Clear form
  document.querySelector('.contact-form').reset();
}
