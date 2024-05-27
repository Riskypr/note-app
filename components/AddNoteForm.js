class AddNoteForm extends HTMLElement {
  connectedCallback() {
    this.style.display = "none"; // Sembunyikan form saat pertama kali dirender
    this.innerHTML = `
        <div class="form-note">
        <h2>Add Note</h2>
        <input type="text" id="add-title" placeholder="Title">
        <textarea id="add-body" placeholder="Body"></textarea>
        <button id="add-submit">Submit</button>
        </div>
      `;
    this.querySelector("#add-submit").addEventListener("click", this.addNote.bind(this));
  }

  showForm() {
    this.style.display = "block"; // Tampilkan form
  }

  addNote() {
    const title = this.querySelector("#add-title").value;
    const body = this.querySelector("#add-body").value;
    if (title.trim() === "" || body.trim() === "") {
      alert("Please fill in both title and body.");
      return;
    }
    this.dispatchEvent(new CustomEvent("note-added", { detail: { title, body } }));
    this.resetForm();
  }

  resetForm() {
    this.querySelector("#add-title").value = ""; 
    this.querySelector("#add-body").value = ""; 
    this.style.display = "none"; 
  }
}

customElements.define("add-note-form", AddNoteForm);
export default AddNoteForm;
