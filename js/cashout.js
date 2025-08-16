document.getElementById('cashout').addEventListener('click', function(){
    const cashoutForm = document.getElementById('cashout-form');
    const addMoneyForm = document.getElementById('add-money-form');
    cashoutForm.classList.remove('hidden');
    addMoneyForm.classList.add('hidden')
   
})

document.getElementById('btn-cashout').addEventListener('click', function(e){
    e.preventDefault();
    const amountText = document.getElementById('amount-cash').value;
    const amount = parseInt(amountText);

    const pin = document.getElementById('pin-number-cash').value;

    const totalAmountElement = document.getElementById('total-amount');
    let totalAmount = parseInt(totalAmountElement.innerText);

    if(pin === '1234'){
        totalAmount = totalAmount - amount;
        totalAmountElement.innerText = totalAmount;
    }
    else{
        alert('wrong pin')
    }
})
