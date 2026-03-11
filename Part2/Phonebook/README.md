

# 📱 Phonebook Application - FullStack Open Part 2

This project is a modern **Phonebook Application** built as part of the **FullStack Open** course. It demonstrates a complete frontend-to-backend integration, focusing on state management, asynchronous data fetching, and clean UI design.

## 🚀 Key Features
- **Full CRUD Operations**: Create, Read, Update, and Delete contacts seamlessly.
- **Live Search & Filtering**: Instantly find contacts by searching for names or phone numbers using a dynamic filter.
- **Smart Data Validation**: Prevents duplicate names or numbers and prompts the user to update existing records instead.
- **Interactive Notifications**: Custom-styled success and error messages that disappear automatically after a few seconds.
- **Modern UI**: A clean, "Xone" inspired interface designed with performance and user experience in mind.

## 🛠️ Tech Stack
- **React**: For building a component-based, reactive user interface.
- **Axios**: Used for all HTTP requests (GET, POST, PUT, DELETE) to the backend.
- **JSON Server**: Acts as a mock REST API for data persistence.
- **CSS3**: Custom styles for a professional and responsive look.

## 📂 Project Architecture
The code is organized into modular components to ensure maintainability:
- `Filter`: Handles the search input and logic.
- `PersonForm`: Manages user inputs for adding/updating contacts.
- `Persons`: Displays the list and triggers delete/update actions.
- `Notification`: Displays dynamic feedback (Success/Error) based on app state.
- `services/Persons.js`: An abstracted layer for all API communications, keeping the logic clean.

## ⚙️ How to Run Locally


1. **Clone the repository:**
```bash
git clone [https://github.com/ragadag621/fullstackopen-2026.git](https://github.com/ragadag621/fullstackopen-2026.git)

```

2. **Install dependencies:**
```bash
npm install

```


3. **Start the JSON Server (Backend):**
```bash
npm run server

```


4. **Run the React App (Frontend):**
```bash
npm run dev

```



## 💡 Lessons Learned

* Managing complex states and side effects using `useState` and `useEffect`.
* Handling asynchronous operations and Graceful Error Handling (e.g., handling 404s when a record is deleted from another client).
* Structuring a React application for scalability and separating API services from UI components.

---

**Developed by: Raghad**
*Programming Instructor & Passionate Web Developer*

