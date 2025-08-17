document.getElementById('add-money').addEventListener('click', function(){
    const addMoneyForm = document.getElementById('add-money-form');
    const cashoutForm = document.getElementById('cashout-form');
    addMoneyForm.classList.remove('hidden');
    cashoutForm.classList.add('hidden')
    document.getElementById('transaction-container').classList.add('hidden')
})
document.getElementById('transaction').addEventListener('click', function(){
    const addMoneyForm = document.getElementById('add-money-form');
    const cashoutForm = document.getElementById('cashout-form');
    addMoneyForm.classList.add('hidden');
    cashoutForm.classList.add('hidden')
    document.getElementById('transaction-container').classList.remove('hidden')
})

document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    const amountText = document.getElementById('amount').value;
    const amount = parseInt(amountText);

    const pin = document.getElementById('pin-number').value;

    const totalAmountElement = document.getElementById('total-amount');
    let totalAmount = parseInt(totalAmountElement.innerText);

    if(pin === '1234'){
        totalAmount = totalAmount + amount;
        totalAmountElement.innerText = totalAmount;

        const p = document.createElement('p')
    }
    else{
        alert('wrong pin')
    }
})
