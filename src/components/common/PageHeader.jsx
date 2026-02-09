import { Layout, Menu, Typography } from "antd";
import { HomeOutlined} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useTasks } from "../../hooks/useTasks.jsx";

const { Header } = Layout;

const PageHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = useTasks();

  const selectedKey = location.pathname.includes("/tasks") ? "tasks" : "dashboard";

  return (
    <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <HomeOutlined style={{ fontSize: "24px", color: "#fff" }} />
        <Typography.Title level={3} style={{ color: "#fff", margin: 0 }}>
          Task Manager
        </Typography.Title>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={[
            { key: "dashboard", label: "Dashboard", onClick: () => navigate("/") },
            { key: "tasks", label: "Tasks", onClick: () => navigate("/tasks") },
          ]}
        />
      </div>
      <div style={{ color: "#fff", fontWeight: "bold" }}>{username}</div>
    </Header>
  );
};

export default PageHeader;
