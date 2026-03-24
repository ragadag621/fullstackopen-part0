
# 🌍 Countries Explorer Pro | Full-Stack Insights

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production--Ready-success)

A high-performance, developer-centric web application for global country data exploration. This project integrates multiple real-time APIs to provide a seamless experience, featuring live currency conversion and localized weather insights.

---

## 🚀 Key Engineering Features

* **💱 Smart Currency Engine:** - **Auto-Detection:** Uses IP-API to detect user's local currency on mount.
    - **Real-time Conversion:** Fetches live exchange rates to calculate conversions between the base and target country currencies.
    - **Inverse Rate Logic:** Precision math implementation for accurate foreign exchange results.
* **🔍 Optimized Search:** Instant filtering with dynamic UI state management.
* **🌤️ Live Weather Integration:** Fetches real-time atmospheric data (Temp, Wind, Icons) for capital cities via OpenWeather API.
* **📱 Progressive Web App (PWA):** Fully installable on mobile devices with high-speed performance and offline manifest support.
* **⚡ Modern UI/UX:** A minimalist, "Developer-Dashboard" style interface designed for visual clarity and accessibility.

---

## 🛠️ Tech Stack & Architecture

* **Core:** React.js (Functional Components & Advanced Hooks).
* **Styling:** Modular CSS3 with CSS Variables for a clean, scalable design.
* **Data Layer:** - **Rest Countries API:** Comprehensive country metadata.
    - **ExchangeRate-API:** Live financial data.
    - **OpenWeatherMap:** Real-time environmental metrics.
    - **IP-API:** Geolocation and localization.
* **Pattern:** Service-oriented architecture for clean API handling and separation of concerns.

---

## 📦 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ragadag621/fullstackopen-2026.git
    ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Launch dev server:**
   ```bash
   npm run dev
   ```

---

## 🌟 Roadmap
- [ ] Implement `LocalStorage` for "Favorite Countries" feature.
- [ ] Dark Mode support for low-light environments.
- [ ] Data visualization for population and economic trends.

---

### 👩‍💻 Developed By
**Raghad Aghbaria** *Junior Full-Stack Software Engineer & Tech Educator* *Passionate about building scalable, user-centric digital solutions.*
