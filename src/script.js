// Icon button of navbar
const menu = document.getElementById('menu');
const menu_btn = document.getElementById('menu-btn');

// button to show navbar
menu_btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// navbar
const home = document.getElementById('home');
const about = document.getElementById('about');
const resume = document.getElementById('resume');
const blog = document.getElementById('blog');
const contact = document.getElementById('contact');

home.addEventListener('click' , ()=>{
    window.location.href = 'home.html';
})
about.addEventListener('click' , ()=>{
    window.location.href = 'about.html';
})
resume.addEventListener('click' , ()=>{
    window.location.href = 'resume.html';
})
blog.addEventListener('click' , ()=>{
    window.location.href = 'blog.html';
})
contact.addEventListener('click' , ()=>{
    location.href = 'contact.html';
})

// send message button

const send = document.getElementById('send');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validForm(){
    
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if(name !== "" && emailPattern.test(email) && message !== ""){
        send.style.cursor = 'pointer';
        send.classList.remove("cursor-not-allowed");
    }
    else{
        send.style.cursor = 'not-allowed';
        send.classList.add("cursor-not-allowed");
    }
}
nameInput.addEventListener('input' , validForm);
emailInput.addEventListener('input' , validForm);
messageInput.addEventListener('input' , validForm);

send.addEventListener('click' , (event)=>{
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if(name === "" || email === "" || message === ""){
        alert("Please fill in all fields. ")
        return;
    }
    // check if email is valid
    if(!emailPattern.test(email)){
        alert("Please enter a valid email address. ")
        return
    }

    alert(`Message sent! \nName: ${name} \nEmail: ${email} \nMessage: ${message}`);
    
    // clear data
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    // reset cursor
    validForm();
})