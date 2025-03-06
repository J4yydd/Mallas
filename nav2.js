document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navv-main a");
    const currentUrl = window.location.pathname.split("/").pop(); // Obtiene el archivo actual

    console.log("URL actual:", currentUrl); // Para verificar qué URL está detectando

    links.forEach(link => {
        console.log("Revisando:", link.getAttribute("href")); // Para ver los enlaces en la consola

        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active"); // Añade la clase si coincide con la URL
            console.log("Sección activa:", link.textContent);
        }
    });
});