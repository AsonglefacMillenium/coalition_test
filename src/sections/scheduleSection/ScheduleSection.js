import React, { useState } from "react";
import "./schedulesection.css";
import { ScheduleCard, ScheduleCardTwo } from "../../components";

const ScheduleSection = () => {
  const [showScheduleOne, setShowScheduleOne] = useState(false);
  const [showScheduleTwo, setShowScheduleTwo] = useState(false);
  return (
    <section id="schedule">
      <div className="schedultTitile">
        <div className="schedule_header">
          <h1>02.</h1>
          <h3>CLIMB</h3>
        </div>
        <div className="schedule_desc">
          <p>
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
      </div>

      <div className="scheduler">
        <div className="schedule_tab">
          <div
            className="tab"
            onClick={() => {
              setShowScheduleOne(true);
              setShowScheduleTwo(false)
            }}

            style={{
                backgroundColor: showScheduleOne? 'rgba(176, 180, 190, 1)' : 'transparent',
                color: showScheduleOne? '#414f6b' : "#b0b4be"
            }}
          >
            MOUNTAIN 1
          </div>
          <div
            className="tab"
            onClick={() => {
              setShowScheduleTwo(true);
              setShowScheduleOne(false)
            }}
            style={{
                backgroundColor: showScheduleTwo? 'rgba(176, 180, 190, 1)' : 'transparent',
                color: showScheduleTwo? '#414f6b' : "#b0b4be"
            }}
          >
            MOUNTAIN 2
          </div>
        </div>

        <div className="schedule_wrapper">
          <div className="schedule_cards">
            {showScheduleOne? <ScheduleCard />  :
            setShowScheduleTwo && <ScheduleCardTwo />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
