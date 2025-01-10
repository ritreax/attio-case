function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')
}

// Responsive Sidebar

const menuBtn = document.querySelector(".menu-btn");
const menuBtnInside = document.querySelector(".menu-btn-inside");
const sidebar = document.querySelector("#sidebar");
const header = document.querySelector(".hamburger");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("close");
    sidebar.classList.toggle("close");
    header.classList.toggle("active");
})

menuBtnInside.addEventListener("click", () => {
    menuBtnInside.classList.toggle("close");
    sidebar.classList.toggle("close");
    header.classList.toggle("active");
})


const sidePanelBtn = document.querySelector(".side-panel-btn");
const sidePanel = document.querySelector(".side-panel");

sidePanelBtn.addEventListener("click",() =>{
    sidePanel.classList.toggle("active");
} )