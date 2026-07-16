# 📚 Faculty Leave Management System (FLMS)

A modern **Faculty Leave Management System** developed using the **MERN Stack** and **React Native** to simplify and digitize the leave approval process in educational institutions.

The system supports three different user roles:

- 👨‍🏫 Faculty
- 👨‍💼 Head of Department (HOD)
- 🎓 Dean

Each role has its own dashboard, permissions, and workflow.

---

# ✨ Features

## 👨‍🏫 Faculty

- Secure Login
- Apply Leave
- View Leave History
- Track Leave Status
- Real-time Leave Approval Updates
- User Profile

---

## 👨‍💼 HOD

- Professional Dashboard
- View Pending Leave Requests
- Faculty Details
- Approve/Reject Leave Requests
- View Faculty Information
- Profile Management

---

## 🎓 Dean

- Dashboard
- Review HOD Approved Leaves
- Final Leave Approval
- Reject Leave Requests
- Leave Request Management
- Profile Management

---

# 🚀 Tech Stack

## Frontend (Mobile)

- React Native
- TypeScript
- Redux Toolkit
- React Navigation
- Axios

---

## Backend

- Node.js
- Express.js

---

## Database

- MongoDB
- Mongoose

---

## Authentication

- JWT Authentication
- Protected Routes
- Role-Based Access Control

---

# 📱 Screens

## Faculty

- Login
- Dashboard
- Apply Leave
- Leave History
- Profile

---

## HOD

- Dashboard
- Leave Requests
- Faculty Details
- Profile

---

## Dean

- Dashboard
- Leave Requests
- Faculty Details
- Profile

---

# 📂 Project Structure

```
FacultyLeaveMS
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── mobile
│   ├── api
│   ├── components
│   ├── navigation
│   ├── redux
│   ├── screens
│   ├── services
│   ├── theme
│   └── App.tsx
│
└── README.md
```

---

# 🔄 Leave Approval Workflow

```
Faculty
     │
     ▼
Apply Leave
     │
     ▼
Head of Department (HOD)
     │
Approve / Reject
     │
     ▼
Dean
     │
Approve / Reject
     │
     ▼
Faculty receives final leave status
```

---

# 🔐 User Roles

| Role | Permissions |
|------|-------------|
| Faculty | Apply Leave, View History |
| HOD | Approve/Reject Faculty Leaves |
| Dean | Final Approval/Rejection |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Kunwar-Nikhil/FacultyLeaveMS.git
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

---

## Mobile App

```bash
cd FacultyLeaveMS81
npm install
npx react-native run-android
```

---

# 🌟 Key Features

- Role-Based Authentication
- JWT Authorization
- Leave Approval Workflow
- Responsive UI
- Professional Dashboard
- Empty State Screens
- Pull To Refresh
- Modern Card UI
- Reusable Components
- REST APIs
- MongoDB Integration

---

# 📸 Application Preview

### Faculty

- Dashboard
- Apply Leave
- Leave History
- Profile

### HOD

- Dashboard
- Leave Requests
- Faculty Details
- Profile

### Dean

- Dashboard
- Leave Requests
- Faculty Details
- Profile

---

# 📈 Future Enhancements

- Push Notifications
- Email Notifications
- Dashboard Analytics
- Leave Calendar
- PDF Reports
- Admin Panel
- Attendance Integration
- Dark Mode
- Search & Filter
- Leave Statistics

---

# 👨‍💻 Developed By

**Nikhil Raghav**

B.Tech Computer Science Engineering

---

# ⭐ Support

If you found this project useful, don't forget to **Star ⭐ the repository**.
