import React from "react"

const CitySection = () => (
  <section id="video-bg" className="h-screen bg-green-100">
    <div
      id="bgndVideo"
      className="player"
      data-property="{videoURL:'https://youtu.be/CWzZ-Y2D9tw',containment:'#video-bg',autoPlay:true, mute:true, showControls:false, startAt:77, stopAt:259, opacity:1}" />
    <div id="video-content">
      <h5>Minneapolis</h5>
      <p>City of Lakes</p>
    </div>
  </section>
)

export default CitySection
