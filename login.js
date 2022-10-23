const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active")
})

const form = document.getElementById('form-login');
const emailElement = document.getElementById('email');
const numberElement = document.getElementById('number')

async function GetLogin(email,number){
    let response = await  fetch('https://6352a239d0bca53a8eb12b35.mockapi.io/users', {
        method: 'GET',
    })
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
 
    const data = await response.json();
    
    const user = await data.find(d => d.email === email && d.number === number)
    if(user){
        localStorage.setItem("Email", user.email)
        localStorage.setItem("Number", user.number)
        console.log("login sukses")
        alert('Login Success, Welcome!')
        window.location.href="home.html";
    }else{
        console.log("login gagal")
        alert('Login Failed, Please Sign Up')
    }


}
form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const email = emailElement.value
    const number = numberElement.value

    GetLogin(email, number)
})