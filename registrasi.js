const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active")
})

const form = document.getElementById('form-login');

// let login = async (email,password) => {

// }

form.addEventListener('submit', function(e) {
    // Prevent default behavior:
    e.preventDefault();
    // Create new FormData object:
    const formData = new FormData(form);
    // Convert formData object to URL-encoded string:
    const payload = new URLSearchParams(formData);
    // Post the payload using Fetch:
    fetch('https://6352a239d0bca53a8eb12b35.mockapi.io/users', {
    method: 'POST',
    body: payload,
    })
    .then(res => {
        if(res.ok){
            alert('Login your account!')
            console.log(`post berhasil : ${res.status}`);
            window.location.href="login.html";
        }else{
            console.log(`post tidak berhasil :  ${res.status}`);
        }
        return res
    })

    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})