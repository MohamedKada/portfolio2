document.addEventListener('DOMContentLoaded', () => {
    // Navigation mobile
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger) {
        burger.addEventListener('click', () => {
            // Activer le menu mobile
            nav.classList.toggle('nav-active');
            
            // Animer le burger
            burger.classList.toggle('toggle');
        });
    }
    
    // Fermer le menu mobile quand on clique sur un lien
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
    
    // Ajouter une classe active au menu lors du défilement
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animation de défilement fluide pour les ancres internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Décalage pour la barre de navigation fixe
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animations d'apparition au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.15
    });
    
    // Observer tous les éléments à animer
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Formulaire de contact - gestion basique
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Désactiver pour l'instant puisque nous n'avons pas encore le traitement
            // Cette partie sera traitée par contact.php
            // e.preventDefault();
            // alert('Votre message a été envoyé. Merci !');
        });
    }
}); 