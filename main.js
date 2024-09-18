$(document).ready( () => {
    let loader = $('.main-loader');

    $('#submit').click(function () {
        let user = $('#username');

        let birthDate = $('#birthdate');

        let country = $('#country');
        let zip = $('#zip');
        let email = $('#email');
        let password = $('#password');
        let passConfirm = $('#confirm-password');

        let hasError = false;

        loader.css('display', 'flex');

        $('.error-input').hide();

        if (!user.val()) {
            user.next().show();
            hasError = true;
        }
        if (!birthDate.val()) {
            birthDate.next().show();
            hasError = true;
        }
        if (!country.val()) {
            country.next().show();
            hasError = true;
        }
        if (!zip.val()) {
            zip.next().show();
            hasError = true;
        }
        if (!email.val()) {
            email.next().show();
            hasError = true;
        }
        if (!password.val()) {
            password.next().show();
            hasError = true;
        }
        if (!passConfirm.val()) {
            passConfirm.next().show();
            hasError = true;
        }


        if (!hasError) {
            $.ajax({
                method: "POST",
                url: 'https://testologia.ru/checkout',
                data: {
                    user: user.val(),
                    birthday: birthDate.val(),
                    country: country.val(),
                    zip: zip.val(),
                    email: email.val(),
                    password: password.val(),
                    passConfirm: passConfirm.val()
                }
            })
                .done(function () {
                    loader.hide();
                    $('#main').hide();
                    $('.main-title').hide();
                    $(".after-form").show();
                    $('.btn').hide();
                })
        }
    })
})

