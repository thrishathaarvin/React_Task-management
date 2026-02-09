import { Tag } from "antd";
import { TASK_STATUS } from "../../constants/taskStatus.jsx";

const StatusTag = ({ status }) => {
  let color;
  switch (status) {
    case TASK_STATUS.TODO:
      color = "blue";
      break;
    case TASK_STATUS.IN_PROGRESS:
      color = "orange";
      break;
    case TASK_STATUS.COMPLETED:
      color = "green";
      break;
    default:
      color = "default";
  }

  return <Tag color={color}>{status.replace("_", " ")}</Tag>;
};

export default StatusTag;
