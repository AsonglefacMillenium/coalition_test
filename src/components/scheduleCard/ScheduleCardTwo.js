import React from "react";
import "./schedueCard.css";
import { scheduleTwo } from "./schduledata";

const ScheduleCardTwo = () => {
  return (
    <div id="scheduleOne" className="schedules">
      <h3>SCHEDULE</h3>

      {scheduleTwo.map((data) => (
        <div className="event" key={data.city}>
          <p className="date">{data.date}</p>
          <p className="city">{data.city}</p>
        </div>
      ))}

      <div></div>
    </div>
  );
};

export default ScheduleCardTwo;
