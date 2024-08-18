import { useState } from 'react';
import styles from './Faq.module.css';
import faqData from './faqData';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {

    const [isOpenIndex, setIsOpenindex] = useState(null);

    const handleToggle = (index) => {
        setIsOpenindex(isOpenIndex === index ? null : index)
    }

  return (
    <div className={styles.container}>
        <h1>Perguntas frequentes</h1>
        {faqData.map((item, index) => (
            <div key={index} 
            onClick={() => handleToggle(index)}
            className={styles.faq_option}>
                <div className={styles.title_container}>
                    <h2>{item.title}</h2>
                    <motion.div 
                    className={styles.arrow_container}
                    animate={isOpenIndex === index ? {rotate: -180} : 0}
                    >
                    <IoIosArrowDown />
                    </motion.div>
                </div>
                <motion.p
                className={styles.container_text}
                initial={{height: "0"}}
                animate={isOpenIndex === index ? {height: "auto"} : {height: "0"}}

                >
                    {item.text}
                </motion.p>
            </div>
        ))}
    </div>
  )
}

export default Faq;