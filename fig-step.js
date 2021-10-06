class FigStep extends HTMLElement {
  constructor(s) {
    super();
    this.style.position = "relative";
    const txt = s || this.textContent || 0;
    this.textContent = "";
    const c = document.createElement("span");
    const n = typeof txt == "string" ? txt.indexOf(" ") : -1;
    c.textContent = n < 0 ? txt : txt.substring(0, n);
    this.appendChild(c);
    Object.assign(c.style, {
      "font-family": "sans-serif",
      position: "absolute",
      "text-align": "center",
      top: "-1.8em",
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

    this.style.display = document.location.href.indexOf("fig=on") >= 0 ? "inline-block" : "none";
  }

  static add(selector, s) {
    const c = document.body.querySelector(selector);
    if (!c) {
      console.log("not found: " + selector);
      return;
    }
    const b = c.getBoundingClientRect();
    const fig = new FigStep(s);
    document.body.appendChild(fig);
    fig.style.position = "absolute";
    fig.style.top = (b.top + window.pageYOffset) + "px";
    fig.style.left = (b.left + window.pageXOffset) + "px";
  }
}

customElements.define("fig-step", FigStep);

export { FigStep };
