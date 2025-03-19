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

// Fonctions améliorées pour gérer les modals
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    
    // Préparer la modal avec une opacité de 0
    modal.style.display = "block";
    modal.style.opacity = "0";
    
    // Empêcher le défilement
    document.body.style.overflow = "hidden";
    
    // Animation d'entrée
    setTimeout(() => {
        modal.style.opacity = "1";
        modal.style.transition = "opacity 0.3s ease";
    }, 10);
    
    // Focus sur la modal pour l'accessibilité
    modal.querySelector('.modal-content').focus();
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    
    // Animation de sortie
    modal.style.opacity = "0";
    modal.style.transition = "opacity 0.3s ease";
    
    // Attendre la fin de l'animation avant de cacher la modal
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }, 300);
}

// Fermer la modal si l'utilisateur clique en dehors
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        const modalId = event.target.id;
        closeModal(modalId);
    }
}

// Fermer la modal avec la touche Échap
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            if (getComputedStyle(modals[i]).display === "block") {
                closeModal(modals[i].id);
            }
        }
    }
});

// Ajouter des effets de survol aux cartes de projet
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.btn').classList.add('pulse');
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.btn').classList.remove('pulse');
        });
    });
}); 