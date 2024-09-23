document.getElementById('btn-addMoney1').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-addMoney1').value;
    const addMoneyNumber = parseFloat(addMoney);

  
    let balance = document.getElementById('acc-balance1').innerText;
    balance = balance.replace('BDT', '').trim(); 
    const balanceNumber = parseFloat(balance);

    if (!isNaN(addMoneyNumber) && !isNaN(balanceNumber)) {
        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('acc-balance1').innerText = newBalance + ' BDT'; 
    }
    else {
        alert("Please enter a valid donation amount.");
    }
});
