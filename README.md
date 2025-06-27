# 👨‍🏫 Student-Teacher Booking Web App

A responsive web application that allows **students** to book appointments with **teachers**, and allows **teachers** and **admins** to manage those bookings. Built using **HTML, Bootstrap 5, JavaScript, and Firebase**.

🚀 **Live App**: [https://student-teacher-booking-fawn.vercel.app/](https://student-teacher-booking-fawn.vercel.app/)

---

## 🛠️ Tech Stack

- HTML5, CSS3, Bootstrap 5
- JavaScript (Vanilla)
- Firebase v9.22.0 (Compat):
  - Authentication
  - Firestore Database
- Vercel (Deployment)

---

## 🔐 User Roles

- 👨‍🎓 **Student**
  - Register/Login
  - Book Teacher
  - View Appointments
  - Cancel Pending Appointments

- 👩‍🏫 **Teacher**
  - Login
  - View Requests
  - Accept Appointments
  - Send Message Replies

- 🛠️ **Admin**
  - Login
  - Add/Update/Delete Teachers
  - View Teacher List

---

## 📁 Folder Structure

project-root/
│
├── index.html # Home page
├── login.html # Login page
├── register.html # Registration page
├── student.html # Student dashboard
├── teacher.html # Teacher dashboard
├── admin.html # Admin dashboard
├── js/
│ └── firebase-config.js # Firebase initialization
├── README.md
└── testcases.md

yaml
Copy
Edit

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/student-teacher-booking-app.git
cd student-teacher-booking-app
Setup Firebase project:

Create project at firebase.google.com

Enable Authentication (Email/Password)

Enable Firestore Database

Add Web App credentials to js/firebase-config.js

Open index.html in browser

Or deploy to vercel.com

📌 Features Summary
🔐 Firebase Authentication

📅 Role-based login and dashboards

🔄 Realtime appointment tracking

📬 Messaging between student and teacher

🧑‍💼 Admin panel with CRUD for teachers

📦 Deployment
Hosted on Vercel

Public GitHub Repo: https://github.com/your-username/student-teacher-booking-app

✨ Credits
Built by Chaitanya Kandula
📧 Email: chaitanyakandula2005@gmail.com
