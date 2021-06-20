import React, { useRef, useEffect, useState } from "react";
import "./Timer.css";
const Timer = (props) => {
  const [timerDay, setTimerDay] = useState("00");
  const [timerHours, setTimerhours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const starttimer = () => {
    const countdownDates = new Date("July 22 2021 05:45:30").getTime();
    // console.log(countdownDates);
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDates - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDay(days);
        setTimerhours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    starttimer();

    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div>
      <section className="timer-container">
        <section className="timer">
          <div>
            <span className=" mdi mdi-calendar-clock timer-icon"></span>
            <h2>Countdown Timer </h2>
            <h4>Count the DOWN !</h4>
          </div>
          <div>
            <section>
              <p>{timerDay}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Timer;
