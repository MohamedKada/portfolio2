<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = trim(htmlspecialchars($_POST['name'] ?? ''));
    $email = trim(htmlspecialchars($_POST['email'] ?? ''));
    $message = trim(htmlspecialchars($_POST['message'] ?? ''));
    
    // Validation basique
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Le nom est requis";
    }
    
    if (empty($email)) {
        $errors[] = "L'email est requis";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "L'email n'est pas valide";
    }
    
    if (empty($message)) {
        $errors[] = "Le message est requis";
    }
    
    // Si pas d'erreurs, envoyer l'email
    if (empty($errors)) {
        // Destinataire
        $to = "mohamed.kada@example.com"; // Remplacez par votre email réel
        
        // Sujet
        $subject = "Nouveau message depuis votre portfolio";
        
        // Contenu
        $email_content = "Nom: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        
        // En-têtes
        $headers = "From: $name <$email>";
        
        // Tentative d'envoi
        if (mail($to, $subject, $email_content, $headers)) {
            // Redirection avec message de succès
            header("Location: index.php?status=success#contact");
            exit;
        } else {
            // Erreur d'envoi
            $errors[] = "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.";
        }
    }
}

// En cas d'erreur, redirection vers le formulaire avec les erreurs
if (!empty($errors)) {
    // Stocker les erreurs dans la session (nécessite session_start() au début)
    session_start();
    $_SESSION['form_errors'] = $errors;
    $_SESSION['form_data'] = [
        'name' => $name ?? '',
        'email' => $email ?? '',
        'message' => $message ?? ''
    ];
    
    // Redirection
    header("Location: index.php?status=error#contact");
    exit;
}
?> 