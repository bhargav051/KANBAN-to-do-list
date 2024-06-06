# Kanban Board

A simple and interactive Kanban Board application built with React, featuring task management with local storage, drag-and-drop functionality, task searching, sorting, and editing capabilities.

## Features

- **Task Management**: Add, edit, delete, and toggle tasks.
- **Local Storage**: Tasks are persisted in the browser's local storage.
- **Drag-and-Drop**: Change task status by dragging and dropping between columns.
- **Search Functionality**: Search tasks by name.
- **Sorting**: Sort tasks alphabetically within each column.
- **Responsive Design**: Mobile-friendly user interface.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/kanban-board.git
   cd kanban-board
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm start
   ```

4. **Build the Application for Production**:

   ```bash
   npm run build
   ```

## Project Structure

```
kanban-board/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TaskForm.js
│   │   ├── TaskList.js
│   │   └── ...
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
```

## Components

- **TaskForm**: Form to add new tasks.
- **TaskList**: Displays tasks within a status column (To Do, Ongoing, Completed).
- **useLocalStorage**: Custom hook for managing state with local storage.

## Usage

1. **Add a Task**: Fill in the task name and due date, then click "Add Task".
2. **Edit a Task**: Click the "Edit" button on a task, make changes, then click "Save".
3. **Delete a Task**: Click the "Delete" button on a task.
4. **Toggle Task Status**: Click the checkbox to mark a task as completed or to do.
5. **Drag and Drop**: Drag a task to a different column to change its status.
6. **Search Tasks**: Use the search bar to filter tasks by name.
7. **Sort Tasks**: Click the "Sort by Name" button to sort tasks alphabetically within each column.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the Repository**:
   Click the "Fork" button at the top right of this repository page.

2. **Create a New Branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**:
   Add your changes to the new branch.

4. **Commit Your Changes**:

   ```bash
   git commit -m 'Add some feature'
   ```

5. **Push to the Branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**:
   Open a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Email**: bhargav111.kasundra@gmail.com
- **GitHub**: bhargav051 https://github.com/bhargav051

---

Thank you for using the Kanban Board application! We hope it helps you stay organized and productive.
