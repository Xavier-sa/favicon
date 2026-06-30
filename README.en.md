# Aquidauana Favicon Generator

Simple project to generate SVG and PNG favicons with elements inspired by Aquidauana's visual identity.

This project uses plain HTML, CSS and JavaScript. The files are separated with a basic MVC idea to make the code easier to study.

## Languages

- [Português](README.md)
- [English](README.en.md)
- [Español](README.es.md)

## Structure

```text
.
├── index.html
├── src/
│   ├── css/
│   │   └── style.css
│   ├── data/
│   │   └── access.json
│   └── js/
│       ├── model.js
│       ├── view.js
│       ├── controller.js
│       └── counter.js
├── README.md
├── README.en.md
├── README.es.md
├── CONTRIBUTING.md
└── LICENSE
```

## How to open

Open `index.html` in your browser.

No dependencies, build step or local server are required.

## How MVC is used

- `model.js`: stores colors, icon names and SVGs.
- `view.js`: updates the screen, shows messages and handles downloads.
- `controller.js`: receives clicks and connects the Model with the View.
- `counter.js`: counts visits in the browser with `localStorage`.
- `access.json`: stores the initial counter settings.
- `index.html`: contains the page structure.
- `style.css`: contains the project styles.

## Features

- Icon selection.
- Transparent, square or circular background.
- Background color selection.
- Favicon preview.
- SVG download.
- PNG download in 32, 180 and 512.
- Basic HTML code for favicon usage.
- Local access counter.

## Access counter

The counter uses `src/data/access.json` as initial configuration and saves visits in the browser `localStorage` as JSON.

Because this is a plain HTML project, it cannot write data back to a JSON file on the server. So the counter shows visits from that browser only. To count real visits from all users, an API, external service or serverless function would be required.

## License

Free to use. This project is licensed under the MIT License.
