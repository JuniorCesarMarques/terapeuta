import styles from './WhatYouWillReceive.module.css';
import img from '../../assets/terapeuta.png';
import { FaCircleCheck } from "react-icons/fa6";
import whaYouWillReceiveData from './WhatYouWillReceiveData';

const WhatYouWillReceive = () => {
    
  return (
    <div className={styles.container}>
        <div className={styles.container_title}>
            <h1>O maior pack de artes para terapeutas</h1>
        </div>
        <div className={styles.container_content}>
        <img src={img} />
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