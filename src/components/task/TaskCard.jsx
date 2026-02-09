import { Card, Button } from "antd";
import StatusTag from "../common/StatusTag.jsx";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task, onStatusChange }) => {
  const navigate = useNavigate();

  const next =
    task.status === "TODO" ? "IN_PROGRESS"
    : task.status === "IN_PROGRESS" ? "COMPLETED"
    : null;

  return (
    <Card style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>{task.title}</strong>
        <StatusTag status={task.status} />
      </div>

      <p>{task.description}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        {next && (
          <Button type="primary" onClick={() => onStatusChange(task.id, next)}>
            {next === "IN_PROGRESS" ? "Start" : "Complete"}
          </Button>
        )}
        <Button onClick={() => navigate(`/tasks/${task.id}`)}>
          Details
        </Button>
      </div>
    </Card>
  );
};

export default TaskCard;
