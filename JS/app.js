window.addEventListener("load", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user === null) {
        console.log(this.window.location.href);
        this.window.location.href = "http://127.0.0.1:5500/PAGES/home.html";
    }
})