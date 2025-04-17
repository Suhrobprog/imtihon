window.addEventListener("load", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user === null) {
        console.log(this.window.location.href);
        this.window.location.href = "./pages/home.html"
    }
})