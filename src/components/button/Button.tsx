import "./Button.css";

interface IProps {
  text: string;
  onClick: () => void;
  variant: "success" | "danger";
  disabled?: boolean;
}

const Button = (props: IProps) => {
  return (
    <button
      className={`button ${props.variant}`}
      color={props.variant}
      disabled={props.disabled}
      type="button"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
