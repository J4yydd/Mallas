document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-main a");
    const currentUrl = window.location.pathname.split("/").pop(); // Obtiene el nombre del archivo actual

    links.forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active"); // Añade la clase si coincide con la URL
        }
    });
});