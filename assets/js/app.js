const accordian = document.querySelectorAll(".Accordian");

accordian.forEach(e => {
    e.addEventListener("click", function () {
        const acc = document.querySelector(".Accordian.active");
        e.classList.toggle("active");
        acc && acc.classList.remove("active");
    })

})