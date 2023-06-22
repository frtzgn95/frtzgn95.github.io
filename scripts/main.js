const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/skateboard.png") {
    myImage.setAttribute("src", "images/skateboard2.png");
  } else {
    myImage.setAttribute("src", "images/skateboard.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Wellcome to The Skating World, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Wellcome to The Skating World, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};