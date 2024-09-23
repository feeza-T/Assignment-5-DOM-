
function cashOut(inputId, accBalanceId, mainBalanceId) {
    const addMoney = document.getElementById(inputId).value;
    const addMoneyNumber = parseFloat(addMoney);

    let mainBalance = document.getElementById(mainBalanceId).innerText;
    mainBalance = mainBalance.replace('BDT', '').trim();
    const mainBalanceNumber = parseFloat(mainBalance);

    let accBalance = document.getElementById(accBalanceId).innerText;
    accBalance = accBalance.replace('BDT', '').trim();
    const accBalanceNumber = parseFloat(accBalance);

    if (!isNaN(addMoneyNumber) && addMoneyNumber > 0 && mainBalanceNumber >= addMoneyNumber) {
        const newMainBalance = mainBalanceNumber - addMoneyNumber;
        
    
        document.getElementById(mainBalanceId).innerText = newMainBalance + ' BDT';
        document.getElementById(inputId).value = '';


    } else {

        document.getElementById(inputId).value = '';
        alert("Please enter a valid donation amount or check if you have enough balance.");
    }
}

document.getElementById('btn-addMoney1').addEventListener('click', function(event) {
    event.preventDefault();
    cashOut('input-addMoney1', 'acc-balance1', 'main-balance');
});

document.getElementById('btn-addMoney2').addEventListener('click', function(event) {
    event.preventDefault();
    cashOut('input-addMoney2', 'acc-balance2', 'main-balance');
});

document.getElementById('btn-addMoney3').addEventListener('click', function(event) {
    event.preventDefault();
    cashOut('input-addMoney3', 'acc-balance3', 'main-balance');
});

document.getElementById('btn-addMoney4').addEventListener('click', function(event) { 
    event.preventDefault();
    cashOut('input-addMoney4', 'acc-balance4', 'main-balance');
});
