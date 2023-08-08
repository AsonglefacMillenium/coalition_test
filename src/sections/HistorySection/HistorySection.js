import React from 'react'
import './historysection.css'
import { Slider } from '../../components'

const HistorySection = () => {
  return (
    <section id="history">
        <div class="historyContent">
          <div class="history_title">
            <h1>1.</h1>
            <h3>HISTORY</h3>
          </div>
          <div class="history_desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
              ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
              est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt
              quam. Cras scelerisque id quam sed dignissim Pellentesque urna
              nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus
              suscipit dignissim tortor nec congue.
            </p>
          </div>
        </div>

        <div class="carousel_wrapper">
         <Slider />
        </div>
      </section>
  )
}

export default HistorySection