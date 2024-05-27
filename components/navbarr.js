class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>
        <h1>
        Notes App
        </h1>
        </nav>
      `;
    }
  
  }
  
  export default Navbar;
  