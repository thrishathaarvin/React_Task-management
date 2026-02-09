import React, { useState } from "react";
import { Layout, Tabs, Button} from "antd";
import PageHeader from "../components/common/PageHeader.jsx";
import TaskCard from "../components/task/TaskCard.jsx";
import TaskFormModal from "../components/task/taskFormModal.jsx";
import { useTasks } from "../hooks/useTasks.jsx";
import { useTaskFilters } from "../hooks/useTaskFilters.jsx";
import { useNotification } from "../hooks/useNotification.jsx";

const { Content } = Layout;

const Tasks = () => {
    const { tasks, addTask, updateStatus} = useTasks();
    const { all, todo, inProgress, completed } = useTaskFilters(tasks);
    const { open, contextHolder } = useNotification();

    const [modalVisible, setModalVisible] = useState(false);

    const handleCreateTask = (data) => {
        addTask(data);
        setModalVisible(false);
        open("Task created successfully");
    };


    return (
        <Layout>
            <PageHeader />
            <Content style={{ padding: "24px" }}>
                {contextHolder}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2>TASKS</h2>
                    <Button type="primary" onClick={() => setModalVisible(true)}>New Task</Button>
                </div>

                <TaskFormModal
                    visible={modalVisible}
                    onCreate={handleCreateTask}
                    onCancel={() => setModalVisible(false)}
                />

                <Tabs defaultActiveKey="all" style={{ marginTop: "24px" }}>
                    <Tabs.TabPane tab="All" key="all">
                        {all.map(task => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                clickable={false}
                                onStatusChange={updateStatus}
                            />
                        ))}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="To Do" key="todo">
                        {todo.map(task => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                clickable={false}
                                onStatusChange={updateStatus}
                               
                             />
                        ))}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="In Progress" key="inProgress">
                        {inProgress.map(task => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                clickable={false}
                                onStatusChange={updateStatus}
                                
                            />
                        ))}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Completed" key="completed">
                        {completed.map(task => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                clickable={false}
                                onStatusChange={updateStatus}
                                
                            />
                        ))}
                    </Tabs.TabPane>
                </Tabs>
            </Content>
        </Layout>
    );
};

export default Tasks;
