# Asynchronous Dynamic News Reader 📰

An interactive web application that fetches and processes real-time global news data from a third-party API, developed as a practical project for my university **UVEG**.

<img width="1125" height="985" alt="image" src="https://github.com/user-attachments/assets/6708b96e-eb47-43ac-9a6d-9e0d38da8544" />

## Key Features

* **Asynchronous Fetching:** Native integration with the `Fetch API` targeting `freenewsapi.ai`, utilizing strict promise handling (`.then`, `.catch`) [MDN Web Docs - Fetch API](https://mozilla.org).
* **LocalStorage State Persistence:** Advanced mechanism that caches the previously viewed topic to guarantee a randomized, non-repeating sequence of categories upon hitting refresh [MDN Web Docs - Window.localStorage](https://mozilla.org).
* **Smart Sorting Algorithm:** Custom implementation of the `.sort()` method to prioritize and group articles with valid visual assets at the top of the feed [MDN Web Docs - Array.prototype.sort()](https://mozilla.org).
* **Responsive Layout & UX:** Fluid interface engineered with Flexbox, featuring reader-friendly typography controls (`line-height`) and smooth elastic micro-interactions on button hovers [MDN Web Docs - CSS flexible box layout](https://mozilla.org).
* **Robust Data Validation:** Leverage short-circuit logical operators (`||`) to handle missing or `null` values safely by deploying default fallback imagery and descriptions [MDN Web Docs - Logical OR (||)](https://mozilla.org).

## Built With

* HTML5 (Semantic document layout) [MDN Web Docs - HTML](https://mozilla.org)
* CSS3 (Flexbox architecture and transition transformations) [MDN Web Docs - CSS](https://mozilla.org)
* Vanilla JavaScript (ES6+, asynchronous programming, and DOM manipulation) [MDN Web Docs - JavaScript](https://mozilla.org)
