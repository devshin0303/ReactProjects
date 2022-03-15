// const title = document.getElementById("title");

// console.dir(title);

// title.innerText = "Got you";

// const hellos = document.getElementsByClassName("hellos");

// console.log(hellos);

// const hellos = document.getElementsByTagName("h1");

// console.log(hellos);

// const hellos = document.querySelector(".hello h1");

// console.log(hellos);

// // hellos.style.color = "blue";

//-----------------------------------------------------------------------

// const hellos = document.querySelector(".hello h1");

// function handleTitleClick() {
//   hellos.style.color = "blue";
// }

// function handleMouseEnter() {
//   hellos.innerText = "mouse is here!!";
// }

// function handleMouseLeave() {
//   hellos.innerText = "mouse is gone!!";
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//   alert("copier!!");
// }

// function handleWindowOffLine() {
//   alert("SoS WIFI DOWN!!");
// }

// function handleWindowOnLine() {
//   alert("WIFI ALL GOOD!!");
// }
// hellos.addEventListener("click", handleTitleClick);
// hellos.addEventListener("mouseenter", handleMouseEnter);
// hellos.addEventListener("mouseleave", handleMouseLeave);
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffLine);
// window.addEventListener("online", handleWindowOnLine);
// ---------------------------------------------------------------------------
// const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     //h1.style.color === "blue"
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }
// h1.addEventListener("click", handleTitleClick);

// --------------------------------------------------------------------------------
// const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//   const activeClass = "active";
//   if (h1.className === activeClass) {
//     h1.className = "";
//   } else {
//     h1.className = activeClass;
//   }
// }

// h1.addEventListener("click", handleTitleClick);

//----------------------------------------------------------------

// const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//   const activeClass = "active";
//   if (h1.classList.contains(activeClass)) {
//     h1.classList.remove(activeClass);
//   } else {
//     h1.classList.add(activeClass);
//   }
// }

// h1.addEventListener("click", handleTitleClick);

//---------------------------------------------------------------

// const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//   const activeClass = "active";
//   if (h1.classList.containss(activeClass)) {
//     h1.classList.remove(activeClass);
//   } else {
//     h1.classList.add(activeClass);
//   }
// }

// h1.addEventListener("click", handleTitleClick);

//---------------------------------------------------------------

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.classList.toggle("active");
}
h1.addEventListener("click", handleTitleClick);
