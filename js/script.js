//Greeting + Date
const greeting = document.getElementById("greeting");
const date = document.getElementById("date");

if (greeting) {
  const hour = new Date().getHours();
  if(hour < 12) greeting.textContent = "Good Morning";
  else if (hour > 18) greeting.textContent = "Good Afternoon";
  else greeting.textContent = "Good Evening";

if (dateEl){
    dateEl.textContent = new Date().toDateString();
}
};

// Cart
let cart =0;
function addToCart() {
  cart++;
  document.querySelectorAll("#cartcount").forEach(el
  => {
   el.textContent = cart;
 });
}

//Form validation
function validateform() {
  const email =
 document.getElementById("email").value;
  if (!email.includes("@")){
    alert("Please enter a valid email");
    return false;
  }
    alert("Message sent successfully");
    return true;
}

// Theme Toggle
const toggle =
document.getElementById("themeToggle");
if (toggle){
    toggle.onclick =() => {
      document.body.classList.toggle("dark-mode");
    };
} 
