// Challenge 1
window.onload = function () {
  const userSpan = document.getElementById("user");
  userSpan.innerHTML = "Abhishek";
};

// Challenge 2
const btnClick = document.getElementById("btn-click");
btnClick.onclick = function () {
  btnClick.style.backgroundColor = "blue";
};


// Challenge 3
function makeSentence() {
  const noun = document.getElementById("noun").value;
  const verb = document.getElementById("verb").value;
  const adverb = document.getElementById("adverb").value;
  const statementDiv = document.getElementById("statement");

  const sentence = `${noun} ${verb} ${adverb}`;
  statementDiv.textContent = sentence;
}

const buildButton = document.getElementById("build-button");
buildButton.addEventListener("click", makeSentence);

//Challenge 4.1 Event Bubbling //Challenge 4.2 Event Capturing
const grandparent = document.querySelector("#grandparent")
const parent = document.querySelector("#parent")
const child = document.querySelector("#child")

grandparent.addEventListener("click", e =>{
  console.log("Grandparent Bubble")
})

grandparent.addEventListener("click", e =>{
  console.log("Grandparent Event")
}, {capture:true})

parent.addEventListener("click", e =>{
  console.log("Parent Bubble")  
})

parent.addEventListener("click", e =>{
  console.log("Parent Event")  
}, {capture:true})

child.addEventListener("click", e =>{
  console.log("Child Bubble")
})

child.addEventListener("click", e =>{
  console.log("Child Event")
}, {capture:true})

document.addEventListener("click", e =>{
  console.log("Document Bubble")
})

document.addEventListener("click", e =>{
  console.log("Document Event")
}, {capture:true})


//Challenge 5
// const category = document.querySelector("#category")
// const shirts = document.querySelector("#shirts")
// const pants = document.querySelector("#pants")
// const blazers = document.querySelector("#blazers")

// const divs = document.querySelectorAll("div")

// divs.forEach(div => {
//   div.addEventListener("click", () =>{
//     console.log("hi")
//   })
// })
document.getElementById("category").addEventListener("click", function (event) {
  if (event.target.id === "shirts") {
    alert("shirts");
  }
});

document.getElementById("category").addEventListener("click", function (event) {
  if (event.target.id === "pants") {
    alert("pants");
  }
});

document.getElementById("category").addEventListener("click", function (event) {
  if (event.target.id === "blazers") {
    alert("blazers");
  }
});


// const grandparent = document.querySelector("#grandparent")
// const parent = document.querySelector("#parent")
// const child = document.querySelector("#child")




