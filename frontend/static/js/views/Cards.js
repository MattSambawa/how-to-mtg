import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Cards");
    }

    async getHtml() {
        return `
            <h1>Cards</h1>
            <p>If you are seeing this, you are viewing Cards with SPA!</p>
        `;
    }
}