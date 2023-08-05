# Manage-Your-Task-React-JS

This is a simple To-Do List web application built using React. It allows users to add tasks, mark tasks as completed, and move completed tasks back to the pending list. The application utilizes Formik for form handling and Yup for form validation.

## Getting Started

To run the To-Do List application on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone <repository_url>
cd <repository_directory>
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev 
```

The application should now be accessible at `http://localhost:3000` in your web browser.

## Features

- Add new tasks with a title and description.
- Mark tasks as completed and move them to the completed list.
- Move completed tasks back to the pending list.
- Remove tasks from both the pending and completed lists.

## Usage

1. Enter the title and description of the task you want to add in the input fields provided.
2. Click the "Add Task" button to add the task to the pending list.
3. Tasks in the pending list will display the title, description, and "Pending" status.
4. To mark a task as completed, click the "Complete" button next to the task in the pending list. The task will be moved to the completed list.
5. Tasks in the completed list will display the title, description, and "Complete" status.
6. To move a completed task back to the pending list, click the "Pending" button next to the task in the completed list.
7. To remove a task from either the pending or completed list, click the "Remove" button next to the task.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Formik: A form library for React that helps with form handling and validation.
- Yup: A JavaScript schema builder for value parsing and validation.
- CSS: Custom styling for the application.

## Notes

- The application is currently implemented as a simple front-end solution and does not have any back-end or database connectivity. This means that tasks will not persist across page refreshes.

Feel free to modify, enhance, or extend this To-Do List application according to your needs! Happy coding!
