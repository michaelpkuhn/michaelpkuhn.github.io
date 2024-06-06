const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <link rel="stylesheet" href="/static/main.css">
    <header class="container">
    <div><a>Michael</a></div>
    <nav>
        <ul>
            <li><a id="current" href="/index.html">Home</a></li>
            <li><a href="/pages/about.html">About</a></li>
            <li><a href="/pages/projects.html">Projects</a></li>
            <li><a href="mailto:mickuhn95@gmail.com">Contact</a></li>
        </ul>
    </nav>
    </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
