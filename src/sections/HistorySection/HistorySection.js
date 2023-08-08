import React from "react";
import "./historysection.css";
import { Slider } from "../../components";

const HistorySection = () => {
  return (
    <section id="history">
      <div className="historyContent">
        <div className="history_title">
          <h1>1.</h1>
          <h3>HISTORY</h3>
        </div>
        <div className="history_desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
      </div>

      <div className="carousel_wrapper">
        <Slider />
      </div>
    </section>
  );
};

export default HistorySection;
