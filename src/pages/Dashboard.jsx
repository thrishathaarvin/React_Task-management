import { Layout, Row, Col, Card, Statistic, Button } from "antd";
import PageHeader from "../components/common/PageHeader.jsx";
import TaskCard from "../components/task/TaskCard.jsx";
import { useTasks } from "../hooks/useTasks.jsx";
import { useTaskFilters } from "../hooks/useTaskFilters.jsx";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const Dashboard = () => {
  const { tasks, updateStatus} = useTasks();
  const { pendingCount, upcomingTasks, all, todo, inProgress, completed } = useTaskFilters(tasks);
  const navigate = useNavigate();

  return (
    <Layout>
      <PageHeader />
      <Content style={{ padding: "24px" }}>
        <p style={{fontWeight:"bold", fontSize: "30px", marginTop:"40px", marginBottom:"20px"}}>Greetings Thrishatha</p>
        <p style={{fontSize: "20px"}}>You have {pendingCount} pending tasks</p>

        <Row gutter={16} style={{ marginBottom: "24px" }}>
          <Col span={6}><Card><Statistic title="Total Tasks" value={all.length} /></Card></Col>
          <Col span={6}><Card><Statistic title="To Do" value={todo.length} /></Card></Col>
          <Col span={6}><Card><Statistic title="In Progress" value={inProgress.length} /></Card></Col>
          <Col span={6}><Card><Statistic title="Completed" value={completed.length} /></Card></Col>
        </Row>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom:"20px" }}>
          <h3 style={{fontSize: "20px"}}>Upcoming Tasks</h3>
          <Button onClick={() => navigate("/tasks")}>View All</Button>
        </div>

        {upcomingTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            clickable={false}
            onStatusChange={updateStatus}
          />
        ))}
      </Content>
    </Layout>
  );
};

export default Dashboard;

