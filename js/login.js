document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('btn clicked')

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber);
    console.log(pinNumber);
})