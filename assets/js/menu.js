document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");

    // Crear el menú de navegación para desktop
    const nav = document.createElement("nav");
    nav.className = "hidden md:flex gap-4";

    const ul = document.createElement("ul");
    ul.className = "flex flex-col md:flex-row gap-4";

    const menuItems = [
        { text: "Home", link: "index.html" },
        { text: "Team", link: "public/team.html" },
        { text: "Research", link: "public/research.html" },
        { text: "News", link: "public/news.html" },
        { text: "Contact", link: "public/contact.html" },
        { text: "Collaboration", link: "public/collaboration.html" },
    ];

    menuItems.forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.text;
        a.className = "text-white font-bold no-underline";
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);

    // Crear el menú móvil
    const mobileMenu = document.createElement("div");
    mobileMenu.id = "mobile-menu";
    mobileMenu.className = "p-5";

    const mobileUl = document.createElement("ul");
    mobileUl.className = "flex flex-col gap-4";

    menuItems.forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.text;
        a.className = "text-white font-bold no-underline";
        li.appendChild(a);
        mobileUl.appendChild(li);
    });

    mobileMenu.appendChild(mobileUl);
    document.body.appendChild(mobileMenu);

    // Manejar el menú de hamburguesa
    const menuToggle = document.getElementById("menu-hamburguesa");
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });
});