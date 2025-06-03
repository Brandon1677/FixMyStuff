const services = document.querySelector("#services")
const Portafolio = document.querySelector("#Portafolio")

/* Menu Services */
services.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".services");
    sectionS.scrollIntoView({behavior: "smooth"});
})


/* Menu Portafolio */
Portafolio.addEventListener("click", (p) => {
    p.preventDefault();

    const sectionP = document.querySelector(".Portafolio");
    sectionP.scrollIntoView({behavior: "smooth"});
})

