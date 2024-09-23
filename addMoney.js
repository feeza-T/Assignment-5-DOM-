
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('blurred'); // Add blurred class when scrolling
    } else {
        navbar.classList.remove('blurred'); // Remove when at the top
    }
});

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

        //add to transition history
        const p=document.createElement('p');
       let noa=document.getElementById("Noakhali").innerText;
       p.innerText=`${addMoneyNumber} Taka is added for ${noa}.` ;

       
       //date
        const now = new Date();
        const dateTime = ` Date: ${now.toLocaleDateString()} at ${now.toLocaleTimeString()} (Bangladesh Standard Time)`;
        p.innerText += dateTime;
        document.getElementById('transition-id').appendChild(p);

        //clear input
        document.getElementById(input-addMoney).value = '';

    }
    else {
        document.getElementById(input-addMoney).value = '';
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
       //add to transition history
       const p = document.createElement('p');

       let feni = document.getElementById("Feni").innerText;
       p.innerText = `${addMoneyNumber2} Taka is added for ${feni}`;
       document.getElementById('transition-id').appendChild(p);

        //date
        const now = new Date();
        const dateTime = ` Date: ${now.toLocaleDateString()} at ${now.toLocaleTimeString()} (Bangladesh Standard Time)`;
        p.innerText += dateTime;
        document.getElementById('transition-id').appendChild(p);

         //clear input
        document.getElementById(input-addMoney2).value = '';

    }
    else {
        document.getElementById(input-addMoney2).value = '';
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
        
         //add to transition history
         const p=document.createElement('p');

         let quota=document.getElementById("Quota").innerText;
         p.innerText=`${addMoneyNumber3} Taka is added for ${quota}` ;
         document.getElementById('transition-id').appendChild(p);
 
          //date
        const now = new Date();
        const dateTime = ` Date: ${now.toLocaleDateString()} at ${now.toLocaleTimeString()} (Bangladesh Standard Time)`;
        p.innerText += dateTime;
        document.getElementById('transition-id').appendChild(p);

         //clear input
        document.getElementById(input-addMoney3).value = '';

    }
    else {
        document.getElementById(input-addMoney3).value = '';
        alert("Please enter a valid donation amount.");
    }
});

