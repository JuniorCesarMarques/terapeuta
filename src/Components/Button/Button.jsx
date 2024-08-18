import styles from './Button.module.css';

const Button = ({children}) => {
  return (
    <button className={styles.container}>
        {children}
    </button>
  )
}

export default Button;