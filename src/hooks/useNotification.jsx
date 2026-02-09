import { notification } from "antd";

export function useNotification() {
  const [api, contextHolder] = notification.useNotification();

  const open = (message, description) => {
    api.open({
      message,
      description,
      duration: 2, 
    });
  };

  return { open, contextHolder };
}
