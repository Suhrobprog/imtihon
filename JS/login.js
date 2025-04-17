import { validator } from './utils.js';
import { login } from './request.js';
import "./protector.js"
const elform = document.getElementById("form");


const elForm = document.getElementById("form");

elForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const result = {};

    for (const [key, value] of formData.entries()) {
        result[key] = value;
    }

    const checker = validator(result);

    if (checker) {
        alert(checker.message);
        e.target[checker.target].focus();
      } else {
        e.target.dataset.state = "pending";
        e.submitter.disabled = true;
      
        login(result)
          .then((res) => {
            window.location.replace("/main.html")
            
            localStorage.setItem("user", JSON.stringify(res));
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            e.target.dataset.state = "normal";
            e.submitter.disabled = false;
          });
      }      
});
