
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskProvider.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";


const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />

        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
