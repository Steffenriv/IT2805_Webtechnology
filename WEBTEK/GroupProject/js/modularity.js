var pageBody = document.getElementById("pageBody");

function addHeader() {
    let header = document.createElement("header");
    let a = document.createElement("a");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");

    a.href = "homepage.html";

    img1.id = "baselayerLogo";
    img1.src = "img/Caesar_logo.png";
    img1.alt = "logo";

    img2.id = "baselayerLogoFont";
    img2.src = "img/caesars_palace_skrift.png";
    img2.alt = "logo skrift"; 

    header.id = "header";

    a.appendChild(img1);
    a.appendChild(img2);
    header.appendChild(a)
    document.body.insertBefore(header, document.getElementById("pageBody"));
}

function addNavbar() {
    
    
    let navBar = document.createElement('div');
    navBar.id = "navBar";

    let homepage = document.createElement("a");    
    let games = document.createElement("a");    
    let services = document.createElement("a");    
    let contact = document.createElement("a");    
    let about = document.createElement("a");  
    let pictures = document.createElement("a");
    
    homepage.innerHTML = "Homepage ";
    games.innerHTML = "Games ";
    services.innerHTML = "Services ";
    contact.innerHTML = "Contact ";
    about.innerHTML = "About us ";
    pictures.innerHTML = "Pictures ";


    homepage.href = "homepage.html";
    games.href = "games.html";
    services.href = "services.html";
    contact.href = "contact.html";
    about.href = "about.html";
    pictures.href = "pictures.html."
    
    navBar.appendChild(homepage);
    navBar.appendChild(services);
    navBar.appendChild(games);
    navBar.appendChild(contact);
    navBar.appendChild(pictures);
    navBar.appendChild(about);

    document.body.insertBefore(navBar, document.getElementById("pageBody"));
}

function addFooter() {
    let footer = document.createElement('footer');
    footer.id = "footer";
    footer.innerHTML = "caesarspalace@bestcasino.com </br> 3570 Las Vegas Boulevard South Las Vegas, NV 89109";
    document.body.appendChild(footer);
}
addHeader();
addNavbar();
addFooter();
