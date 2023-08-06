(function () {

    emailjs.init('i2oW6mUnDQdhoU7kc');

})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();


        //Verify reCAPTCHA response
        // const captchaResponse = grecaptcha.getResponse();
        // if (!captchaResponse) {
        //     alert('Please complete the reCAPTCHA.');
        //     return;
        // }


        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_68mpgj4', 'template_egb4yf9', this)
            .then(function (response) {
                console.log('SUCCESS!',response);
                $('#contact-form-div').html(`
                <section class="mail-seccess section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 offset-lg-3 col-12">
                                    <!-- Error Inner -->
                                    <div class="success-inner">
                                        <h1><i class="fa fa-envelope"></i><span>Your Mail Sent Successfully!</span></h1>
                                    </div>
                                    <!--/ End Error Inner -->
                                </div>
                            </div>
                        </div>
                    </section>`)

            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}

