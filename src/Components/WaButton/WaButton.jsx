import styles from './WaButton.module.css';
import { FaWhatsapp } from "react-icons/fa";

const WaButton = () => {
  return (
    <button className={styles.container}>
        <FaWhatsapp />
    </button>
  )
}

export default WaButton