/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Layout from "../../components/layout/Layout";
import TestimonialSlider from "../../components/slider/Testimonial";
import FilterPrice from "../../components/searchProperties/components/FilterPrice";
import { useState, useCallback } from "react";
import { useCookies } from "react-cookie";

function Index8() {
  const router = useRouter();
  const [priceRange, setPriceRange] = useState();
  const [cookie, setCookie, removeCookie] = useCookies(["property_filters"]);

  const onChangePriceRange = useCallback(
    (priceArr) => {
      setPriceRange([...priceArr]);
    },
    [priceRange]
  );

  return (
    <>
      <Layout>
        <div className="section-box">
          <div className="banner-hero banner-homepage8">
            <div className="container mt-50">
              <div className="row">
                <div className="col-lg-7">
                  <span className="tag-1 bg-6 color-green-900">
                    CHECK OUR BEST PROMOTIONS
                  </span>
                  <h1 className="text-display-4 font-bold mt-30">
                    Search Your{" "}
                    <span className="color-green-900">Next Property</span> from
                    Our Website
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Get a website to be found on the first page of Google to
                    avoid missing out on potential visitors and sales.
                  </p>
                  <div className="mt-40 box-mw-610">
                    <div className="form-newsletter-2">
                      <form>
                        <FilterPrice setPrice={onChangePriceRange} />
                        {/* <input
                          className="input-newsletter"
                          value=""
                          placeholder="Search Properties ..."
                        /> */}
                        <button
                          onClick={() => {
                            let propertyFilter = {
                              accommodation: [],
                              categories: [],
                              cities: [],
                              facing: [],
                              floors: [],
                              locations: [],
                              positions: [],
                              possession: [],
                              priceRange: priceRange,
                              sizeRange: [],
                            };
                            // setCookie(
                            //   "property_filters",
                            //   JSON.stringify(propertyFilter)
                            // );

                            router.push(
                              `/search-properties?filter=${JSON.stringify(
                                propertyFilter
                              )}`
                            );
                          }}
                          className="btn btn-newsletter icon-arrow-right-white"
                          type="button"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs d-flex">
                    <div className="rounded-img shape-1">
                      <img
                        className="img-responsive"
                        alt="Builder Floor"
                        src="assets/imgs/page/homepage8/banner1.jpg"
                      />
                    </div>
                    <div className="rounded-img mt-20 shape-1-2">
                      <img
                        className="img-responsive"
                        alt="Builder Floor"
                        src="assets/imgs/page/homepage8/banner2.jpg"
                      />
                    </div>
                    <div className="rounded-img shape-1">
                      <img
                        className="img-responsive"
                        alt="Builder Floor"
                        src="assets/imgs/page/homepage8/banner3.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="popular-search mt-100">
                <h2 className="text-heading-4">Popular Search</h2>
                <ul className="list-search-popular">
                  <li>
                    <Link href="#"><a className="btn btn-border">New York</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">London</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Estonia</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Phuket</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Paris</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Nethelands</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Lotus Temple</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Eiffel Tower</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">The Colosseum</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Rome</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Statue of Liberty</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Machu Picchu</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Bali, Indonesia</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Orleans</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Kerry, Ireland</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Marrakesh</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Morocco</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Central</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Tokyo</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Dubai</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Bora Bora</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Dubrovnik</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Edinburgh</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Paro Valley</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Jaipur, India</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Waikato</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Havana</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">NY, USA</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">West</a></Link>
                    </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="section-box mt-100">
          <div className="container">
            <span className="tag-1 color-orange-900">Hot for this Summer</span>
            <h2 className="text-heading-1 color-gray-900 mt-30">
              Explore Top Properties
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              We find the absolute best prices on plots &amp; flats
            </p>
          </div>
          <div className="container mt-70">
            <div className="row">
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div
                  className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img src="/assets/imgs/page/homepage8/img-3.jpg" />
                      </div>
                    </a>
                  </Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating">
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star.svg" />
                        </span>
                      </div>
                      <Link href="#">
                        <a className="text-semibold">(84 rates)</a>
                      </Link>
                    </div>
                    <Link href="#">
                      <a>
                        <h3 className="text-body-lead color-gray-900">
                          All Natural Italian-Style Chicken Meatballs
                        </h3>
                      </a>
                    </Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices">
                        <span className="location-icon">
                          Central Park West, USA
                        </span>
                      </div>
                      <div className="box-prices">
                        <span className="calendar-icon">3 days, 2 night</span>
                      </div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices">
                        <span className="price-regular mr-5">$22.51</span>
                        <span className="price-regular price-line">$2.8</span>
                      </div>
                      <div className="button-add text-end">
                        <Link href="#">
                          <a className="btn btn-explorer">Explore</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div
                  className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img src="/assets/imgs/page/homepage8/img-4.jpg" />
                      </div>
                    </a>
                  </Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating">
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star.svg" />
                        </span>
                      </div>
                      <Link href="#">
                        <a className="text-semibold">(84 rates)</a>
                      </Link>
                    </div>
                    <Link href="#">
                      <a>
                        <h3 className="text-body-lead color-gray-900">
                          All Natural Italian-Style Chicken Meatballs
                        </h3>
                      </a>
                    </Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices">
                        <span className="location-icon">
                          Central Park West, USA
                        </span>
                      </div>
                      <div className="box-prices">
                        <span className="calendar-icon">3 days, 2 night</span>
                      </div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices">
                        <span className="price-regular mr-5">$22.51</span>
                        <span className="price-regular price-line">$2.8</span>
                      </div>
                      <div className="button-add text-end">
                        <Link href="#">
                          <a className="btn btn-explorer">Explore</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div
                  className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img src="/assets/imgs/page/homepage8/img-5.jpg" />
                      </div>
                    </a>
                  </Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating">
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star.svg" />
                        </span>
                      </div>
                      <Link href="#">
                        <a className="text-semibold">(84 rates)</a>
                      </Link>
                    </div>
                    <Link href="#">
                      <a>
                        <h3 className="text-body-lead color-gray-900">
                          All Natural Italian-Style Chicken Meatballs
                        </h3>
                      </a>
                    </Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices">
                        <span className="location-icon">
                          Central Park West, USA
                        </span>
                      </div>
                      <div className="box-prices">
                        <span className="calendar-icon">3 days, 2 night</span>
                      </div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices">
                        <span className="price-regular mr-5">$22.51</span>
                        <span className="price-regular price-line">$2.8</span>
                      </div>
                      <div className="button-add text-end">
                        <Link href="#">
                          <a className="btn btn-explorer">Explore</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div
                  className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img src="/assets/imgs/page/homepage8/img-6.png" />
                      </div>
                    </a>
                  </Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating">
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star.svg" />
                        </span>
                      </div>
                      <Link href="#">
                        <a className="text-semibold">(84 rates)</a>
                      </Link>
                    </div>
                    <Link href="#">
                      <a>
                        <h3 className="text-body-lead color-gray-900">
                          All Natural Italian-Style Chicken Meatballs
                        </h3>
                      </a>
                    </Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices">
                        <span className="location-icon">
                          Central Park West, USA
                        </span>
                      </div>
                      <div className="box-prices">
                        <span className="calendar-icon">3 days, 2 night</span>
                      </div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices">
                        <span className="price-regular mr-5">$22.51</span>
                        <span className="price-regular price-line">$2.8</span>
                      </div>
                      <div className="button-add text-end">
                        <Link href="#">
                          <a className="btn btn-explorer">Explore</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div
                  className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img src="/assets/imgs/page/homepage8/img-7.png" />
                      </div>
                    </a>
                  </Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating">
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star.svg" />
                        </span>
                      </div>
                      <Link href="#">
                        <a className="text-semibold">(84 rates)</a>
                      </Link>
                    </div>
                    <Link href="#">
                      <a>
                        <h3 className="text-body-lead color-gray-900">
                          All Natural Italian-Style Chicken Meatballs
                        </h3>
                      </a>
                    </Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices">
                        <span className="location-icon">
                          Central Park West, USA
                        </span>
                      </div>
                      <div className="box-prices">
                        <span className="calendar-icon">3 days, 2 night</span>
                      </div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices">
                        <span className="price-regular mr-5">$22.51</span>
                        <span className="price-regular price-line">$2.8</span>
                      </div>
                      <div className="button-add text-end">
                        <Link href="#">
                          <a className="btn btn-explorer">Explore</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div
                  className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img src="/assets/imgs/page/homepage8/img-8.png" />
                      </div>
                    </a>
                  </Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating">
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star.svg" />
                        </span>
                      </div>
                      <Link href="#">
                        <a className="text-semibold">(84 rates)</a>
                      </Link>
                    </div>
                    <Link href="#">
                      <a>
                        <h3 className="text-body-lead color-gray-900">
                          All Natural Italian-Style Chicken Meatballs
                        </h3>
                      </a>
                    </Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices">
                        <span className="location-icon">
                          Central Park West, USA
                        </span>
                      </div>
                      <div className="box-prices">
                        <span className="calendar-icon">3 days, 2 night</span>
                      </div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices">
                        <span className="price-regular mr-5">$22.51</span>
                        <span className="price-regular price-line">$2.8</span>
                      </div>
                      <div className="button-add text-end">
                        <Link href="#">
                          <a className="btn btn-explorer">Explore</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="text-center mt-30">
              <Link href="#">
                <a className="btn btn-black icon-arrow-right-white">
                  Load more destinations
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                <div className="inner-image">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/homepage8/img-2.png"
                    alt="Builder Floor"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <h3 className="text-heading-1 mt-30">How does it works</h3>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  We find the absolute best prices on hotels &amp; flights then
                  we pass these savings directly to you.
                </p>
                <div className="list-icons-round mt-40">
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage8/user.svg" />
                    </span>
                    <h4 className="text-heading-5 color-green-900">Account</h4>
                    <p className="text-body-text color-gray-600 mt-5">
                      All the necessary information to create your account are
                      below this.
                    </p>
                  </div>
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage8/destination.svg" />
                    </span>
                    <h4 className="text-heading-5 color-green-900">
                      Select Destination
                    </h4>
                    <p className="text-body-text color-gray-600 mt-5">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage8/trip.svg" />
                    </span>
                    <h4 className="text-heading-5 color-green-900">
                      Book a Trip
                    </h4>
                    <p className="text-body-text color-gray-600 mt-5">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".7s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage8/flight.svg" />
                    </span>
                    <h4 className="text-heading-5 color-green-900">
                      Take your flight
                    </h4>
                    <p className="text-body-text color-gray-600 mt-5">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="section-box bg-7 mt-70">
          <div className="container mt-100 mb-50">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <h3 className="text-heading-1 mt-30">
                  A Simply Perfect Place To Get Lost
                </h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                  Feugiat primis ligula risus auctor egestas and augue viverra
                  mauri tortor in iaculis magna a feugiat mauris ipsum and
                  placerat viverra tortor gravida purus.
                </p>
                <div className="list-icons mt-40">
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage2/icon-work.svg" />
                    </span>
                    <h4 className="text-heading-4">Best Price Guarantee</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage2/icon-design.svg" />
                    </span>
                    <h4 className="text-heading-4">Easy &amp; Quick Booking</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                <div className="inner-image">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/homepage8/img.png"
                    alt="Builder Floor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="section-box">
          <div className="container mt-110">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Our Happy Customers</h3>
                <p className="text-body-lead-large color-gray-600">
                  Know about our clients, we are a woldwide corporate brand
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-80">
            <TestimonialSlider />
          </div>
        </div>
        {/* <div className="section-box overflow-visible mt-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-partners none-bd pb-0">
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-1.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-2.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-3.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-4.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-5.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-6.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-7.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-8.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-9.svg"
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <section className="section-box overflow-visible mb-100">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="bg-6 box-newsletter position-relative">
                  <div className="row">
                    <div className="col-lg-5 col-md-7">
                      <span className="text-body-capitalized color-gray-500 text-uppercase">
                        newsletter
                      </span>
                      <h4 className="text-heading-2 mb-10 mt-10">
                        Subscribe our newsletter
                      </h4>
                      <p className="text-body-text color-gray-500">
                        By clicking the button, you are agreeing with our
                      </p>
                      <Link href="/page-terms">
                        <a>Term &amp; Conditions</a>
                      </Link>

                      <div className="box-form-newsletter mt-30">
                        <form className="form-newsletter">
                          <input
                            className="input-newsletter"
                            value=""
                            placeholder="Enter you mail .."
                          />
                          <button className="btn btn-send"></button>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                      <div className="block-chart shape-1">
                        <img
                          src="/assets/imgs/template/chart.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <img
                        className="img-responsive img-newsletter"
                        src="assets/imgs/template/img-newsletter.png"
                        alt="Builder Floor"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Index8;
