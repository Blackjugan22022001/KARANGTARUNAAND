// Smooth scroll untuk navigasi
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efek scroll untuk header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    }
});

// Konfirmasi download
document.querySelectorAll('.btn-download').forEach(button => {
    button.addEventListener('click', function(e) {
        // Opsional: Tambahkan konfirmasi atau tracking
        console.log('File akan diunduh: ' + this.getAttribute('href'));
    });
});

// Highlight section aktif saat scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Tambahkan style untuk link aktif
const style = document.createElement('style');
style.textContent = `
    nav a.active {
        background-color: rgba(255, 255, 255, 0.2) !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);