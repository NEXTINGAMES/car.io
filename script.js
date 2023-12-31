// WhatsApp button click event
document.getElementById('whatsapp-button').addEventListener('click', function() {
    var phoneNumber = '+919016044851'; // Replace with your WhatsApp number
    var message = 'Hello, I would like to inquire about your services.';
    var whatsappURL = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
    window.open(whatsappURL, '_blank');
});
