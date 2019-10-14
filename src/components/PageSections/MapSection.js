import React from "react";

const MapSection = () => (
  <section id="map" className="h-screen bg-blue-100">
    <div className="text-center">
      <h3>How do I get there?</h3>
      <p>It's way easier than you think!</p>
    </div>
    <div id="map-canvas"></div>
    <div id="map-content-wrapper" className="container pointer-events-none">
      <div className="row">
        <div className="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
          <div className="text-center">
            <div
              id="btn-show-content"
              className="toggle-map-content pointer-events-auto"
            >
              <i className="fa fa-info-circle"></i>&nbsp;&nbsp; Show info
            </div>
          </div>
          <div id="map-content" className="pointer-events-auto">
            <div className="row">
              <div className="col-md-6">
                <h5>ITC Fortune Park</h5>
                <p>Kona Expressway, Howrah, West Bengal 711403, India</p>
              </div>
              <div className="col-md-6">
                <h5>Mr. Amit Roy</h5>
                <p>
                  <i className="fa fa-mobile"></i>{" "}
                  <a href="tel://+919412345678">+91 9412345678</a>
                  <br />
                  <i className="fa fa-mobile"></i>{" "}
                  <a href="tel://+917123456789">+91 7123456789</a>
                </p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-6" style={{ padding: "5px" }}>
                <a
                  className="btn btn-fill btn-small"
                  href="https://m.uber.com/ul/?action=setPickup&client_id=Yh7Dl6SjB56RY2JuuZF8ttVa6ryFV78W&pickup=my_location&dropoff[formatted_address]=Fortune%20Park%20Panchwati%20-%20Hotels%20in%20Kolkata%2C%20Howrah%2C%20West%20Bengal%2C%20India&dropoff[latitude]=22.593276&dropoff[longitude]=88.270277"
                >
                  <i className="fa fa-taxi"></i>&nbsp;&nbsp;Book Uber
                </a>
              </div>
              <div className="col-md-6" style={{ padding: "5px" }}>
                <a className="btn btn-accent btn-small" id="btn-show-map">
                  <i className="fa fa-map-marker"></i>&nbsp;&nbsp;Show map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MapSection;
