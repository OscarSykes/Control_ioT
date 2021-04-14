class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Oscar Yahir Hernández Hernández`;
  }
}
customElements.define(
  "mi-footer", MiFooter);