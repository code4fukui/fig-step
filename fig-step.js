class FigStep extends HTMLElement {
  constructor() {
    super();
    this.style.position = "relative";
    const txt = this.textContent;
    this.textContent = "";
    const c = document.createElement("span");
    const n = txt.indexOf(" ");
    c.textContent = n < 0 ? txt : txt.substring(0, n);
    this.appendChild(c);
    Object.assign(c.style, {
      "font-family": "sans-serif",
      position: "absolute",
      "text-align": "center",
      top: "-1.5em",
      left: "0em",
      "z-index": 100,
      color: "black",
      "font-size": "20px",
      "background-color": "white",
      border: "2px solid black",
      "border-radius": "1.5em",
      width: "1.5em",
      height: "1.5em",
    });
  }
}

customElements.define("fig-step", FigStep);

export { FigStep };