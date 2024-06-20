document.addEventListener('DOMContentLoaded', function () {
    function showError(message) {
        document.getElementById('errorMessage').innerText = message;
    }

    function hideError() {
        document.getElementById('errorMessage').innerText = '';
    }

    function showPopup() {
        alert("Le message a été envoyé. Vous allez être redirigé vers l'accueil.");
        window.location.href = "index.html";
    }

    document.getElementById('submitBtn').addEventListener('click', function (event) {
        event.preventDefault();

        var fields = ['1', '2', '3'].map(id => document.getElementById(id));
        var values = fields.map(field => field.value.trim());

        if (values.some(value => value === '')) {
            showError("Veuillez remplir tous les champs avant d'envoyer le formulaire.");
        } else {
            hideError();
            setTimeout(showPopup, 1000);
        }
    });
});