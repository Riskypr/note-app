class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
          <p>&copy; 2024 Notes App</p>
        </footer>
      `;
  }
}

export default Footer;
