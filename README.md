<h3 align="center">BlogApp: A Simple Blogging Platform</h3>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

BlogApp is an intuitive platform designed for both readers and writers. With a clean interface and powerful features, it allows users to effortlessly create, view, and manage blog posts. Enjoy a smooth experience with robust authentication and efficient data handling using React and Tailwind CSS.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Appwrite
- JavaScript
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Authentication System**: Secure login and registration with user privacy ensured.

👉 **Explore Posts**: Discover and read a variety of blog entries from different authors.

👉 **Create and Edit Posts**: Easily create new posts and edit existing ones with a user-friendly interface.

👉 **Detailed Post Page**: View detailed content of posts and related entries for a comprehensive reading experience.

👉 **Responsive Design**: A mobile-friendly interface that provides a seamless browsing experience across devices.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/KanoAb08/blog.git
cd BLOG
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_APPWRITE_URL = 
VITE_APPWRITE_PROJECT_ID = 
VITE_APPWRITE_DATABASE_ID = 
VITE_APPWRITE_COLLECTION_ID = 
VITE_APPWRITE_BUCKET_ID = 
VITE_TINYMCE_API_KEY=
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
