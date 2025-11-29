# EPS Frontend - Examination Practice System

A modern, full-featured React TypeScript frontend for the Examination Practice System (EPS). Built with Vite, Tailwind CSS, and React Router DOM.

## ✨ Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Routing**: React Router DOM for client-side navigation
- **Icons**: Lucide React for all UI iconography
- **Responsive Design**: Desktop-first wide-screen layout
- **Light Mode**: Strict light mode theme with custom green accent (#2e8b57)
- **Component-Based**: Modular and reusable components

## 📁 Project Structure

```
src/
├── components/
│   └── Layout/
│       └── MainLayout.tsx          # Main authenticated layout with sidebar
├── pages/
│   ├── LoginPage.tsx               # Login/Sign Up with role selector
│   ├── Dashboard.tsx               # Main dashboard with exam cards
│   ├── QuestionInterface.tsx       # Core exam interface
│   ├── ResultSummaryPage.tsx       # Results display page
│   └── Admin/
│       └── AdminPanel.tsx          # Admin management panel
├── App.tsx                          # Main router configuration
├── main.tsx                         # Application entry point
└── index.css                        # Tailwind CSS directives
```

## 🛣️ Available Routes

- `/login` - Login and Sign Up page (default route)
- `/dashboard` - Main dashboard with exam selection
- `/exam` - Question interface (core exam page)
- `/results` - Results summary page
- `/admin` - Admin panel for managing students and exams

## 📑 Pages Overview

### LoginPage (`/login`)
- Two-tab interface (Login / Sign Up)
- Role selector with radio buttons (Student / Admin)
- Email and password fields
- Sign Up includes full name field
- Custom primary green submit button (#2e8b57)

### Dashboard (`/dashboard`)
- Welcome greeting message
- Three clickable exam cards:
  - JAMB (Joint Admissions and Matriculation Board)
  - WAEC (West African Examinations Council)
  - NECO (National Examination Council)
- Green accent borders on cards
- Statistics section showing:
  - Total practice attempts
  - Average score percentage
  - Best score achieved

### QuestionInterface (`/exam`) - Core Exam Page
- **Top Bar**: Timer display and exam/subject name
- **Question Area** (Left):
  - Question number and total
  - Question text
  - Four multiple choice options
  - Blue checkmark for selected option
  - Previous/Next navigation buttons
- **Question Navigation Sidebar** (Right):
  - Grid of numbered question buttons (1-50)
  - Blue circle/border for current question
  - Green background for answered questions
  - Gray background for unanswered questions
  - Question statistics (answered count)
  - Submit Exam button

### ResultSummaryPage (`/results`)
- Success icon with green checkmark
- Score display (e.g., 40/50)
- Percentage calculation (e.g., 80%)
- Green progress bar showing performance
- Detailed statistics:
  - Correct answers count
  - Wrong answers count
  - Unanswered count
- Performance feedback based on score
- Navigation buttons:
  - Back to Dashboard
  - Try Again

### AdminPanel (`/admin`)
**Manage Students Tab**:
- Student list with table view
- Columns: Name, Email, Attempts, Average Score
- Action buttons (Edit, Delete)
- Add Student button

**Manage Questions/Exams Tab**:
- Grid display of exams
- Exam cards showing:
  - Exam name
  - Number of questions
  - Creation date
- Action buttons (View Questions, Edit, Delete)
- Create Exam button

### MainLayout (Wrapper)
- Persistent vertical sidebar (264px width)
- Navigation links:
  - Dashboard (with icon)
  - History (with icon)
  - Admin (with icon)
  - Logout (with icon)
- Active link highlighting with primary green color
- EPS branding/logo area
- Main content viewport for page content

## 🎨 Color Scheme

| Element | Color | Hex Code |
|---------|-------|----------|
| Primary Green | Custom Green | `#2e8b57` |
| Background | White | `#ffffff` |
| Secondary Background | Light Gray | `#f5f5f5` |
| Text Primary | Dark Gray | `#333333` |
| Text Secondary | Medium Gray | `#666666` |
| Borders | Light Gray | `#e5e5e5` |
| Current Question | Blue | Tailwind blue-500 |
| Answered Question | Green | Primary green |
| Error/Wrong | Red | Tailwind red-600 |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd EPS-Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Dependencies

**Core Dependencies:**
- `react` (^19.2.0) - UI library
- `react-dom` (^19.2.0) - React DOM rendering
- `react-router-dom` (^7.9.6) - Client-side routing

**Styling:**
- `tailwindcss` (^4.1.17) - Utility-first CSS framework
- `@tailwindcss/postcss` (^4.1.17) - PostCSS plugin for Tailwind
- `postcss` (^8.5.6) - CSS transformation tool
- `autoprefixer` (^10.4.22) - Vendor prefix support

**Icons:**
- `lucide-react` (^0.555.0) - Beautiful icon library

**Development:**
- `typescript` (~5.9.3) - Type-safe development
- `vite` (^7.2.4) - Build tool and dev server
- `eslint` (^9.39.1) - Code linting
- `@vitejs/plugin-react` (^5.1.1) - React plugin for Vite

## 💻 Development

### Code Quality

```bash
# Run linting
npm run lint
```

### TypeScript

The project uses strict TypeScript configuration for type safety across all components.

### HMR (Hot Module Replacement)

Vite provides instant HMR during development - changes are reflected immediately in the browser.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Component Features

### Static Mockup
- All components are static mockups for demonstration purposes
- Local component state for form interactions
- Mock data for tables and lists
- No backend API integration (ready for future implementation)

### Responsive Design
- Desktop-first wide-screen layout
- Grid and flexbox layouts
- Responsive typography
- Accessible form controls

## ⚙️ Configuration Files

- **`tailwind.config.js`** - Tailwind CSS configuration with custom green color
- **`postcss.config.cjs`** - PostCSS configuration for Tailwind
- **`tsconfig.json`** - TypeScript configuration
- **`vite.config.ts`** - Vite build configuration
- **`eslint.config.js`** - ESLint rules configuration

## 🔄 Next Steps for Production

1. Connect to backend API
2. Implement authentication/JWT tokens
3. Add state management (Redux, Zustand, etc.)
4. Implement form validation
5. Add error handling and loading states
6. Set up environment variables
7. Add comprehensive testing
8. Performance optimization
9. Accessibility (a11y) improvements
10. SEO optimization

## 📄 License

This project is part of the EPS (Examination Practice System) initiative.

---

**Status**: ✅ Frontend scaffold complete and ready for development
**Created**: November 2025
**Version**: 1.0.0-alpha
