document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Ajouter des effets de focus sur les champs du formulaire
        const formFields = contactForm.querySelectorAll('input, textarea');
        
        formFields.forEach(field => {
            // Effet lors du focus
            field.addEventListener('focus', () => {
                field.parentElement.classList.add('focused');
            });
            
            // Effet lors de la perte du focus
            field.addEventListener('blur', () => {
                if (!field.value) {
                    field.parentElement.classList.remove('focused');
                }
            });
            
            // Check si le champ a déjà une valeur (par exemple après un rechargement de page)
            if (field.value) {
                field.parentElement.classList.add('focused');
            }
        });
        
        // Gestion de la soumission du formulaire
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Désactiver le bouton pendant la validation
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validation des champs
            let isValid = true;
            let errors = [];
            
            // Validation du nom
            if (!name.trim()) {
                isValid = false;
                errors.push({ field: 'name', message: 'Le nom est requis' });
            }
            
            // Validation de l'email
            if (!email.trim()) {
                isValid = false;
                errors.push({ field: 'email', message: 'L\'email est requis' });
            } else if (!isValidEmail(email)) {
                isValid = false;
                errors.push({ field: 'email', message: 'L\'email n\'est pas valide' });
            }
            
            // Validation du message
            if (!message.trim()) {
                isValid = false;
                errors.push({ field: 'message', message: 'Le message est requis' });
            }
            
            // Effacer les erreurs précédentes
            clearErrors();
            
            // Si le formulaire est invalide, afficher les erreurs
            if (!isValid) {
                showErrors(errors);
                
                // Réactiver le bouton
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                return;
            }
            
            // Simulation d'un délai d'envoi (à remplacer par l'appel API réel)
            setTimeout(() => {
                // Stocker les données dans le localStorage (pour démonstration)
                localStorage.setItem('contactFormData', JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    timestamp: new Date().toISOString()
                }));
                
                // Rediriger vers la page de confirmation
                window.location.href = 'submit_form-moderne.html';
            }, 1500);
        });
    }
});

// Fonction pour valider le format de l'email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction pour afficher les erreurs
function showErrors(errors) {
    errors.forEach(error => {
        const field = document.getElementById(error.field);
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = error.message;
        
        // Ajouter la classe d'erreur au champ
        field.classList.add('error');
        
        // Ajouter le message d'erreur après le champ
        field.parentElement.appendChild(errorElement);
    });
}

// Fonction pour effacer toutes les erreurs
function clearErrors() {
    // Supprimer toutes les classes d'erreur
    document.querySelectorAll('.error').forEach(field => {
        field.classList.remove('error');
    });
    
    // Supprimer tous les messages d'erreur
    document.querySelectorAll('.error-message').forEach(message => {
        message.remove();
    });
} 