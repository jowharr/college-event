# Campus Connect - Student Project Guide 🎓

Welcome to **Campus Connect**! This is a modern, responsive college event management website designed to help students discover upcoming events, join clubs, and stay updated with campus activities.

This guide will help you understand the project, set it up on your computer, and make changes to it.

---

## 🛠️ Technology Stack (What's under the hood?)

This project uses the latest and most popular web technologies:

*   **[Next.js 15+](https://nextjs.org/)**: The framework used to build the website. It handles routing, pages, and makes the site super fast.
*   **[React 19](https://react.dev/)**: The library for building the user interface (UI) components.
*   **[TypeScript](https://www.typescriptlang.org/)**: A version of JavaScript that adds types (like checking if a variable is a number or text) to help prevent bugs.
*   **[Keystatic](https://keystatic.com/)**: A Content Management System (CMS) that lives right in your code. It lets you edit events, clubs, and team members without writing code!
*   **[CSS Modules](https://github.com/css-modules/css-modules)**: Used for styling the website with specific, scoped styles for each component.
*   **[Google Sheets API](https://developers.google.com/sheets/api)**: Used to save event registrations directly to a spreadsheet.

---

## 🚀 Features

1.  **Home Page**:
    *   **Upcoming Events Widget**: Automatically shows the next 2 events.
    *   **Club Corner**: Highlights active student clubs.
    *   **Countdown Timer**: Counts down to the next big college fest (editable in CMS!).
2.  **Events Page**:
    *   Browse all Upcoming and Past events.
    *   **Registration**: Real-time form that saves student data to Google Sheets.
3.  **Clubs Page**:
    *   Beautiful glass-morphic cards displaying all college clubs.
4.  **Gallery**:
    *   A photo grid showcasing memories from past events.
5.  **Admin Panel (`/keystatic`)**:
    *   A dashboard to easily add/edit Events, Clubs, Team Members, and Gallery photos without touching code.

---

## 💻 How to Run this Project (Windows from Scratch)

Follow these steps carefully to get the project running on your laptop.

### Step 1: Install Prerequisites
Before you start, you need two main tools installed:
1.  **Node.js**: This allows you to run JavaScript outside the browser.
    *   Download **Node.js (LTS version)** from [nodejs.org](https://nodejs.org/).
    *   Install it (just click Next, Next, Finish).
2.  **Git**: This helps manage the project files.
    *   Download **Git for Windows** from [git-scm.com](https://git-scm.com/).
    *   Install it using default settings.
3.  **VS Code**: The best code editor to view and edit files.
    *   Download from [code.visualstudio.com](https://code.visualstudio.com/).

### Step 2: Download the Project
1.  Open the folder containing this project (if you got it via ZIP, extract it first).
2.  Right-click inside the folder and select **"Open with Code"** (or open VS Code and use File > Open Folder).

### Step 3: Install Dependencies
1.  In VS Code, open the **Terminal** (View > Terminal or press `` Ctrl + ` ``).
2.  Type the following command and press Enter:
    ```bash
    npm install
    ```
    *This downloads all the libraries listed in the "Technology Stack" section. It might take a few minutes.*

### Step 4: Setup Environment Variables (Important!)
To make the Event Registration work (saving to Google Sheets), you need a specific file.
1.  Create a new file in the root folder named `.env.local`.
2.  (Ask your project lead/teacher for the contents of this file, or leave it blank to run the site without working registration).

### Step 5: Run the Development Server
1.  In the Terminal, type:
    ```bash
    npm run dev
    ```
2.  You should see text saying `Ready in ... http://localhost:3000`.
3.  Open your web browser (Chrome/Edge) and go to **[http://localhost:3000](http://localhost:3000)**.
    *   🎉 **Success!** You should see the Campus Connect website.

---

## ✏️ How to Edit Content (The Easy Way)

You don't need to write code to change the text or events!

1.  Make sure the server is running (`npm run dev`).
2.  Go to **[http://localhost:3000/keystatic](http://localhost:3000/keystatic)**.
3.  You will see the **Admin Dashboard**.
4.  Click on **Events**, **Clubs**, or **Team**.
5.  **Add New**: Click the "Add" button to create a new entry.
6.  **Edit**: Click on an existing item to change its title, date, or image.
7.  **Save**: Click the "Save" icon (disk) or press `Ctrl + S`.
    *   *The website updates instantly!*

---

## 👨‍💻 How to Edit Code (For Developers)

If you want to change the design or logic:

*   **Pages**: Go to `src/app`.
    *   `src/app/page.tsx` = Home Page
    *   `src/app/events/page.tsx` = Events Page
*   **Components**: Go to `src/components`.
    *   Reusable parts like `Header.tsx`, `Footer.tsx`, `EventCard.tsx`.
*   **Styles**: Look for `.module.css` files next to the components (e.g., `Header.module.css`).
    *   We use standard CSS. You can change colors (`color: red;`), sizes, and layout here.
*   **Global Style**: `src/app/globals.css` contains the main theme colors and background gradient.

### Common Tasks
*   **Change the Logo**: Replace `public/logo.png`.
*   **Change Site Title**: Edit `src/app/layout.tsx`.
*   **Add a Page**: Create a new folder in `src/app/` (e.g., `src/app/faq/page.tsx`).

---

## ❓ Troubleshooting

*   **"npm command not found"**: You didn't install Node.js correctly. Reinstall it and restart your computer.
*   **Registration fails**: You are likely missing the `.env.local` file with Google Credentials.
*   **Changes not showing**: Refresh the page or restart the server (`Ctrl + C` then `npm run dev`).
