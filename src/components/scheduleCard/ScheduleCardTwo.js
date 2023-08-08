import React from "react";
import "./schedueCard.css";
import { scheduleTwo } from "./schduledata";

const ScheduleCardTwo = () => {
  return (
    <div id="scheduleOne" className="schedules">
      <h3>SCHEDULE</h3>
      {/* {<div className="event">
        <p className="date">12 Dec 2018</p>
        <p className="city">Dubai</p>
      </div>
      <div className="event">
        <p className="date">12 Dec 2018</p>
        <p className="city">Dubai</p>
      </div>

      <div class="event">
        <p class="date">12 Dec 2018</p>
        <p class="city">Dubai</p>
      </div>
      <div className="event">
        <p className="date">12 Dec 2018</p>
        <p className="city">Dubai</p>
      </div>} */}

      {scheduleTwo.map((data) => (
        <div className="event">
          <p className="date">{data.date}</p>
          <p className="city">{data.city}</p>
        </div>
      ))}

      <div></div>
    </div>
  );
};

export default ScheduleCardTwo;
