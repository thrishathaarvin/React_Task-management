import React, { useState } from "react";
import { Layout, Tabs, Button } from "antd";
import PageHeader from "../components/common/PageHeader.jsx";
import TaskCard from "../components/task/TaskCard.jsx";
import TaskFormModal from "../components/task/taskFormModal.jsx";
import { useTasks } from "../hooks/useTasks.jsx";
import { filterTasks } from "../hooks/useTaskFilters.jsx";
import { useNotification } from "../hooks/useNotification.jsx";

const { Content } = Layout;

const TAB_CONFIG = [
  { key: "all", label: "All", filter: null },
  { key: "todo", label: "To Do", filter: { status: "TODO" } },
  { key: "inProgress", label: "In Progress", filter: { status: "IN_PROGRESS" } },
  { key: "completed", label: "Completed", filter: { status: "COMPLETED" } },
];

const Tasks = () => {
  const { tasks, addTask, updateStatus } = useTasks();
  const { open, contextHolder } = useNotification();
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <Layout>
      <PageHeader />

      <Content style={{ padding: "24px" }}>
        {contextHolder}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>TASKS</h2>
          <Button type="primary" onClick={() => setCreateOpen(true)}>
            New Task
          </Button>
        </div>

        <TaskFormModal
          visible={createOpen}
          mode="create"
          onSubmit={(data) => {
            addTask(data);
            setCreateOpen(false);
            open("Task created successfully");
          }}
          onCancel={() => setCreateOpen(false)}
        />

        <Tabs defaultActiveKey="all" style={{ marginTop: "24px" }}>
          {TAB_CONFIG.map(({ key, label, filter }) => {
            const filteredTasks = filter ? filterTasks(tasks, filter) : filterTasks(tasks);

            return (
              <Tabs.TabPane tab={label} key={key}>
                {filteredTasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onStatusChange={updateStatus}
                  />
                ))}
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </Content>
    </Layout>
  );
};

export default Tasks;
