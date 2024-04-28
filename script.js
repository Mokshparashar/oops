// const body = document.querySelector("body");
// const button1 = document.querySelectorAll("button")[0];
// const button2 = document.querySelectorAll("button")[1];

// button1.addEventListener("click", () => {
//   localStorage.setItem("theme", "black");
//   const theme = localStorage.getItem("theme");
//   body.style.backgroundColor = theme;
// });
// button2.addEventListener("click", () => {
//   localStorage.setItem("theme", "white");
//   const theme = localStorage.getItem("theme");
//   body.style.backgroundColor = theme;
// });

// const theme = localStorage.getItem("theme");
// body.style.backgroundColor = theme;

class Name {
  constructor() {
    console.log("I am a constructor");
  }

  subt(c, d) {
    console.log(c - d);
  }
}

class NewName extends Name {
  division(a, b) {
    console.log(a / b);
    // super.add(a, b);
  }

  add(a, b) {
    const c = a + b;
    return c;
  }

  average(a, b) {
    const val = this.add(a, b);

    console.log(val / 2);
  }
}

const animal = new NewName();

// animal.division(4, 5);

console.log(animal instanceof Name);
