const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

function downloadResume(){
  alert("Add your resume PDF as 'Varsha_Surwade_Resume.pdf' in this folder, then change the Resume link in index.html to href=\"Varsha_Surwade_Resume.pdf\".");
}
