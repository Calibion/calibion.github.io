const myHeading = document.querySelector("h1");

myHeading.textContent = "Hello JS!";

//

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/icone dashie.jpg") {
    myImage.setAttribute("src", "images/Grosse Licorne.jpg");
  } else {
    myImage.setAttribute("src", "images/icone dashie.jpg");
  }
});

//

let myButton = document.querySelector("button");
let welcome = document.querySelector("h3");

function setUserName() {
  const myName = prompt("Prenom?");
  if (!myName) {
    setUserName();
  } 
  else {
  localStorage.setItem("name", myName);
  welcome.textContent = `Bienvenue ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
}
else {  
  const myName = localStorage.getItem("name");
  welcome.textContent = `Bonjour ${myName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
