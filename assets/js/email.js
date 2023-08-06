(function() {
    
    emailjs.init('i2oW6mUnDQdhoU7kc');
    
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();


        // Verify reCAPTCHA response
        const captchaResponse = grecaptcha.getResponse();
        if (!captchaResponse) {
            alert('Please complete the reCAPTCHA.');
            return;
        }


        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_68mpgj4', 'template_egb4yf9', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
