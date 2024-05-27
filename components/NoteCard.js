class NoteCard extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute('id');
    const title = this.getAttribute('title');
    const body = this.getAttribute('body');
    const createdAt = this.getAttribute('created-at');
    const archived = this.getAttribute('archived');

    this.innerHTML = `
      <div class="note-card">
        <h2>${title}</h2>
        <p>${body}</p>
        <p>Created At: ${new Date(createdAt).toLocaleString()}</p>
        <p>Archived: ${archived}</p>
      </div>
    `;
  }
}

customElements.define('note-card', NoteCard);
export default NoteCard;