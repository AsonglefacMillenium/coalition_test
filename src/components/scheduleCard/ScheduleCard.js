import React from "react";
import "./schedueCard.css";
import { scheduleOne } from "./schduledata";

const ScheduleCard = () => {
  return (
    <div id="scheduleOne" className="schedules">
      <h3>SCHEDULE</h3>

      {scheduleOne.map((data) => (
        <div className="event" key={data.city}>
          <p className="date">{data.date}</p>
          <p className="city">{data.city}</p>
        </div>
      ))}

      <div></div>
    </div>
  );
};

export default ScheduleCard;
