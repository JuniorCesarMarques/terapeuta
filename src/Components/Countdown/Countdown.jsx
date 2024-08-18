import React, { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

const Countdown = () => {
  const initialTime = {
    hours: 1,
    minutes: 23,
    seconds: 38
  };

  const convertToSeconds = (time) => {
    return time.hours * 3600 + time.minutes * 60 + time.seconds;
  };

  const [timeLeft, setTimeLeft] = useState(convertToSeconds(initialTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeUnits = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      hours,
      minutes,
      seconds: secs
    };
  };

  const { hours, minutes, seconds } = getTimeUnits(timeLeft);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferta por tempo limitado!</h2>
      <div className={styles.countdown}>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{hours}</span>
          <span className={styles.label}>Horas</span>
        </div>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{minutes}</span>
          <span className={styles.label}>Minutos</span>
        </div>
        <div className={styles.timeUnit}>
          <span className={styles.number}>{seconds}</span>
          <span className={styles.label}>Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
