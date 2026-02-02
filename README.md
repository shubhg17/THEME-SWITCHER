# 🎨 Theme Switcher (React + Vite)

A simple and responsive Light/Dark Theme Switcher built using React and Vite. The application allows users to toggle between light and dark modes seamlessly using Tailwind CSS’s class-based dark mode support.

---

## 🚀 Features

- Toggle between Light Mode and Dark Mode

- Uses Tailwind CSS dark mode (dark: utilities)

- Fast performance with React + Vite

- Clean and minimal UI

- Theme applied globally using the html class

- Easily extendable for persistence (localStorage)

---

## 📁 File Structure
theme-switcher/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── tailwind.config.js
├── package.json
├── vite.config.js
└── README.md

---

## 🛠 Technologies Used

- React – Component-based UI

- Vite – Fast development and build tool

- Tailwind CSS – Utility-first styling

- JavaScript (ES6+) – Application logic

---

## 🔧 How to Run

Clone the repository:
```
git clone https://github.com/your-username/theme-switcher.git
```

Navigate into the project folder:
```
cd theme-switcher
```

Install dependencies:
```
npm install
```

Start the development server:
```
npm run dev
```

- Open the given localhost URL in your browser.

---

## 🌙 How Dark Mode Works

- Tailwind dark mode is enabled using:

darkMode: "class"


- The dark class is toggled on the <html> element:

document.documentElement.classList.toggle("dark")


- Styles are applied using Tailwind’s dark: utilities.

---

## 📌 Notes

- Make sure to restart the dev server after changing tailwind.config.js

- Dark mode styles only work with the dark: prefix

- Can be extended to:

- Save theme preference in localStorage

- Add system theme detection

- Add animations or icons

--- 

## 👨‍💻 Author

Made by Shubham Ghai
