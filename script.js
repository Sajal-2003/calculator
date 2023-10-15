let string = "";

let buttons = document.querySelectorAll(".btn");
let ans=document.querySelector("input");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      ans.value = string;
    } 
    else if (e.target.innerHTML == "AC") {
        string = "";
        ans.value = string;
      } 
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      ans.value = string;
    }
  });
});
