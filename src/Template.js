/* eslint-disable */
import React from 'react'

export default function Template() {
    return (
        <>
            <section className="hero">
                <section className="navigation">
                    <header>
                        <div className="header-content">
                            <div className="logo"><a href="#"><img src="img/logo.png" alt="Logo"/></a></div>
                            <div className="header-nav">
                                <nav>
                                    <ul className="primary-nav">
                                        <li><a href="#intro">How we met</a></li>
                                        <li><a href="#events">Events</a></li>
                                        <li><a href="#instagram">Instagram</a></li>
                                        <li><a href="#eng-pics">Engagement</a></li>
                                        <li className="hidden-sm hidden-xs"><a href="#video-bg">Glimpse of the city</a></li>
                                    </ul>
                                    <ul className="member-actions">
                                        <li><a href="#map" className="login">Venue</a></li>
                                        <li><a href="#rsvp" className="btn-white btn-small">RSVP</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="navicon">
                                <a className="nav-toggle" href="#"><span></span></a>
                            </div>
                        </div>
                    </header>
                </section>
            <div className="container">
        <div className="row">
            <div className="col-md-10 col-md-offset-1">
                <div className="hero-content text-center">
                    <h1>Robert and Mandi</h1>
                    <img src="img/logo-lg.png" />
                    <p className="intro">Robert & Mandi are getting hitched!</p>
                    <a href="#" className="btn btn-fill btn-large btn-margin-right">Scroll Down</a>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4 hidden-xs"></div>
            <div className="col-sm-4 hidden-xs text-center">
                <a href="#rsvp" className="btn btn-accent btn-large rsvp-btn">
                    RSVP
                </a>
            </div>
            <div className="col-sm-4 hidden-xs"></div>
        </div>
    </div>
            <div className="down-arrow floating-arrow"><a href="#invitation"><i className="fa fa-angle-down"></i></a></div>
            </section>

            <section id="invitation" className="section-padding">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3>We are getting hitched</h3>
                <p>The dates are 27<sup>th</sup> & 28<sup>th</sup> of November '17 and we would like you to be a part of
                    it.</p>
                <div className="share-bar"></div>
            </div>
        </div>
    </div>
</section>

            <section id="intro">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="header">How we met</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 hidden-sm hidden-xs"><img src="img/IMG_2317.jpg" className="wp1"/></div>
            <div className="col-md-6">
                <p>
                    I first saw Mandi in the Fall of 2008 when we started our undergrad. I was instantly attracted to
                    her but was far too nervous to speak to her. I had told my friend I liked her and news had traveled
                    fast and she soon found out. Her first reaction was "Who is Robert?" and she began searching for me in
                    the className. She started to take notice of me and no matter how boring the lecture was, we never
                    missed a className after that. After a good few months I finally plucked up the courage to ask her out
                    and the rest is history :)
                </p>
            </div>
            <div className="col-md-3 hidden-sm hidden-xs"><img src="img/DSD_0214.jpg" className="wp2"/></div>
        </div>
        <div className="row">
            <div className="col-sm-4 col-sm-push-2 col-xs-6 hidden-md hidden-lg"><img src="img/IMG_2317.jpg" className="wp8"/></div>
            <div className="col-sm-4 col-sm-push-2 col-xs-6 hidden-md hidden-lg"><img src="img/DSD_0214.jpg" className="wp9"/></div>
        </div>
    </div>
</section>

            <section className="events section-padding" id="events">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3 className="header">Events</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 leftcol">
                <div className="wp3">
                    <p><strong>27th November</strong></p>

                    <h5>Mehndi <span className="time">1PM - 5PM</span></h5>
                    <p>It's one of the oldest traditional Indian pre wedding ceremony where the bride and groom
                        attend the event together and a professional mehndi artist applies
                        mehndi to the bride's hands and feet. This will be having a celebratory
                        festival feel to it with people wearing vibrant clothes and dancing, singing, playing
                        games and a lot more.</p>
                </div>
                <div className="wp5">
                    <h5>Cocktail Night <span className="time">7PM - 12AM</span></h5>
                    <p>This event is no way close to ethnic. The bride & groom would like to have some "shots before the
                        knot". With booze flowing down the floor and the western attire on, everyone would be busy
                        showing off their new moves on the stage which they have finely honed. Lastly, expect some beer
                        pong matches & karaoke for sure.</p>
                </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                <div className="wp4">
                    <p><strong>28th November</strong></p>

                    <h5>Haldi <span className="time">10AM-11AM</span></h5>
                    <p>The haldi ceremony is usually held separately for the bride and the groom. This one is for the
                        bride. It is a low-key event that involves the application of turmeric paste on the hands, legs
                        and face of the bride. The groom is not allowed to see the bride after this ritual until the
                        final wedding ceremony starts.</p>
                </div>
                <div className="wp6">
                    <h5>Wedding <span className="time">6PM-12AM</span></h5>
                    <p>This is the main event in the entire wedding when the bride and the groom tie the
                        knot. The groom comes with the barat and is greeted by the bride side with some dhol of course
                        as maximum number of guests would be attending this event. This is when the couple circle the
                        sacred fire and are finally declared husband and wife.</p>
                </div>
            </div>
        </div>
        <div className="row section-padding">
            <div className="col-md-4 col-md-offset-4 text-center">
                <a className="btn btn-accent btn-small" data-toggle="modal" data-target="#dc-modal">
                    <i className="fa fa-barcode"></i>&nbsp;&nbsp;Dress code
                </a>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 section-border section-padding">
            </div>
        </div>
    </div>

    <div id="dc-modal" className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span>&times;</span>
                    </button>
                    <h3 className="text-center section-padding">Ugh... dress codes?</h3>
                    <h5>Mehndi <span className="time">1PM - 5PM</span></h5>
                    <p>
                        <strong>Ethnic indian wear</strong>
                        <br/>
                        Ladies can wear something
                        <a href="https://www.pinterest.com/ramswarooppatra/mehndi-dress-for-women/">bright & vivid</a>
                        and gentlemen can be on
                        their <a href="https://www.pinterest.com/ramswarooppatra/mehndi-dress-for-men/">vibrant
                        kurtas</a> with pants or pyjamas along with an optional shawl.
                    </p>
                    <h5>Cocktail Night <span className="time">7PM - 12AM</span></h5>
                    <p>
                        <strong>Western attire</strong>
                        <br/>
                        A semi-formal look that is contemporary & fashionable which is not too prim & proper is the best
                        to pull off this night. You can see some pins for
                        <a href="https://www.pinterest.com/ramswarooppatra/cocktail-night-outfit-for-women/">ladies</a>
                        & <a href="https://www.pinterest.com/ramswarooppatra/cocktail-night-outfit-for-men/">gents</a>.
                    </p>
                    <h5>Wedding <span className="time">6PM-12AM</span></h5>
                    <p>
                        <strong>Indo-western</strong>
                        <br/>
                        Ladies can flaunt their unconventional sarees,
                        <a href="https://www.pinterest.com/ramswarooppatra/indo-western-lehengas/">lehengas</a>,
                        <a href="https://www.pinterest.com/ramswarooppatra/indo-western-anarkalis/">anarkalis</a>,
                        dresses and the list
                        goes on whereas gentlemen can wear any kind of suit or just blazer. If you don't like to wear a
                        suit/blazer, you can do a <a
                            href="https://www.pinterest.com/ramswarooppatra/high-neck-jackets-for-men/">high-neck
                        (band gala) waistcoat & shirt</a> combo.
                    </p>
                </div>
            </div>
            {/*  /.modal-content */}
        </div>
        {/* modal-dialog */}
    </div>
        {/* modal */}

</section>

            <section id="instagram" className="section-padding">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3>A picture is worth a thousand words!</h3>
                <p>Help us capture the moment, tag your photos with the hashtag
                    <a href="https://instagram.com/explore/tags/ramandantara/" target="_blank">#RamAndAntara</a>
                </p>
            </div>
        </div>
        <div className="row section-border wp7">
            <div className="col-md-4 col-md-offset-4">
                <img src="img/iphone_instagram.jpg"/>
            </div>
        </div>
    </div>
</section>

            <section id="eng-pics" className="section-padding">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="header">Engagement Pics</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2">
                <a className="fancybox" rel="group" href="img/eng_pics/_RFX2942-lg.jpg">
                    <div className="img-wrap">
                        <div className="overlay">
                            <i className="fa fa-search"></i>
                        </div>
                        <img src="img/eng_pics/_RFX2942-sm.jpg" alt=""/>
                    </div>
                </a>
            </div>
            <div className="col-md-2">
                <a className="fancybox" rel="group" href="img/eng_pics/IMG_3483-lg.jpg">
                    <div className="img-wrap">
                        <div className="overlay">
                            <i className="fa fa-search"></i>
                        </div>
                        <img src="img/eng_pics/IMG_3483-sm.jpg" alt=""/>
                    </div>
                </a>
            </div>
            <div className="col-md-2">
                <a className="fancybox" rel="group" href="img/eng_pics/_RFX2992-lg.jpg">
                    <div className="img-wrap">
                        <div className="overlay">
                            <i className="fa fa-search"></i>
                        </div>
                        <img src="img/eng_pics/_RFX2992-sm.jpg" alt=""/>
                    </div>
                </a>
            </div>
            <div className="col-md-2">
                <a className="fancybox" rel="group" href="img/eng_pics/_RFX3064-lg.jpg">
                    <div className="img-wrap">
                        <div className="overlay">
                            <i className="fa fa-search"></i>
                        </div>
                        <img src="img/eng_pics/_RFX3064-sm.jpg" alt=""/>
                    </div>
                </a>
            </div>
            <div className="col-md-2">
                <a className="fancybox" rel="group" href="img/eng_pics/NGP_4089-lg.jpg">
                    <div className="img-wrap">
                        <div className="overlay">
                            <i className="fa fa-search"></i>
                        </div>
                        <img src="img/eng_pics/NGP_4089-sm.jpg" alt=""/>
                    </div>
                </a>
            </div>
            <div className="col-md-2">
                <a className="fancybox" rel="group" href="img/eng_pics/NGP_4119-lg.jpg">
                    <div className="img-wrap">
                        <div className="overlay">
                            <i className="fa fa-search"></i>
                        </div>
                        <img src="img/eng_pics/NGP_4119-sm.jpg" alt=""/>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row hidden-lg hidden-md hidden-xs">
            <div className="col-xs-12 section-border section-padding"></div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-12">
            <div className="diamond floating-logo">
                <img src="img/sketch-logo.png" alt="Sketch Logo"/>
                <div className="ring"></div>
            </div>
        </div>
    </div>
</section>

            <section id="video-bg" className="hidden-sm hidden-xs">
    <div id="bgndVideo" className="player"
         data-property="{videoURL:'https://youtu.be/CWzZ-Y2D9tw',containment:'#video-bg',autoPlay:true, mute:true, showControls:false, startAt:77, stopAt:259, opacity:1}">
    </div>
    <div id="video-content">
        <h5>Minneapolis</h5>
        <p>City of Lakes</p>
    </div>
</section>

            <section id="map" className="section-padding">
    <div className="text-center">
        <h3>How do I get there?</h3>
        <p>It's way easier than you think!</p>
    </div>
    <div id="map-canvas"></div>
    <div id="map-content-wrapper" className="container pointer-events-none">
        <div className="row">
            <div className="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
                <div className="text-center">
                    <div id="btn-show-content" className="toggle-map-content pointer-events-auto">
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
                            <p><i className="fa fa-mobile"></i> <a href="tel://+919412345678">+91 9412345678</a><br/>
                                <i className="fa fa-mobile"></i> <a href="tel://+917123456789">+91 7123456789</a></p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6" style={{padding: "5px"}}>
                            <a className="btn btn-fill btn-small"
                               href="https://m.uber.com/ul/?action=setPickup&client_id=Yh7Dl6SjB56RY2JuuZF8ttVa6ryFV78W&pickup=my_location&dropoff[formatted_address]=Fortune%20Park%20Panchwati%20-%20Hotels%20in%20Kolkata%2C%20Howrah%2C%20West%20Bengal%2C%20India&dropoff[latitude]=22.593276&dropoff[longitude]=88.270277"><i
                                    className="fa fa-taxi"></i>&nbsp;&nbsp;Book Uber</a>
                        </div>
                        <div className="col-md-6" style={{padding: "5px"}}>
                            <a className="btn btn-accent btn-small" id="btn-show-map"><i className="fa fa-map-marker"></i>&nbsp;&nbsp;Show
                                map</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

            <section className="rsvp text-center" id="rsvp">

    <div id="rsvp-modal" className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span>&times;</span>
                    </button>
                    <div className="section-padding">
                        <h3>Thank you!</h3>
                        <p>We are glad to see you join us on our big day.</p>
                        <div id="add-to-cal"></div>
                    </div>
                </div>
            </div> {/* /.modal-content */}
        </div> {/* /.modal-dialog */}
    </div> {/* /.modal */}

    <div className="container">
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <h3>What are you waiting for?</h3>
                <p>We would greatly appreciate if you could RSVP before 1st of November '17</p>
                <form id="rsvp-form" className="rsvp-form"
                      action=""
                      method="POST">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="form-input-group">
                                <i className="fa fa-envelope"></i>
                                <input type="email" name="email" className="" placeholder="Your email" required/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="form-input-group">
                                <i className="fa fa-user"></i><input name="name" className="" placeholder="Your name" required/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="form-input-group">
                                <i className="fa fa-users"></i><input type="number" name="extras" className="" min="0" max="4" placeholder="Husband/Wife or kids" required/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="form-input-group">
                                <i className="fa fa-key"></i><input type="number" name="invite_code" id="invite_code" className="" min="0" placeholder="Invite code" required/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" id="alert-wrapper"></div>
                    </div>
                    <button className="btn-fill rsvp-btn">
                        Yes,
                        that's me!
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

            <footer>
    <div className="container">
        <div className="row">
            <div className="col-sm-12 text-center content">
                <span className="to-top-wrapper"><a href="#top" className="to-top"><i className="fa fa-angle-up"></i></a></span>
                <p>Crafted by Robert with lots of <span className="fa fa-heart pulse2"></span> for Mandi</p>
            </div>
        </div>
    </div>
</footer>
        </>
    )
}
