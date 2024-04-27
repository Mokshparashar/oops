const body = document.querySelector("body");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  localStorage.setItem("theme", "black");
});
const theme = localStorage.getItem("theme");
body.style.backgroundColor = theme;

class Name {
  constructor() {
    console.log("I am a constructor");
  }

  add(a, b) {
    console.log(a + b);
  }

  subt(c, d) {
    console.log(c - d);
  }
}

const duplicateName = new Name();

class NewName extends Name {
  constructor() {
    console.log("I am the constructor of newname class");
  }
  division(a, b) {
    console.log(a / b);
  }
}

const animal = new NewName();

animal.division(5, 5);
