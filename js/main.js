
var loginBtn = document.getElementById('login');


loginBtn.addEventListener('click', function(){
    // Hiding Login Area
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    // Showing Transaction Area
    const transArea = document.getElementById('trans-area');
    transArea.style.display = 'block';
})


// deposit button 
var depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;

    updateSpanText("currentDeposit", depositNumber);

    // Adding Balance on Main Balance
    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber + depositNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;

    updateSpanText('currentBalance', depositNumber);

    
    document.getElementById('depositAmount').value = '';


})

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalBalance;
}


// Withdraw Button
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    updateSpanText('currentWithdraw', withdrawNumber);

    // withdraw removing from Main Balance
    updateSpanText('currentBalance', -1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = '';

    // const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);

    // const totalWithdraw = withdrawNumber + currentWithdrawNumber;

    // document.getElementById('currentWithdraw').innerText = totalWithdraw;
    

    console.log('clicked!', withdrawNumber)
})