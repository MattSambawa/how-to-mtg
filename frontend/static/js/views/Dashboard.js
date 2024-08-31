import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Dashboard</h1>
            <p>If you are seeing this, you are viewing the Dashboard with SPA!</p>
            <p><a href="/cards" data-link> View cards</a></p>
        `;
    }
}