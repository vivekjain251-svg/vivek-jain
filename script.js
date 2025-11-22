// Create falling leaves animation
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.style.left = Math.random() * 100 + '%';
    leaf.style.animationDuration = (Math.random() * 10 + 10) + 's';
    leaf.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('leaves-container').appendChild(leaf);

    // Remove leaf after animation completes
    setTimeout(() => {
        leaf.remove();
    }, 20000);
}

// Generate leaves continuously
setInterval(createLeaf, 500);

// Initial leaves
for (let i = 0; i < 15; i++) {
    createLeaf();
}

// Function to show different pages
function showPage(pageName, element) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => section.classList.remove('active'));

    // Show selected section
    document.getElementById(pageName).classList.add('active');

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    element.classList.add('active');

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon!`);
    event.target.reset();
}
