// JavaScript logic for handling page navigation and OTP
function showLogin() {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}

function loginWithPhone() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('phoneEntry').classList.remove('hidden');
}

function proceedToOTP() {
    const phoneInput = document.getElementById('phoneInput').value;
    if (phoneInput) {
        document.getElementById('phoneEntry').classList.add('hidden');
        document.getElementById('otp').classList.remove('hidden');
    } else {
        alert('Please enter a valid mobile number.');
    }
}

function loginWithEmail() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('email').classList.remove('hidden');
}

function verifyOTP() {
    const otpInput = document.getElementById('otpInput').value;
    if (otpInput === '123456') {  // For demo purposes
        alert('OTP Verified!');
        document.getElementById('otp').classList.add('hidden');
        document.getElementById('register').classList.remove('hidden');
    } else {
        alert('Invalid OTP');
    }
}

function resendOTP() {
    alert('OTP Resent to ' + document.getElementById('phoneInput').value + '!');
}

function register() {
    alert('Registered with email: ' + document.getElementById('emailInput').value);
    document.getElementById('email').classList.add('hidden');
    document.getElementById('register').classList.remove('hidden');
}

function fetchProducts() {
    let products = ['Electronics', 'Factions', 'Cosomitics'];
    let productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        let li = document.createElement('li');
        li.textContent = product;
        productList.appendChild(li);
    });
    document.getElementById('register').classList.add('hidden');
    document.getElementById('products').classList.remove('hidden');
}
