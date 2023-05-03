import styles from "./Button.module.scss";

type ButtonProps = {
  title?: string;
  text?: string;
  color: "primary" | "secondary" | "tertiary";
};

const Button = ({ title, text, color }: ButtonProps) => {
  return (
    <div
      className={
        color === "primary"
          ? styles.buttonPrimary
          : color === "secondary"
          ? styles.buttonSecondary
          : styles.buttonTertiary
      }
    >
      {title && <h3 className={styles.title}>{title}</h3>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export default Button;
