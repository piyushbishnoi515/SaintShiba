const accordian = document.querySelectorAll(".Accordian");

accordian.forEach(e => {
    e.addEventListener("click", function () {
        const acc = document.querySelector(".Accordian.active");
        e.classList.toggle("active");
        acc && acc.classList.remove("active");
    })

})
function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu_1").classList.toggle("cross")
}