
import { Button } from "antd";

const ActionButton = ({ text, onClick, type = "primary", ...rest }) => (
  <Button type={type} onClick={onClick} {...rest}>
    {text}
  </Button>
);

export default ActionButton;
