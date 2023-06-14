/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../util/shopData";

// Icons
import { BsHouse } from "react-icons/bs";
import { MdApartment, MdFavoriteBorder } from "react-icons/md";

// Components
import Layout from "../components/layout/Layout";

import FilterLocations from "../components/searchProperties/FilterLocations";
import CustomizedHook from "../components/elements/Autocomplete";

// Sections
import FilterProperties from "../components/searchProperties/sections/FilterProperties";
import PopularProperties from "../components/searchProperties/sections/TopProperties";

// Helpers
import { parseCookies } from "../helpers/CookieParser";
import { getCapitalizeWords } from "../helpers/CamelCaseToCapitalizeWords";
import { priceRange } from "../components/searchProperties/components/FilterPrice";
import Viewer from "../components/360Viewer/Viewer360";
import FilterContainer from "../components/filter";
import useWidth from "../hooks/useWidth";

function ShopGrid2(props) {
  const [total, setTotal] = useState(10);
  const [properties, setProperties] = useState(props.properties);
  const [locations, setLocations] = useState(props.locations);
  const [values] = useState(props.values);
  const [view360, set360] = useState(false);
  const [url, setUrl] = useState("./assets/imgs/textures/one-1.jpeg");
  const closeHandler = () => {
    set360(false);
  };

  useEffect(() => {
    setTotal(properties.length);
  });

  function replaceEmptyWithPercentageURL(string) {
    const parts = string.split(" ");
    const nonEmptyParts = parts.filter((part) => part !== "");
    const numEmptyParts = parts.length - nonEmptyParts.length;
    const emptyPercentage = (numEmptyParts / parts.length) * 100;

    const newParts = parts.map((part) =>
      part !== "" ? part : encodeURIComponent("%")
    );
    const outputString = newParts.join(" ");
    return { outputString, emptyPercentage };
  }

  function replaceEmptyWithPercentage(string) {
    const parts = string.split(" ");
    const nonEmptyParts = parts.filter((part) => part !== "");
    const numEmptyParts = parts.length - nonEmptyParts.length;
    const emptyPercentage = (numEmptyParts / parts.length) * 100;

    const newParts = nonEmptyParts
      .map((part) => encodeURIComponent(part))
      .join("%");
    return { newParts, emptyPercentage };
  }

  const checFnc = (str) => {
    if (str[0] === " ") {
      return str.slice(1);
    } else {
      return str;
    }
  };

  function endsWithDesktopIni(str) {
    return str.endsWith("desktop.ini");
  }

  const width = useWidth();

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const newProperties = props.properties;
    setProperties(newProperties.slice(pageNumber * 10, pageNumber * 10 + 10));
  }, [pageNumber]);

  return (
    <>
      <Layout>
        {view360 && (
          <Viewer
            close={closeHandler}
            curr={0}
            // images={[
            //   {
            //     src: url,
            //     name: "Apartment-1",
            //     position: { x: -150, y: -150, z: -200 },
            //   },
            // ]}
            images={url}
          />
        )}
        {/* <section className="section-box">
          <div className="banner-hero banner-breadcrums bg-gray-100">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="text-display-3 color-gray-900 mb-20">
                    Shop: Electronic
                  </h1>
                  <p className="text-heading-6 color-gray-600 mb-20">
                    From year to year we strive to invent the most innovative
                    technology
                    <br className="d-lg-block d-none" />
                    that is used by both small enterprises and space
                    enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <div className="section-box mt-50"></div>
        <div className="text-center">
          <div className="">
            <h1
              className="color-head-900  uppercase text-[28px] md:text-[20px] tracking-wide"
              style={{ marginBottom: "40px" }}
            >
              Property Results
            </h1>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 dr-ltr">
              {/* <FilterProperties
                values={values}
                setProperties={setProperties}
                locations={locations}
              /> */}
              <FilterContainer
                values={values}
                setProperties={setProperties}
                locations={locations}
              />
              {/* <PopularProperties /> */}
            </div>
          </div>
          <div className=" md:px-[5px] px-[15px]">
            <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 dr-ltr mx-auto">
              {/* <div className="filters-properties d-flex">
                <div className="number-info">
                  <strong className="text-body-lead color-gray-500">
                    There are <span className="color-green-900">1853</span>{" "}
                    properties in this category
                  </strong>
                </div>
                <div className="fitler-info">
                  <div className="icon-layout mr-10 text-body-text color-gray-500">
                    Show:
                    <div className="color-green-900 d-inline">
                      <div className="dropdown dropdown-sort">
                        <button
                          className="btn dropdown-toggle"
                          id="dropdownPage"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-display="static"
                        >
                          <span>50</span>
                          <i className="fi-rr-angle-small-down"></i>
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-light"
                          aria-labelledby="dropdownPage"
                        >
                          <li>
                            <Link href="#">
                              <a className="dropdown-item active">50</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a className="dropdown-item">100</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a className="dropdown-item">150</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="icon-sort text-body-text color-gray-500">
                    Sort by:
                    <div className="color-green-900 d-inline">
                      <div className="dropdown dropdown-sort">
                        <button
                          className="btn dropdown-toggle"
                          id="dropdownSort"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-display="static"
                        >
                          <span>Featured</span>
                          <i className="fi-rr-angle-small-down"></i>
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-light"
                          aria-labelledby="dropdownSort"
                        >
                          <li>
                            <Link href="#">
                              <a className="dropdown-item active">Featured</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a className="dropdown-item">Rating</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a className="dropdown-item">Low Price</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row md:mx-auto">
                {properties?.map((item, i) => {
                  if (item.images.length === 0) {
                    console.log(item);
                  }
                  // if (i === 3 || i === 4 || i === 5 || i === 6 || i === 7) {
                  //   console.log(item.images);
                  // }
                  // console.log(
                  //   item.images[0]
                  //     ? !endsWithDesktopIni(checFnc(item.images[0]))
                  //       ? `https://testerp1apis.nextsolutions.in/${checFnc(
                  //           item.images[0]
                  //         )}`
                  //       : `https://testerp1apis.nextsolutions.in/${checFnc(
                  //           item.images[1]
                  //         )}`
                  //     : "/assets/imgs/page/homepage8/img-4.jpg"
                  // );

                  if (i > 9) {
                    return <React.Fragment key={i}></React.Fragment>;
                  }
                  return (
                    <React.Fragment key={i}>
                      <div className="col-xl-12 md:pr-[0]  drop-shadow-2xl md:pl-[0] col-lg-12 col-md-12 col-sm-12 col-12 mb-30">
                        <div className="product-item-2 rounded-[0px] hover-up">
                          <div className="d-flex mb-[30px] justify-between item-center bord-bott p-15">
                            <Link href={`/shop/${item._id}`}>
                              <a>
                                <h1 className="head-style h-[40px] text-left">
                                  Fulbrix
                                </h1>
                                <h3 className="f2 text-[18px] font-bold md:leading-[20px] md:text-left  color-gray-900">
                                  {`${""}
                                    ${item.sectorNumber}
                                   ${getCapitalizeWords(
                                     item.city
                                   )}, ${getCapitalizeWords(item.state)}`}
                                </h3>
                              </a>
                            </Link>
                            {/* <div>
                            <div className="box-quick-view"> */}
                            <div className="quick-view bord-left ml-[10px]">
                              <Link href="#">
                                <a>
                                  <MdFavoriteBorder fontSize="large" />
                                </a>
                              </Link>
                            </div>
                            {/* </div>
                            </div> */}
                          </div>
                          <Link href={`/shop/${item._id}`}>
                            <a>
                              <div className="product-image display-check">
                                <img
                                  className=" h-[400px] md:p-0"
                                  style={{
                                    width: width < 576 ? "100%" : "400px",
                                    height: "350px",
                                    padding: width < 576 && "0",
                                    borderRadius: width < 576 && "0px",
                                  }}
                                  src={
                                    item.images[0]
                                      ? !endsWithDesktopIni(
                                          checFnc(item.images[0])
                                        )
                                        ? `https://testerp1apis.nextsolutions.in/${checFnc(
                                            item.images[0]
                                          )}`
                                        : `https://testerp1apis.nextsolutions.in/${checFnc(
                                            item.images[1]
                                          )}`
                                      : "/assets/imgs/page/homepage8/img-4.jpg"
                                  }
                                  alt=""
                                />
                              </div>
                            </a>
                          </Link>
                          <div className="box-quick-view">
                            <div
                              className="quick-view"
                              style={{ border: "none" }}
                            >
                              {/* <Link href="#">
                              <a className="like-product"></a>
                            </Link> */}

                              <Link href="#">
                                <a
                                  className="shuffle-product "
                                  style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                  }}
                                ></a>
                              </Link>
                              {item.images.length !== 0 &&
                                item.imageType === "360 DEGREE" && (
                                  <Link href="#">
                                    <a
                                      className="view-product"
                                      onClick={() => {
                                        const aarr = [];
                                        for (let j = 0; j < 4; j++) {
                                          if (item.images[j]) {
                                            aarr.push({
                                              src: `https://testerp1apis.nextsolutions.in/${item.images[j]}`,
                                              name: "Image-" + (j + 1),
                                              position: {
                                                x: -150,
                                                y: -150,
                                                z: -200,
                                              },
                                            });
                                          }
                                        }
                                        setUrl(aarr);
                                        set360(true);
                                      }}
                                    ></a>
                                  </Link>
                                )}
                              <Link href="#">
                                <a
                                  className="shuffle-product"
                                  style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                  }}
                                ></a>
                              </Link>
                            </div>
                          </div>
                          <div className="product-info product-infos">
                            <h3
                              className="head-style md:leading-[30px] md:text-left text-left w-[100%]"
                              style={{ color: "black" }}
                            >
                              {/* Studio - 3 Beds */}
                              {/* {item.category} - {item.accommodation} */}
                              Flat - {item.accommodation}
                            </h3>
                            <h3
                              className="text-body-lead md:leading-[30px] md:text-left text-left color-gray-900 my-[5px] mb-[10px]"
                              style={{
                                fontWeight: "normal",
                                marginBottom: "-20px",
                              }}
                            >
                              {/* A well furnished plot with spacious rooms. */}
                              {item.title ? item.title : "-"}
                            </h3>
                            <span className="text-body-small color-gray-500 font-bold">
                              {item.brand}
                            </span>

                            {/* // TODO: Use Mui rating component here */}
                            <p className="text-body-text icon-with-text mt-[10px] color-gray-500">
                              <img
                                className="propicon"
                                src="/assets/imgs/page/homepage5/home.svg"
                                alt="Builder Floor"
                              />
                              {`${item.accommodation[0]}BHK`}&nbsp;&nbsp;&nbsp;
                              <img
                                className="propicon"
                                src="/assets/imgs/page/homepage5/floor.svg"
                                alt="Builder Floor"
                              />
                              {`${getCapitalizeWords(item.floor)} Floor `}
                              &nbsp;&nbsp;&nbsp;
                              <img
                                className="propicon"
                                src="/assets/imgs/page/homepage5/yard.svg"
                                alt="Builder Floor"
                              />
                              {`${item.size}Sq. Yd.`}
                            </p>
                            <div>
                              <div className="rating mt-10 mr-15">
                                <div className="box-rating">
                                  <span></span>
                                  <img
                                    className="rateicon"
                                    src="/assets/imgs/page/homepage5/star-active.svg"
                                    alt="Builder Floor"
                                  />
                                  <span></span>
                                  <img
                                    className="rateicon"
                                    src="/assets/imgs/page/homepage5/star-active.svg"
                                    alt="Builder Floor"
                                  />
                                  <span></span>
                                  <img
                                    className="rateicon"
                                    src="/assets/imgs/page/homepage5/star-active.svg"
                                    alt="Builder Floor"
                                  />
                                  <span></span>
                                  <img
                                    className="rateicon"
                                    src="/assets/imgs/page/homepage5/star-active.svg"
                                    alt="Builder Floor"
                                  />
                                  <span></span>
                                  <img
                                    className="rateicon"
                                    src="/assets/imgs/page/homepage5/star.svg"
                                    alt="Builder Floor"
                                  />
                                </div>
                                <span className="text-semibold">
                                  {/* <span>(</span> */}
                                  <span>{item.rating}</span>
                                  {/* <span>&nbsp;rates )</span> */}
                                </span>
                              </div>

                              <div className="rating mr-15 justify-end">
                                <div className="d-flex flatprice mt-20">
                                  <div className="box-prices price-theme">
                                    <span className="price-regular color-white mr-5">
                                      {`₹
                                ${parseFloat(item.price)
                                  .toExponential()
                                  .toString()
                                  .split("e")[0]
                                  .slice(0, 4)}
                                Cr.`}
                                    </span>
                                    {/* <span className="price-regular price-line">
                                ${item.newPrice}
                              </span> */}
                                  </div>
                                </div>

                                {/* <div className="button-add text-end">
                              <Link href="#">
                                <a className="btn btn-cart">Add</a>
                              </Link>
                            </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
              {/* <div className="paginations">
                <ul className="pager">
                  <li>
                    <Link href="#">
                      <a className="prev-page"></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>1</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>3</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="page-dotted"></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="next-page"></a>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
            {/* <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 dr-ltr">
              <FilterProperties
                values={values}
                setProperties={setProperties}
                locations={locations}
              /> */}
            {/* <PopularProperties /> */}
            {/* </div> */}
          </div>
        </div>
        <div className="section-box">
          <div className="container">
            {/* <h2 className="text-heading-1 color-gray-900">
              Browse by category
            </h2> */}
            {/* <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6 text-end">
                <Link href="/page-signup">
                  <a className="btn btn-default hover-up icon-arrow-right mt-10">
                    Browse All
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="container">
            <div className="row">
              {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link passHref href="#">
                      <Image
                        alt="builderFloor"
                        width={360}
                        height={200}
                        src="/assets/imgs/page/homepage8/img-4.jpg"
                      />
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Plot</h4>
                  <p className="text-body-text color-gray-500">
                    1253 properties
                  </p>
                </div>
              </div> */}
              {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link passHref href="#">
                      <MdApartment fontSize={100} />
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Plot</h4>
                  <p className="text-body-text color-gray-500">
                    1253 properties
                  </p>
                </div>
              </div> */}
              {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/tablet.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Tablet</h4>
                  <p className="text-body-text color-gray-500">3253 properties</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img src="/assets/imgs/page/shop1/usb.svg" alt="Builder Floor" />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">USB Flash</h4>
                  <p className="text-body-text color-gray-500">4253 properties</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/mouse.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Game Mouse</h4>
                  <p className="text-body-text color-gray-500">653 properties</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/security.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Security</h4>
                  <p className="text-body-text color-gray-500">453 properties</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/watch.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Watch</h4>
                  <p className="text-body-text color-gray-500">1353 properties</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/scan.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Scanner</h4>
                  <p className="text-body-text color-gray-500">253 properties</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex w-[100%] px-[5%] md:px-[1%] justify-end">
          <div
            onClick={() => {
              if (pageNumber !== 0) {
                setPageNumber(pageNumber - 1);
              }
            }}
            style={{
              backgroundColor: pageNumber === 0 ? "#ccc" : "#006d77",
            }}
            className=" cursor-pointer w-[100px] flex items-center mr-[20px] justify-center h-[50px] rounded-[5px] text-[#fff] font-bold f1 "
          >
            Prev
          </div>
          <div
            onClick={() => {
              console.log(props.total);
              if (pageNumber !== props.total) {
                setPageNumber(pageNumber + 1);
              }
            }}
            style={{
              backgroundColor: pageNumber === props.total ? "#ccc" : "#006d77",
            }}
            className="cursor-pointer w-[100px] flex items-center justify-center h-[50px] rounded-[5px] text-[#fff] font-bold f1 "
          >
            Next
          </div>
        </div>
        {/* <section className="section-box mt-90">
          <div className="container">
            <h2 className="text-heading-1 color-gray-900">Viewed properties</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              Take it to your cart
            </p>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp1.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Bass ultra x-203. Head phone
                        </h3>
                        <span className="price-regular mr-15">$29.8</span>
                        <span className="price-regular price-line">$32.2</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp2.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Boxie by Dro C 3450. Active Noise
                        </h3>
                        <span className="price-regular mr-15">$30.2</span>
                        <span className="price-regular price-line">$42.5</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp3.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Sony DSC H300 - 20.1 Megapixel
                        </h3>
                        <span className="price-regular mr-15">$59.8</span>
                        <span className="price-regular price-line">$62.3</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp4.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Bass ultra x-203. Head phone
                        </h3>
                        <span className="price-regular mr-15">$42.6</span>
                        <span className="price-regular price-line">$52.3</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp5.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Boxie by Dro C 3450. Active Noise
                        </h3>
                        <span className="price-regular mr-15">$69.5</span>
                        <span className="price-regular price-line">$71.5</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp6.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Sony DSC H300 - 20.1 Megapixel
                        </h3>
                        <span className="price-regular mr-15">$52.9</span>
                        <span className="price-regular price-line">$55.6</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="section-box mt-70 shop-bottom-banner">
          <div className="container">
            <div className="box-green box-green-2 bdr-18">
              <h3 className="text-heading-1 color-white">
                You can order on
                <br className="d-lg-block d-none" />
                App and Play store
              </h3>
              <p className="text-desc-white">
                Bring the world of shopping to your phone
              </p>
              <div className="mt-60">
                <Link href="#">
                  <a className="mr-20">
                    <img
                      src="/assets/imgs/page/homepage5/apple-button.svg"
                      alt="Builder Floor"
                    />
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <img
                      src="/assets/imgs/page/homepage5/google-play.svg"
                      alt="Builder Floor"
                    />
                  </a>
                </Link>
              </div>
              <div className="mt-10">
                <span className="cb-layout mr-5">
                  Order direct from the app
                </span>
                <span className="cb-layout">Save and searches</span>
              </div>
              <div className="block-1 d-none d-lg-block">
                <img
                  src="/assets/imgs/page/shop1/safety.png"
                  alt="Builder Floor"
                />
              </div>
              <div className="block-2 d-none d-lg-block">
                <img
                  src="/assets/imgs/page/shop1/chart.png"
                  alt="Builder Floor"
                />
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    </>
  );
}

export async function getServerSideProps({ req, res, query }) {
  const data = {
    property_filters: query.filter,
  };
  let filters;
  let filterValues = {
    categories: [],
    cities: [],
    locations: [],
    facing: [],
    positions: [],
    floors: [],
    possession: [],
    accommodation: [],
    priceRange: [],
    sizeRange: [],
  };
  if (data?.property_filters) {
    filterValues = JSON.parse(data?.property_filters);
  }
  if (data?.property_filters) {
    filters = {
      ...(filterValues.cities?.length > 0 && {
        city: { $in: filterValues.cities },
      }),
      ...(filterValues.locations?.length > 0 && {
        sectorNumber: {
          $in: filterValues.locations.map(({ value }) => value),
        },
      }),
      ...(filterValues.possession?.length > 0 && {
        possession: { $in: filterValues.possession },
      }),
      ...(filterValues.floors?.length > 0 && {
        floor: { $in: filterValues.floors },
      }),
      ...(filterValues.accommodation?.length > 0 && {
        accommodation: { $in: filterValues.accommodation },
      }),
      ...(filterValues.categories?.length > 0 && {
        category: { $in: filterValues.categories },
      }),
      ...(filterValues.facing?.length > 0 && {
        facing: {
          $in: filterValues.facing,
        },
      }),
      ...(filterValues.positions.includes("parkFacing") > 0 && {
        parkFacing: { $eq: true },
      }),
      ...(filterValues.positions.includes("corner") > 0 && {
        cornerPlot: { $eq: true },
      }),
      ...(filterValues.priceRange?.[0] && {
        price: {
          $gte: filterValues.priceRange[0],
          ...(filterValues.priceRange?.[1] !=
            priceRange[priceRange.length - 1] && {
            $lte: filterValues.priceRange?.[1],
          }),
        },
      }),
      ...(filterValues.sizeRange?.[0] && {
        size: {
          $gte: filterValues.sizeRange?.[0],
          $lte: filterValues.sizeRange?.[1],
        },
      }),
    };
  }
  // console.log(filters);
  // console.log({ data, filters });
  const response = await axios.post(
    "https://testerp1apis.nextsolutions.in/api/p24x7",
    {
      action: "list",
      module: "properties",
      filters,
      apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
    }
  );

  const locationsResponse = await axios.post(
    "https://testerp1apis.nextsolutions.in/api/p24x7",
    {
      action: "auto",
      module: "properties",
      apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
    }
  );
  console.log(response.data);

  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      properties: response.data ?? [],
      locations: locationsResponse.data.map((location) => ({
        value: location,
        label: location,
      })),
      total: response.data ? response.data.length : 0,
      values: filterValues,
    }, // will be passed to the page component as props
  };
}

export default ShopGrid2;
