console.log("Web Expert");

// Code for Sliding Images and changing the headings in Home Container
let root = document.querySelector(':root');

var homeContainerContentHeadingH1 = document.getElementById("home-container-content-heading-h1");
var homeContainerContentHeadingH4 = document.getElementById("home-container-content-heading-h4");
var image=document.getElementById("aaa");
var img_array=["url('../Images/Basketball-compressed.jpg')", "url('../Images/MountainswithWater-compressed.jpg')", "url('../Images/ManWithMacBook-compressed.jpg')"];
var h1_array = ["Shoot for the Hope", "Explore the World of Developers", "We Can Change your Digital World",]
var h4_array = ["Aiming Low is not an option for anyone", "Let us help you realize your true potential", "Bold enough to blow a hole in your next marketing campaign"]
var index=0;
function slide()
{
    root.style.setProperty("--url",img_array[index]);
    homeContainerContentHeadingH1.innerText = h1_array[index];
    homeContainerContentHeadingH4.innerText = h4_array[index];
    index++;
    if(index>=img_array.length)
    {
    index=0;
    }
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navBarItems");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// responsive Nav Bar function
const hamBarIcon = document.getElementById("hambar-icon");
const navBar = document.getElementById("navBar");
const responsiveNav = document.getElementById("responsiveNav");
const homeContainerContent = document.getElementById("home-container-content");
const homeContainer = document.getElementById("home-container");
hamBarIcon.addEventListener("click", () => {
    if (responsiveNav.style.display == "none"){
        responsiveNav.style.display = "flex";
        navBar.style.display = "none";
        homeContainerContent.style.display = "none";
        homeContainer.style.height = "0";
    }
    else{
        responsiveNav.style.display = "none";
        navBar.style.display = "flex";
        homeContainerContent.style.display = "flex";
        homeContainer.style.height = "71vh";
    }

})

setInterval("slide()",12000);
