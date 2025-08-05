# Todo App with React and Redux

A modern, full-stack React application for managing todos with server-side rendering capabilities.

## Technologies Used

- **Frontend Framework**: React 19
- **Routing**: React Router v7
- **State Management**: Redux Toolkit
- **Styling**:
  - TailwindCSS
  - Radix UI Components
  - Radix Icons
- **Build Tools**:
  - Vite
  - TypeScript
  - Biome (for code formatting)
- **HTTP Client**: Axios

## Features

- 🔄 Redux state management
- 🎨 Modern UI with TailwindCSS and Radix
- 🔒 Type-safe with TypeScript

## Project Structure

```
app/
├── components/     # Reusable UI components
│   └── ui/        # Basic UI elements (buttons, inputs)
├── lib/           # Utility functions
├── redux/         # Redux store configuration
│   ├── slice/     # Redux slices (reducers)
│   └── state/     # Type definitions for state
└── routes/        # Application routes
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm (Package manager)

### Installation

1. Clone the repository:

```bash
git clone <https://github.com/juheedhone/baweja-assignment>
cd baweja-assignment
```

2. Install dependencies using pnpm:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173` with hot module replacement enabled.

### Building for Production

Create a production build:

```bash
pnpm build
```

### Deployed Link

link: <https://baweja-assignment.vercel.app/>