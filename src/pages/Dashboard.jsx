import { Layout, Row, Col, Card, Statistic, Button } from "antd";
import PageHeader from "../components/common/PageHeader.jsx";
import TaskCard from "../components/task/TaskCard.jsx";
import { useTasks } from "../hooks/useTasks.jsx";
import { filterTasks } from "../hooks/useTaskFilters.jsx";
import { TASK_STATUS } from "../constants/taskStatus.jsx";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const Dashboard = () => {
  const { tasks, updateStatus } = useTasks();
  const navigate = useNavigate();

  const all = tasks;

  const todo = filterTasks(tasks, { status: TASK_STATUS.TODO });
  const inProgress = filterTasks(tasks, { status: TASK_STATUS.IN_PROGRESS });
  const completed = filterTasks(tasks, { status: TASK_STATUS.COMPLETED });

  const pendingCount = todo.length + inProgress.length;

  const upcomingTasks = filterTasks(tasks, {
    excludeCompleted: true,
    sortByDate: true,
    limit: 4,
  });

  return (
    <Layout>
      <PageHeader />

      <Content style={{ padding: "24px" }}>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          Greetings Thrishatha
        </p>

        <p style={{ fontSize: "20px" }}>
          You have {pendingCount} pending tasks
        </p>

        <Row gutter={16} style={{ marginBottom: "24px" }}>
          <Col span={6}>
            <Card>
              <Statistic title="Total Tasks" value={all.length} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="To Do" value={todo.length} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="In Progress" value={inProgress.length} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Completed" value={completed.length} />
            </Card>
          </Col>
        </Row>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ fontSize: "20px" }}>Upcoming Tasks</h3>
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
