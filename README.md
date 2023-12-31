![icon](https://content.vannapps.com/public/kokoro-icon.png)
![banner](https://content.vannapps.com/public/kokoro-ui-banner.jpeg)

# @kokoro-ui
> Lightweight UI Components for React

## [See documentation](https://kokoro-ui.vercel.app)

<br/>

## **Requirements**

- [**tailwindcss 3 or later**](https://tailwindcss.com/)
- [**react 18 or later**](https://reactjs.org/)

---

## **npm**
```
npm i @kokoro-ui/theme @kokoro-ui/color
```

---

## **pnpm**
```
pnpm add @kokoro-ui/theme @kokoro-ui/color
```

---

## **yarn**
```
yarn add @kokoro-ui/theme @kokoro-ui/color
```

---

## **Tailwind Setup**
**tailwind.config.js**
```js
const { color } = require("@kokoru-ui/color");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@kokoro-ui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [color({
    primary: "#fff"
  })],
};
```

**tailwind.config.ts**
```js
import type { Config } from 'tailwindcss'
import { color } from "@kokoro-ui/color";

const config: Config = {
  content: [
    // ...
    "./node_modules/@kokoro-ui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [color({
    primary: "#fff"
  })],
}
export default config
```
