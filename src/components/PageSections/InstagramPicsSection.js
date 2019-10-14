import React from "react";

const InstagramPicsSection = () => (
  <section id="instagram" className="section-padding h-screen bg-yellow-100">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>A picture is worth a thousand words!</h3>
          <p>
            Help us capture the moment, tag your photos with the hashtag
            <a
              href="https://instagram.com/explore/tags/ramandantara/"
              target="_blank"
            >
              #RamAndAntara
            </a>
          </p>
        </div>
      </div>
      <div className="row section-border wp7">
        <div className="col-md-4 col-md-offset-4">
          <img src="img/iphone_instagram.jpg" />
        </div>
      </div>
    </div>
  </section>
);

export default InstagramPicsSection
