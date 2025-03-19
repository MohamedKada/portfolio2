document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validation basique côté client
            let isValid = true;
            let errorMessage = '';
            
            if (!name) {
                isValid = false;
                errorMessage += 'Le nom est requis\n';
            }
            
            if (!email) {
                isValid = false;
                errorMessage += 'L\'email est requis\n';
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessage += 'L\'email n\'est pas valide\n';
            }
            
            if (!message) {
                isValid = false;
                errorMessage += 'Le message est requis\n';
            }
            
            // Si le formulaire est valide, simuler l'envoi et rediriger
            if (isValid) {
                // Stocker les données dans le localStorage (pour démonstration seulement)
                localStorage.setItem('contactFormData', JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    timestamp: new Date().toISOString()
                }));
                
                // Rediriger vers la page de confirmation
                window.location.href = 'submit_form.html';
            } else {
                // Afficher les erreurs
                alert('Veuillez corriger les erreurs suivantes :\n' + errorMessage);
            }
        });
    }
});

// Fonction pour valider le format de l'email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
} 