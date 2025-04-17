window.addEventListener("load", function (e) {
    const currentPage = e.target.location.pathname;
    const allowedPages = [ "/", "/main.html", "/PAGES/add.html"];
    const fn37 = JSON.parse(localStorage.getItem("fn37"));
    console.log(fn37);
    console.log(currentPage);

    // if (fn37 === null && allowedPages.includes(currentPage)) {
    //     window.location.replace("/PAGES/home.html");
    // }

    // if (fn37 && !allowedPages.includes(currentPage)) {
    //     window.location.replace("/main.html");
    // }
});

