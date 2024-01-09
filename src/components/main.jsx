import React from "react";
import "../css/man.css"

const Home = () => {
  return (
    <>

      <div class="banner_bg_main">

        <div class="container">
          <div class="header_section_top">
            <div class="row">
              <div class="col-sm-12">
                <div class="custom_menu">
                  <ul>
                    <li><a href="#">Best Sellers</a></li>
                    <li><a href="#">Gift Ideas</a></li>
                    <li><a href="#">New Releases</a></li>
                    <li><a href="#">Today's Deals</a></li>
                    <li><a href="#">Customer Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div class="banner_section layout_padding">
          <div class="container">
            <div id="my_slider" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-sm-12">
                      <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                      <div class="buynow_bt"><a href="#">Buy Now</a></div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-12">
                      <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                      <div class="buynow_bt"><a href="#">Buy Now</a></div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-12">
                      <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                      <div class="buynow_bt"><a href="#">Buy Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                <i class="fa fa-angle-left"></i>
              </a>
              <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
