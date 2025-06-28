import styles from "./Button.module.css";

const Button = ({ url, text, download = false }) => {
  return (
    <a
      href={url}
      className={styles.button}
      {...(download
        ? { download: true, target: "_blank", rel: "noopener noreferrer" }
        : { target: "_self" })}
    >
      {text}
    </a>
  );
};

export default Button;
