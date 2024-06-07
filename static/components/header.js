const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <link rel="stylesheet" href="/static/css/main.css">
    <link rel="stylesheet" href="/static/css/mobile.css">
    <header class="container">
    <div id="homeName"><a>Michael</a></div>
    <nav>
        <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/pages/about.html">About</a></li>
            <li><a href="/pages/projects.html">Projects</a></li>
            <li><a href="mailto:mickuhn95@gmail.com">Contact</a></li>
        </ul>
    </nav>
    </header>
`;

class Header extends HTMLElement {
  constructor() {
    self = super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(headerTemplate.content);

    shadowRoot.querySelectorAll("nav ul a").forEach((e)=>{
        let activePageBool = e.href == window.location.href;
        if(activePageBool){
            e.id = 'current';
        }
    })
  }
}

customElements.define('header-component', Header);
