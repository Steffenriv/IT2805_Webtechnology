
function addHeader() {
    let header = document.createElement('header');
    header.innerHTML = "WELCOME HEADER!";
    header.id = "header";
    document.body.insertBefore(header, document.getElementById("Hi"));
}

function addNavbar() {
    //let navBar = document.createElement('div');
    //let pageList = ["homepage", "games", "pictures", "services", "about", "contact"];

    //Got this from StackOverFlow to check after html pagename, from user: Daniel Aranda answered may 17 2013. Got 20.11.2022
    //URL: https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
    //var path = window.location.pathname;
    //var page = path.split("/").pop();
//
    //for(page in pageList) {
    //    let current = pageList[page];
    //    current = document.createElement('a');
//
    //    current.href = current + ".html";
    //    if(current + ".html" == page)
    //        current.active = "True";
    //    navBar.appendChild(current);
    //    }
    //document.body.insertBefore(navBar, document.getElementById("hi"));

    let navBar = document.createElement('div');
    navBar.id = "navBar";

    let homepage = document.createElement("a");    
    let games = document.createElement("a");    
    let services = document.createElement("a");    
    let contact = document.createElement("a");    
    let about = document.createElement("a");  
    let pictures = document.createElement("a");
    
    homepage.innerHTML = "homepage ";
    games.innerHTML = "games ";
    services.innerHTML = "services ";
    contact.innerHTML = "contact ";
    about.innerHTML = "about us ";
    pictures.innerHTML = "pictures ";
    

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

    document.body.insertBefore(navBar, document.getElementById("Hi"));    
      //      <div id="navBar">   <!-- Got inspiration from w3schools url: -->
      //      <a class="active" href="homepage.html">Homepage</a>
      //      <a href="Games.html">Games</a>
      //      <a href="Pictures.html">Pictures</a>
      //      <a href="Services.html"> Services</a>
      //      <a href="about.html">About us</a>
      //      <a href="contact.html">Contact</a>
      //  </div>

}

function addFooter() {
    let footer = document.createElement('footer');
    footer.id = "footer";
    footer.innerHTML = "This is the end"; 
    document.body.appendChild(footer);
}

addHeader();
addNavbar();
addFooter();