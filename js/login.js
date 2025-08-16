document.getElementById('btn-login').addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('btn clicked')

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (phoneNumber === '01745' && pinNumber === '1234') {
        window.location.href = "/home.html";
    }
    else {
        alert("wrong credentials")
    }
})
