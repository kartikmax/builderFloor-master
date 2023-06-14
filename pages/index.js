/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";
import FilterPrice from "../components/searchProperties/components/FilterPrice";
import { useState, useCallback } from "react";
import { useCookies } from "react-cookie";
import Preloader from "../components/elements/Preloader";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";

function Index8() {
  const router = useRouter();
  const [priceRange, setPriceRange] = useState();
  const [cookie, setCookie, removeCookie] = useCookies(["property_filters"]);
  const [loading, setLoading] = useState(false);
  const onChangePriceRange = useCallback(
    (priceArr) => {
      setPriceRange([...priceArr]);
    },
    [priceRange]
  );

  const [newProperties, setProperties] = useState([]);

  const propertiesFnc = async (e, i) => {
    const response = await axios.post(
      // "https://p24x7-server.herokuapp.com/api/p24x7",
      "https://testerp1apis.nextsolutions.in/api/p24x7",
      {
        action: "read",
        module: "properties",
        _id: e,
        apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
      }
    );
    console.log(response.data);
    const pro = newProperties;
    pro[i] = response.data;
    setProperties(pro);
  };
  useEffect(() => {
    if (newProperties.length === 0) {
      propertiesFnc("646c8fe1f277e7aab0151de8", 0);
      propertiesFnc("646c8fe1f277e7aab0151de6", 1);
      propertiesFnc("646c8fe1f277e7aab0151de9", 2);
    }
  });
  console.log(newProperties);

  return (
    <>
      {loading && <Preloader />}
      <Layout>
        <div className="section-box">
          <div className="banner-homepage8 ">
            <div className="banner-hero banner-mob banner-homepage8 banner-background">
              {/* banner-background"> */}
              <img
                src="/assets/imgs/textures/banner-builder.jpg"
                className="absolute left-0 w-[100%] h-[100%] object-cover top-0 z-10"
                alt=""
              />
              <div className="container mt-50 mb-50 relative z-20 ">
                <div>
                  <div className="col-lg-12">
                    <div className="col-lg-9 text-right"></div>{" "}
                    <h1 className="text-display-4 text-display-mob font-bold mt-[20px] text-center color-white">
                      Search Your{" "}
                      <span className="color-gold">Next Property </span>
                      <br></br>
                      from our Website
                    </h1>
                    {/* <p className="text-body-lead-large text-body-lead-mob color-white font-bold mt-20 text-center">
                      Optimize your website for Google&lsquo;s first page
                      ranking to increase traffic and sales.
                    
                    </p> */}
                    {/* Get a website to be found on the first page of Google to
                    avoid missing out on potential visitors and sales. */}
                    <div className="w-[100%] h-[60px] flex items-center justify-center">
                      <div className="w-[300px] h-[60px] f1 mt-[30px] flex items-center justify-center text-[20px] font-bold bg-[#fff] rounded-xl">
                        <span className="text-[#555] font-medium">
                          Location:
                        </span>
                        <div className=" cursor-pointer h-[50px] flex items-center justify-center ml-[10px]">
                          <span className="mr-[5px] ">Gurgaon</span>
                          <Image
                            src={"/assets/imgs/textures/dropdown.svg"}
                            alt=""
                            className=" ml-[10px] translate-y-[0px]"
                            width={15}
                            height={15}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-[25px] form-center px-[10%]">
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
                              setLoading(true);
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

                              router.push(`/search-properties`);

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
                  {/* <div className="col-lg-5 d-none d-lg-block">
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
                </div> */}
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
        </div>
        <div className="section-box mt-100">
          <div className="container">
            {/* <span className="tag-1 color-orange-900">Hot for this Summer</span> */}
            <h2 className="text-heading-1 color-gray-900 mt-30 text-center">
              Explore Top Properties
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20 text-center">
              We find the absolute best prices on plots &amp; flats
            </p>
          </div>
          <div className="w-[90%] mx-auto mt-70">
            <div>
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
              <div className="col-lg-12 flex flex-wrap md:pl-[0] pl-[35px] justify-center">
                {/*  <Link href="#">
                  <a>
                    <div className="card-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 justify-center mr-[10px] mb-[30px] check-width ">
                      <div className="card-image-2 img-1"></div>
                      <div>
                        <h3
                          className="text-body-lead color-gray-900 text-center"
                          style={{ lineHeight: "25px" }}
                        >
                          Delhi
                        </h3>
                        <div className="d-flex mt-10 justify-center">
                          <div className="box-prices">
                            <span className="location-icon text-center">
                              Central Park West, USA
                            </span>
                          </div>
                        </div>{" "}
                        <div className="d-flex mb-20 justify-center">
                          <div className="box-prices"></div>
                          <div className="box-prices">
                            <span className="calendar-icon">
                              3 days, 2 night
                            </span>{" "}
                            |{" "}
                            <span className="price-regular mr-5">
                              $22.51 -{" "}
                            </span>{" "}
                            <span className="price-regular price-line">
                              $2.8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="card-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 justify-center mr-[10px] mb-[30px] check-width ">
                      <div className="card-image-2 img-2"></div>
                      <div>
                        <h3
                          className="text-body-lead color-gray-900 text-center"
                          style={{ lineHeight: "25px" }}
                        >
                          Gurugram{" "}
                        </h3>
                        <div className="d-flex mt-10 justify-center">
                          <div className="box-prices">
                            <span className="location-icon text-center">
                              Central Park West, USA
                            </span>
                          </div>
                        </div>
                        <div className="d-flex mb-20 justify-center">
                          <div className="box-prices"></div>
                          <div className="box-prices">
                            <span className="calendar-icon">
                              3 days, 2 night
                            </span>{" "}
                            |{" "}
                            <span className="price-regular mr-5">
                              $22.51 -{" "}
                            </span>
                            <span className="price-regular price-line">
                              $2.8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="card-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 justify-center mr-[10px] mb-[30px] check-width ">
                      <div className="card-image-2 img-3"></div>
                      <div>
                        <h3
                          className="text-body-lead color-gray-900 text-center"
                          style={{ lineHeight: "25px" }}
                        >
                          Mumbai
                        </h3>
                        <div className="d-flex mt-10 justify-center">
                          <div className="box-prices">
                            <span className="location-icon text-center">
                              Central Park West, USA
                            </span>
                          </div>
                        </div>{" "}
                        <div className="d-flex mb-20 justify-center">
                          <div className="box-prices"></div>
                          <div className="box-prices">
                            <span className="calendar-icon">
                              3 days, 2 night
                            </span>{" "}
                            |<span className="price-regular mr-5">$22.51-</span>
                            <span className="price-regular price-line">
                              $2.8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="card-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 justify-center mr-[10px] mb-[30px] check-width ">
                      <div className="card-image-2 img-4"></div>
                      <div>
                        <h3
                          className="text-body-lead color-gray-900 text-center"
                          style={{ lineHeight: "25px" }}
                        >
                          Kolkata{" "}
                        </h3>
                        <div className="d-flex mt-10 justify-center">
                          <div className="box-prices">
                            <span className="location-icon text-center">
                              Central Park West, USA
                            </span>
                          </div>
                        </div>
                        <div className="d-flex mb-20 justify-center">
                          <div className="box-prices">
                            <span className="calendar-icon">
                              3 days, 2 night
                            </span>
                            {"   "}|
                            <span className="price-regular mr-5">
                              $22.51 -{" "}
                            </span>
                            <span className="price-regular price-line">
                              $2.8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link> */}

                {/* Old Style Start */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 justify-center mr-[10px] mb-[30px] check-width ">
                  <div
                    className="product-item-2 product-item-3 wow animate__animated animate__fadeIn mb-[30px] check-width-2 "
                    data-wow-delay=".3s"
                    style={{ height: "100%" }}
                  >
                    <Link href="/shop/646c8fe1f277e7aab0151de8">
                      <a>
                        <div className="product-img mt-[-5px]">
                          <img
                            className="w-[100%] h-[300px]"
                            src={`https://testerp1apis.nextsolutions.in/uploads/A329A-SL1/IMG_20221010_155607_00_merged.jpg`}
                          />
                          {/* <img src="/assets/imgs/page/homepage8/img-4.jpg" /> */}
                        </div>
                      </a>
                    </Link>

                    <div className="product-info">
                      <div
                        className="rating rating-display"
                        style={{ display: "block" }}
                      >
                        <div className="box-rating gap-1 mb-10">
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
                          <Link href="#">
                            <a className="text-semibold">(84 rates)</a>
                          </Link>
                        </div>
                      </div>
                      <Link href="/shop/646c8fe1f277e7aab0151de8">
                        <a>
                          <h3
                            className="text-body-lead color-gray-900"
                            style={{ lineHeight: "25px" }}
                          >
                            4BHK Luxury Brand New Builder Floor Availabe for
                            Sale in Sushant Lok-1,Gurgaon
                          </h3>
                        </a>
                      </Link>
                      <div className="d-flex mt-20 mb-20 justify-between">
                        <div className="box-prices">
                          <span className="location-icon">SUSHANT LOK -1</span>
                        </div>
                        {/* <div className="box-prices">
                          <span className="calendar-icon">3 days, 2 night</span>
                        </div> */}
                      </div>

                      <div className="d-flex mt-10 translate-y-[16px]">
                        {/* <div className="box-prices">
                          <span className="price-regular mr-5">$22.51</span>
                          <span className="price-regular price-line">$2.8</span>
                        </div> */}
                        {/* <div className="button-add text-end ml-auto mt-auto">
                          <Link href="#">
                            <a className="btn btn-explorer">Explore</a>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 justify-center mr-[10px] mb-[30px] check-width ">
                  <div
                    className="product-item-2 product-item-3 wow animate__animated animate__fadeIn mb-[30px] check-width-2 "
                    data-wow-delay=".3s"
                    style={{ height: "100%" }}
                  >
                    <Link href="/shop/646c8fe1f277e7aab0151de8">
                      <a>
                        <div className="product-img mt-[-5px]">
                          <img
                            className="w-[100%] h-[300px]"
                            src={`https://testerp1apis.nextsolutions.in/uploads/B473-SL1/IMG_20221010_121906_00_merged.jpg`}
                          />
                        </div>
                      </a>
                    </Link>

                    <div className="product-info">
                      <div
                        className="rating rating-display"
                        style={{ display: "block" }}
                      >
                        <div className="box-rating gap-1 mb-10">
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
                          <Link href="#">
                            <a className="text-semibold">(84 rates)</a>
                          </Link>
                        </div>
                      </div>
                      <Link href="/shop/646c8fe1f277e7aab0151de8">
                        <a>
                          <h3
                            className="text-body-lead color-gray-900"
                            style={{ lineHeight: "25px" }}
                          >
                            {
                              "4BHK Brand New Builder Floor Availabe for Sale in Sushant Lok-1,Gurgaon"
                            }
                          </h3>
                        </a>
                      </Link>
                      <div className="d-flex mt-20 mb-20 justify-between">
                        <div className="box-prices">
                          <span className="location-icon">{"GURGAON"}</span>
                        </div>
                      </div>

                      <div className="d-flex mt-10 translate-y-[36px]">
                        {/* <div className="button-add text-end ml-auto mt-auto">
                          <Link href="#">
                            <a className="btn btn-explorer">Explore</a>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 justify-center mr-[10px] mb-[30px] check-width ">
                  <div
                    className="product-item-2 product-item-3 wow animate__animated animate__fadeIn mb-[30px] check-width-2 "
                    data-wow-delay=".3s"
                    style={{ height: "100%" }}
                  >
                    <Link href="/shop/646c8fe1f277e7aab0151de8">
                      <a>
                        <div className="product-img mt-[-5px]">
                          <img
                            className="w-[100%] h-[300px]"
                            src={`https://testerp1apis.nextsolutions.in/uploads/A329A-SL1/IMG_20221010_155801_00_merged.jpg`}
                          />
                        </div>
                      </a>
                    </Link>

                    <div className="product-info">
                      <div
                        className="rating rating-display"
                        style={{ display: "block" }}
                      >
                        <div className="box-rating gap-1 mb-10">
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
                          <Link href="#">
                            <a className="text-semibold">(84 rates)</a>
                          </Link>
                        </div>
                      </div>
                      <Link href="/shop/646c8fe1f277e7aab0151de8">
                        <a>
                          <h3
                            className="text-body-lead color-gray-900"
                            style={{ lineHeight: "25px" }}
                          >
                            {
                              "4BHK Luxury Brand New Builder Floor Availabe for Sale in Sushant Lok-1,Gurgaon"
                            }
                          </h3>
                        </a>
                      </Link>
                      <div className="d-flex mt-20 mb-20 justify-between">
                        <div className="box-prices">
                          <span className="location-icon">
                            {"SUSHANT LOK -1"}
                          </span>
                        </div>
                      </div>

                      <div className="d-flex mt-10 translate-y-[16px]">
                        {/* <div className="button-add text-end ml-auto mt-auto">
                          <Link href="#">
                            <a className="btn btn-explorer">Explore</a>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Old Style END */}
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
              <Link href="/search-properties">
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
        {/* <div className="section-box">
          <div className="container mt-60">
            <div>
              <div className="col-lg-12 col-sm-8">
                <h3 className="text-heading-1 mb-10 text-center">
                  Our Happy Customers
                </h3>
                <p className="text-body-lead-large color-gray-600 text-center">
                  Know about our clients, we are a woldwide corporate brand
                </p>
              </div>
            </div>
          </div>

          <div className="container mt-80">
            <TestimonialSlider />
          </div>
        </div> */}
        {/* <div className="col-lg-12 flex justify-center">
            <div className="card-3 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 justify-center mb-[30px] check-width ">
              <div className="card-image-3 img-1"></div>
              <div className="text-left">
                <h3
                  className="text-body-lead color-gray-900 text-center"
                  style={{ lineHeight: "25px" }}
                >
                  Delhi
                </h3>
                <div className="d-flex mt-10 justify-center">
                  <div className="box-prices">
                    <span className="location-icon text-center">
                      Central Park West, USA
                    </span>
                  </div>
                </div>{" "}
                <div className="d-flex mb-20 justify-center">
                  <div className="box-prices"></div>
                  <div className="box-prices">
                    <span className="calendar-icon">3 days, 2 night</span> |{" "}
                    <span className="price-regular mr-5">$22.51 - </span>{" "}
                    <span className="price-regular price-line">$2.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
        {/* <section className="section-box overflow-visible mb-100">
          <div className="md:w-[80%] mx-auto mt-100">
            <div>
              <div className="col-lg-10 mx-auto">
                <div className="bg-6 box-newsletter position-relative md:h-[900px]  h-[550px] ">
                  <div className="row">
                    <div className="col-lg-5 col-md-7">
                      <span className="text-body-capitalized color-gray-500 text-uppercase">
                        newsletter
                      </span>
                      <h4 className="text-heading-2 mb-10 mt-10">
                        Subscribe our newsletter
                      </h4>
                      <p
                        className="text-body-text color-gray-500"
                        style={{ fontSize: "18px" }}
                      >
                        By clicking the button, you are agreeing with our
                      </p>
                      <Link href="/page-terms">
                        <a>Term &amp; Conditions</a>
                      </Link>

                      <div className="box-form-newsletter mt-30">
                        <form className="form-newsletter">
                          <input
                            className="input-newsletter"
                            // value=""
                            placeholder="Enter you mail .."
                          />
                          <button className="btn btn-send"></button>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                      <div className="block-chart shape-1 md:bottom-[300px]">
                        <img
                          src="/assets/imgs/template/chart.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="block-chart-2 md:bottom-[-400px]">
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
          </div>
        </section> */}
      </Layout>
    </>
  );
}

export default Index8;
