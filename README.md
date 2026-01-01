# 🚀 Task Manager Pro

A professional, modern task management application built with React, Tailwind CSS, and Context API. This intermediate-level project demonstrates clean code architecture, custom hooks, and state management with a beautiful, responsive UI.

![Task Manager Screenshot](https://img.shields.io/badge/React-18.2-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-blue) ![Context API](https://img.shields.io/badge/Context-API-green) ![License](https://img.shields.io/badge/License-MIT-green)

<img width="1349" height="814" alt="Screenshot 2026-01-01 at 18-58-34 int-task-manager" src="https://github.com/user-attachments/assets/2a91e34a-2ac9-4267-ae64-23ad06acec43" />


## ✨ Features

- ✅ **Add, Edit, Delete Tasks** with priority levels
- ✅ **Task Filtering** by status (All, Active, Completed) and priority
- ✅ **Priority Management** (High, Medium, Low) with visual indicators
- ✅ **Real-time Statistics** dashboard with completion rate
- ✅ **Local Storage Persistence** - tasks saved automatically
- ✅ **Toast Notifications** for user actions
- ✅ **Responsive Design** - works on mobile, tablet, and desktop
- ✅ **Dark/Light Mode** ready UI
- ✅ **Custom Hooks** for reusable logic
- ✅ **Context API** for global state management

## 🛠️ Tech Stack

- **React 18** - Frontend library
- **Tailwind CSS** - Utility-first CSS framework
- **React Context API** - State management
- **React Hot Toast** - Toast notifications
- **Local Storage API** - Data persistence
- **Custom Hooks** - Reusable logic abstraction

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
git clone <repository-url>
cd int-task-manager
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx           # App header with title
│   ├── TaskForm.jsx         # Form for adding new tasks
│   ├── TaskList.jsx         # List of all tasks
│   ├── TaskItem.jsx         # Individual task component
│   ├── FilterPanel.jsx      # Task filtering controls
│   └── StatsCard.jsx        # Statistics dashboard
├── context/
│   └── TaskContext.jsx      # Context API for global state
├── hooks/
│   └── useLocalStorage.js   # Custom hook for localStorage
├── App.jsx                  # Main application component
└── main.jsx                 # Application entry point
```

## 🎯 Usage Guide

### Adding a Task
1. Enter task title in the input field
2. Add optional description
3. Select priority (High, Medium, Low)
4. Click "Add Task" button

### Managing Tasks
- **Complete Task**: Click the circle checkbox next to a task
- **Change Priority**: Use the dropdown in each task
- **Delete Task**: Click the trash icon 🗑️
- **Filter Tasks**: Use the filter buttons (All, Active, Completed, Priority)

### Task Priority Colors
- 🔴 **High Priority**: Red border and indicator
- 🟡 **Medium Priority**: Yellow border and indicator
- 🟢 **Low Priority**: Green border and indicator

## 🔧 Key Implementation Details

### Custom Hooks
- `useLocalStorage`: Persists tasks to browser's localStorage
- Encapsulates localStorage logic with error handling

### Context API
- `TaskContext`: Manages global application state
- Provides task CRUD operations and filtering
- Handles toast notifications for user feedback

### State Management
```javascript
// Task structure
{
  id: Number,
  title: String,
  description: String,
  priority: String, // 'high', 'medium', 'low'
  completed: Boolean,
  createdAt: String // ISO date string
}
```

## 📱 Responsive Design

- **Mobile**: Single column layout
- **Tablet**: Adjusted grid layouts
- **Desktop**: Three-column layout with statistics sidebar
- **Breakpoints**: Tailwind CSS responsive utilities

## 🚀 Advanced Features

### Local Storage Persistence
- Tasks automatically saved to browser
- No database required
- Works offline

### Toast Notifications
- Success/Error feedback for user actions
- Non-intrusive design
- Auto-dismiss after 3 seconds

### Performance Optimizations
- React.memo for components
- useCallback for event handlers
- Efficient state updates
- Virtual DOM optimization

## 🧪 Testing

Run tests (if configured):
```bash
npm test
# or
yarn test
```

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🔄 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`

## 📝 Code Quality

### ESLint Configuration
```json
{
  "extends": ["react-app", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues

1. **Double toast notifications**
   - Fixed by moving toast calls outside setState callbacks

2. **Import path errors**
   - Ensure correct relative paths: `../context/TaskContext`

3. **Local storage not working**
   - Check browser permissions
   - Verify JSON parsing/serialization

4. **Tailwind CSS not applying**
   - Run: `npm install tailwindcss@latest postcss@latest autoprefixer@latest`
   - Check `tailwind.config.js` content configuration

## 📚 Learning Points

This project demonstrates:
- React functional components with hooks
- Custom hook creation
- Context API for state management
- Tailwind CSS utility classes
- Component composition
- Responsive design principles
- Local storage integration
- Toast notification implementation

## 🎨 Customization

### Change Color Theme
Edit `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        // Add custom colors
      }
    }
  }
}
```

### Add New Features
1. **Due Dates**: Add date picker to tasks
2. **Categories/Tags**: Categorize tasks
3. **Search Functionality**: Filter tasks by text
4. **Drag & Drop**: Reorder tasks
5. **Dark Mode**: Toggle between themes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Vite](https://vitejs.dev/) for build tooling

## 📧 Contact

Project Link: [https://github.com/rubaiyatxeren/-Task-Manager-Pro]

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ by eRubaiyat
