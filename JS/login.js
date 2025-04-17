const Elform = document.getElementById("form");


Elform.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData (e.target)
    formData.forEach((el, key) => {
        console.log(el, key);
        
    });
});
