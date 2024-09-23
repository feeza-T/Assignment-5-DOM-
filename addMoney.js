document.getElementById('btn-addMoney1').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-addMoney1').value;
    const addMoneyNumber = parseFloat(addMoney);

  
    let balance = document.getElementById('acc-balance1').innerText;
    balance = balance.replace('BDT', '').trim(); 
    const balanceNumber = parseFloat(balance);

    if (!isNaN(addMoneyNumber) && !isNaN(balanceNumber) && addMoneyNumber>=0) {
        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('acc-balance1').innerText = newBalance + ' BDT'; 

        document.getElementById(inputId).value = '';

    }
    else {
        document.getElementById(inputId).value = '';
        alert("Please enter a valid donation amount.");
    }
});

document.getElementById('btn-addMoney2').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney2 = document.getElementById('input-addMoney2').value;
    const addMoneyNumber2 = parseFloat(addMoney2);

  
    let balance2 = document.getElementById('acc-balance2').innerText;
    balance2 = balance2.replace('BDT', '').trim(); 
    const balanceNumber2 = parseFloat(balance2);

    if (!isNaN(addMoneyNumber2) && !isNaN(balanceNumber2) && addMoneyNumber2>=0) {
        const newBalance2 = addMoneyNumber2 + balanceNumber2;
        document.getElementById('acc-balance2').innerText = newBalance2 + ' BDT'; 

        document.getElementById(inputId).value = '';

    }
    else {
        document.getElementById(inputId).value = '';
        alert("Please enter a valid donation amount.");
    }
});

document.getElementById('btn-addMoney3').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney3 = document.getElementById('input-addMoney3').value;
    const addMoneyNumber3 = parseFloat(addMoney3);

  
    let balance3 = document.getElementById('acc-balance3').innerText;
    balance3 = balance3.replace('BDT', '').trim(); 
    const balanceNumber3 = parseFloat(balance3);

    if (!isNaN(addMoneyNumber3) && !isNaN(balanceNumber3) && addMoneyNumber3>=0) {
        const newBalance3 = addMoneyNumber3 + balanceNumber3;
        document.getElementById('acc-balance3').innerText = newBalance3 + ' BDT'; 

        document.getElementById(inputId).value = '';

    }
    else {
        document.getElementById(inputId).value = '';
        alert("Please enter a valid donation amount.");
    }
});