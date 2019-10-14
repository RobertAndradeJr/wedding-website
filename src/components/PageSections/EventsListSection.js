import React from "react"

const EventsListSection = () => (
  <section className="h-screen bg-red-100">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="header">Events poop</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12 leftcol">
          <div className="wp3">
            <p>
              <strong>27th November</strong>
            </p>

            <h5>
              Mehndi <span className="time">1PM - 5PM</span>
            </h5>
            <p>
              It's one of the oldest traditional Indian pre wedding ceremony
              where the bride and groom attend the event together and a
              professional mehndi artist applies mehndi to the bride's hands and
              feet. This will be having a celebratory festival feel to it with
              people wearing vibrant clothes and dancing, singing, playing games
              and a lot more.
            </p>
          </div>
          <div className="wp5">
            <h5>
              Cocktail Night <span className="time">7PM - 12AM</span>
            </h5>
            <p>
              This event is no way close to ethnic. The bride & groom would like
              to have some "shots before the knot". With booze flowing down the
              floor and the western attire on, everyone would be busy showing
              off their new moves on the stage which they have finely honed.
              Lastly, expect some beer pong matches & karaoke for sure.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
          <div className="wp4">
            <p>
              <strong>28th November</strong>
            </p>

            <h5>
              Haldi <span className="time">10AM-11AM</span>
            </h5>
            <p>
              The haldi ceremony is usually held separately for the bride and
              the groom. This one is for the bride. It is a low-key event that
              involves the application of turmeric paste on the hands, legs and
              face of the bride. The groom is not allowed to see the bride after
              this ritual until the final wedding ceremony starts.
            </p>
          </div>
          <div className="wp6">
            <h5>
              Wedding <span className="time">6PM-12AM</span>
            </h5>
            <p>
              This is the main event in the entire wedding when the bride and
              the groom tie the knot. The groom comes with the barat and is
              greeted by the bride side with some dhol of course as maximum
              number of guests would be attending this event. This is when the
              couple circle the sacred fire and are finally declared husband and
              wife.
            </p>
          </div>
        </div>
      </div>
      <div className="row section-padding">
        <div className="col-md-4 col-md-offset-4 text-center">
          <a
            className="btn btn-accent btn-small"
            data-toggle="modal"
            data-target="#dc-modal"
          >
            <i className="fa fa-barcode"></i>&nbsp;&nbsp;Dress code
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 section-border section-padding"></div>
      </div>
    </div>

    <div id="dc-modal" className="modal fade" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span>&times;</span>
            </button>
            <h3 className="text-center section-padding">Ugh... dress codes?</h3>
            <h5>
              Mehndi <span className="time">1PM - 5PM</span>
            </h5>
            <p>
              <strong>Ethnic indian wear</strong>
              <br />
              Ladies can wear something
              <a href="https://www.pinterest.com/ramswarooppatra/mehndi-dress-for-women/">
                bright & vivid
              </a>
              and gentlemen can be on their{" "}
              <a href="https://www.pinterest.com/ramswarooppatra/mehndi-dress-for-men/">
                vibrant kurtas
              </a>{" "}
              with pants or pyjamas along with an optional shawl.
            </p>
            <h5>
              Cocktail Night <span className="time">7PM - 12AM</span>
            </h5>
            <p>
              <strong>Western attire</strong>
              <br />A semi-formal look that is contemporary & fashionable which
              is not too prim & proper is the best to pull off this night. You
              can see some pins for
              <a href="https://www.pinterest.com/ramswarooppatra/cocktail-night-outfit-for-women/">
                ladies
              </a>
              &{" "}
              <a href="https://www.pinterest.com/ramswarooppatra/cocktail-night-outfit-for-men/">
                gents
              </a>
              .
            </p>
            <h5>
              Wedding <span className="time">6PM-12AM</span>
            </h5>
            <p>
              <strong>Indo-western</strong>
              <br />
              Ladies can flaunt their unconventional sarees,
              <a href="https://www.pinterest.com/ramswarooppatra/indo-western-lehengas/">
                lehengas
              </a>
              ,
              <a href="https://www.pinterest.com/ramswarooppatra/indo-western-anarkalis/">
                anarkalis
              </a>
              , dresses and the list goes on whereas gentlemen can wear any kind
              of suit or just blazer. If you don't like to wear a suit/blazer,
              you can do a{" "}
              <a href="https://www.pinterest.com/ramswarooppatra/high-neck-jackets-for-men/">
                high-neck (band gala) waistcoat & shirt
              </a>{" "}
              combo.
            </p>
          </div>
        </div>
        {/*  /.modal-content */}
      </div>
      {/* modal-dialog */}
    </div>
    {/* modal */}
  </section>
)

export default EventsListSection
