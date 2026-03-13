# 💪 FitTrack – Workout Tracker

FitTrack is a simple workout tracking web application that allows users to create, view, and manage their workouts.  
It helps users keep track of exercise routines, sets, and repetitions in an organized way.

---

## 🚀 Features

- 📋 View list of workouts
- ➕ Add new workout
- ✏️ Edit workout details
- 🗑 Delete workouts
- 🔍 Search workouts
- 🏷 Filter workouts by body part
- 📊 Average workout duration
- ⚡ Toast notifications
- 🌙 Dark themed UI

---

## 🛠 Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- DaisyUI

**Libraries**
- Axios (API requests)
- React Router DOM
- Lucide React (icons)
- React Hot Toast (notifications)

---

## 📁 Project Structure


frontend
│
├── public
│
├── src
│ ├── components
│ │ ├── Navbar.jsx
│ │ ├── WorkoutCard.jsx
│ │ └── WorkoutNotFound.jsx
│ │
│ ├── pages
│ │ ├── HomePage.jsx
│ │ ├── CreatePage.jsx
│ │ └── WorkoutDetailPage.jsx
│ │
│ ├── lib
│ │ ├── axios.js
│ │ └── utils.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── tailwind.config.js
├── vite.config.js
└── package.json


---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/fittrack.git

Go to the project folder:

cd fittrack

Install dependencies:

npm install

Start the development server:

npm run dev
🌐 API

The project uses Axios to communicate with the backend API.

Example request:

api.get("/workout")
📸 Screenshots

You can add screenshots of:

Home Page

Create Workout Page

Workout Cards

📌 Future Improvements

User authentication

Workout progress charts

Mobile responsive improvements

Cloud database integration

👨‍💻 Author

Developed by Harshad Kajari


---

# 📌 Where to place it
Create a file in the root of your project:


frontend
README.md


or main project root.

---


![Home Page](./screenshots/home.png)
