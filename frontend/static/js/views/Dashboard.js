import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
    <h1>yo</h1>
    <p>yo</p>
    <p>yo</p>
    `;
  }
}
