export function initContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      form.reset();
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  });
}