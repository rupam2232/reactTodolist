# React ToDo List App

This is a simple **ToDo List App** built using **React** and styled with **Tailwind CSS**. It allows users to manage their tasks efficiently by adding, editing, deleting, and marking tasks as completed. The app also provides a visual cue when all tasks are completed.

## Features

- **Add New Tasks**: Users can add tasks to their to-do list by entering the task name and clicking the "Save" button.
- **Mark Tasks as Completed**: Users can mark tasks as completed by checking the box next to each task. Completed tasks are visually distinguished with a strikethrough effect.
- **Edit Tasks**: Users can edit an existing task by clicking the "Edit" button, which allows them to modify the task name.
- **Delete Tasks**: Users can delete a task by clicking the "Delete" button.
- **Show/Hide Completed Tasks**: Users can toggle the visibility of completed tasks using a checkbox.
- **Persistent Storage**: Tasks are saved in the browser's `localStorage`, so the to-do list remains intact even after refreshing the page.
- **Completion Message**: If all tasks are marked as completed, a message "You've completed all tasks!" will be displayed instead of the default "No Todos to display" message or blank space.

## How to Use

1. **Add a Task**: 
   - Enter the task name in the input field and click the "Save" button. The task will appear in the list below.
   
2. **Complete a Task**: 
   - Check the box next to the task to mark it as completed. Completed tasks will be shown with a strikethrough.

3. **Edit a Task**:
   - Click the "Edit" button next to a task, modify the task name, and then click the "Edit" button again to save the changes.

4. **Delete a Task**: 
   - Click the "Delete" button next to a task to remove it from the list.

5. **Show/Hide Completed Tasks**:
   - Use the "Show Finished" checkbox to toggle between showing and hiding completed tasks.

6. **Completion Message**:
   - When all tasks are completed, a message saying "You've completed all tasks!" will be displayed.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/rupam2232/reactTodolist.git


2. Navigate to the project folder:
    ```bash
    cd reactTodolist

3. Install dependencies:
    ```bash
    npm install

4. Start the development server:
    ```bash
    npm run dev
5. Open the app in your browser:
    - The app will be running at http://localhost:5173

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
-  **Tailwind CSS**: A utility-first CSS framework for styling the app.
- **LocalStorage**: Browser storage to persist tasks across page reloads.

## Folder Structure
```bash
src/
│
├── components/        # React components
├── App.js             # Main component
├── index.js           # React entry point
└── ...