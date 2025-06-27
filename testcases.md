 ✅ Test Cases for Student-Teacher Booking Web App

This file lists core manual test cases for validating functionality across Student, Teacher, and Admin roles.

---

## 🔐 Authentication

| Test ID | Description                          | Input                        | Expected Result                         |
|--------|--------------------------------------|------------------------------|-----------------------------------------|
| TC001  | Register as student                  | Email, password, role=student| Redirect to login                       |
| TC002  | Register as teacher                  | Email, password, role=teacher| Redirect to login                       |
| TC003  | Login with valid credentials         | Registered email/password    | Redirect based on role                  |
| TC004  | Login with invalid credentials       | Wrong email/password         | Show error alert                        |

---

## 👨‍🎓 Student Dashboard

| Test ID | Description                        | Input                         | Expected Result                         |
|--------|------------------------------------|-------------------------------|-----------------------------------------|
| TC101  | Load teacher dropdown              | Logged-in student             | All teachers listed                     |
| TC102  | Book a teacher                     | Select teacher, type message  | Appointment created (status: pending)   |
| TC103  | View my appointments               | Authenticated student         | List of all bookings                    |
| TC104  | Cancel pending appointment         | Click cancel button           | Status updated to `cancelled`          |

---

## 👩‍🏫 Teacher Dashboard

| Test ID | Description                        | Input                         | Expected Result                         |
|--------|------------------------------------|-------------------------------|-----------------------------------------|
| TC201  | View booking requests              | Teacher login                 | List of relevant bookings               |
| TC202  | Accept a booking                   | Click accept button           | Status updated to `accepted`            |
| TC203  | Reply to student                   | Enter text, click reply       | Message added to Firestore              |

---

## 🛠️ Admin Panel

| Test ID | Description                        | Input                         | Expected Result                         |
|--------|------------------------------------|-------------------------------|-----------------------------------------|
| TC301  | Add teacher                        | Name, department              | Entry added to users (role=teacher)     |
| TC302  | Update teacher                     | Name, department (prompt)     | Data updated in Firestore               |
| TC303  | Delete teacher                     | Click delete button           | Entry removed from Firestore            |

---

## 📋 Logging & Safety

| Test ID | Description                        | Expected Result                        |
|--------|------------------------------------|----------------------------------------|
| TC901  | Refresh page after login           | Remains logged in (auth persists)      |
| TC902  | Try access without login           | Redirected to login.html               |
| TC903  | Console logs                       | Shows actions like login, create, etc. |
