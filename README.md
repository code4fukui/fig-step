# fig-step

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight JavaScript library to add numbered annotations to web page elements using a `<fig-step>` custom element.

## Demo

- [Live Example](https://code4fukui.github.io/fig-step/?fig=on)

## Features

- **Simple API**: Add annotations declaratively with an HTML tag or programmatically with a JavaScript function.
- **URL-Controlled Visibility**: Toggle annotations on or off using a URL parameter (`?fig=on`).
- **Lightweight**: Zero-dependency, vanilla JavaScript custom element.
- **CSS-Customizable**: Easily override the default styles for the annotations.

## Usage

### 1. Add the Script

Include the module in your HTML file.

```html
<script type="module" src="https://code4fukui.github.io/fig-step/fig-step.js"></script>
```

### 2. Add Annotations

There are two ways to add annotations:

#### Option A: Inline Placement

Place the `<fig-step>` tag directly in your HTML where you want the annotation to appear. The content should be a number. Any text following the number and a space will be ignored.

```html
<!-- This will display an annotation with the number "1" -->
<p>First, do this <fig-step>1 Initial setup</fig-step>.</p>

<!-- This will display an annotation with the number "2" -->
<button>Submit <fig-step>2</fig-step></button>
```

#### Option B: Programmatic Placement

Use the static method `FigStep.add(selector, text)` to attach an annotation to an existing element. The annotation will be positioned at the top-left corner of the element matching the CSS selector.

```html
<button id="save-btn">Save Changes</button>

<script type="module">
  import { FigStep } from "https://code4fukui.github.io/fig-step/fig-step.js";

  // This will add an annotation with the number "3" to the button
  FigStep.add("#save-btn", "3 Click to save");
</script>
```

### 3. Control Visibility

Annotations are hidden by default. To make them visible, append the `?fig=on` query parameter to your page's URL.

- **Show annotations**: `https://example.com/page?fig=on`
- **Hide annotations**: `https://example.com/page` or `https://example.com/page?fig=off`

## Customization

You can override the default styles of the annotations using CSS. The annotation is a `<span>` element inside the `<fig-step>` custom element.

```css
/* Example: Change the color of the annotation */
fig-step span {
  background-color: #ffdd57;
  border-color: #ff9f1c;
  color: #272727;
}
```

## License

[MIT](LICENSE)