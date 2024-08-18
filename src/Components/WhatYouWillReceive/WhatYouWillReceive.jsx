import styles from './WhatYouWillReceive.module.css';
import { FaCircleCheck } from "react-icons/fa6";
import whaYouWillReceiveData from './WhatYouWillReceiveData';

const WhatYouWillReceive = () => {
    
  return (
    <div className={styles.container}>
        <div className={styles.container_title}>
            <h1>Veja o que você vai receber</h1>
        </div>
        <div className={styles.container_content}>
        <ul>
        {whaYouWillReceiveData.map((item, index) => (
            <li key={index}><FaCircleCheck /> {item.text}</li>
        ))}
        </ul>
        </div>
    </div>
  )
}

export default WhatYouWillReceive;