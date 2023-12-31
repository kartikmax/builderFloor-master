/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import data from "../util/shopData";
function ShopFrid1() {
  return (
    <>
      <Layout>
        <section className="section-box">
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
        </section>
        <div className="section-box mt-90">
          <div className="container">
            <h2 className="text-heading-1 color-gray-900">
              Browse by category
            </h2>
            <div className="row">
              <div className="col-lg-6">
                <p className="text-body-lead-large color-gray-600 mt-20">
                  All the smart devices, electronics or software you need are
                  ready to be discovered. Let&rsquo;s go!
                </p>
              </div>
              <div className="col-lg-6 text-end">
                <Link href="/page-signup">
                  <a className="btn btn-default hover-up icon-arrow-right mt-10">
                    Browse All
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/pc.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Desktop PC</h4>
                  <p className="text-body-text color-gray-500">
                    1253 properties
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/headphone.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Headphone</h4>
                  <p className="text-body-text color-gray-500">
                    453 properties
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/laptop.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Laptop</h4>
                  <p className="text-body-text color-gray-500">
                    7653 properties
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/mobile.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Mobile Phone</h4>
                  <p className="text-body-text color-gray-500">
                    1253 properties
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/printer.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Printer</h4>
                  <p className="text-body-text color-gray-500">
                    7253 properties
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/book.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">Books</h4>
                  <p className="text-body-text color-gray-500">
                    1253 properties
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
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
                  <p className="text-body-text color-gray-500">
                    3253 properties
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/usb.svg"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 className="text-heading-5 mb-5">USB Flash</h4>
                  <p className="text-body-text color-gray-500">
                    4253 properties
                  </p>
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
                  <p className="text-body-text color-gray-500">
                    653 properties
                  </p>
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
                  <p className="text-body-text color-gray-500">
                    453 properties
                  </p>
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
                  <p className="text-body-text color-gray-500">
                    1353 properties
                  </p>
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
                  <p className="text-body-text color-gray-500">
                    253 properties
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-box mt-90">
          <div className="container">
            <h2 className="text-heading-1 color-gray-900">Latest properties</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              Don&rsquo;t miss world trending
            </p>
          </div>
          <div className="container mt-70">
            <div className="filters-properties d-flex">
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
            </div>
            <div className="row mt-40">
              {data.map((item, i) => (
                <>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="product-item-2 hover-up">
                      <Link href={`/shop/${item.id}`}>
                        <a>
                          <div className="product-image">
                            <img
                              className="img-fluid"
                              src={`/assets/imgs/page/homepage5/${item.img}`}
                              alt=""
                            />
                          </div>
                        </a>
                      </Link>

                      <div className="box-quick-view">
                        <div className="quick-view">
                          <Link href="#">
                            <a className="like-product"></a>
                          </Link>

                          <Link href="#">
                            <a className="shuffle-product"></a>
                          </Link>

                          <Link href="#">
                            <a className="view-product"></a>
                          </Link>
                        </div>
                      </div>
                      <div className="product-info">
                        <span className="text-body-small color-gray-500 font-bold">
                          {item.brand}
                        </span>
                        <Link href={`/shop/${item.id}`}>
                          <a>
                            <h3 className="text-body-lead color-gray-900">
                              {item.title}
                            </h3>
                          </a>
                        </Link>

                        <div className="rating mt-10">
                          <div className="box-rating">
                            <span></span>
                            <img
                              src="/assets/imgs/page/homepage5/star-active.svg"
                              alt="Builder Floor"
                            />
                            <span></span>
                            <img
                              src="/assets/imgs/page/homepage5/star-active.svg"
                              alt="Builder Floor"
                            />
                            <span></span>
                            <img
                              src="/assets/imgs/page/homepage5/star-active.svg"
                              alt="Builder Floor"
                            />
                            <span></span>
                            <img
                              src="/assets/imgs/page/homepage5/star-active.svg"
                              alt="Builder Floor"
                            />
                            <span></span>
                            <img
                              src="/assets/imgs/page/homepage5/star.svg"
                              alt="Builder Floor"
                            />
                          </div>
                          <span className="text-semibold">
                            <span>(</span>
                            <span>{item.rating}</span>
                            <span>&nbsp;rates )</span>
                          </span>
                        </div>
                        <div className="d-flex mt-20">
                          <div className="box-prices">
                            <span className="price-regular mr-5">
                              ${item.oldPrice}
                            </span>
                            <span className="price-regular price-line">
                              ${item.newPrice}
                            </span>
                          </div>
                          <div className="button-add text-end">
                            <Link href="#">
                              <a className="btn btn-cart">Add</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="paginations">
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
            </div>
          </div>
        </section>
        <section className="section-box mt-90">
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
        </section>
        <section className="section-box">
          <div className="container mt-130">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  What&apos;s new
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  From Our blog and Event fanpage
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-90">
            <div className="row">
              <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                <div className="card-grid-style-4">
                  <div className="grid-4-img color-bg-9 mb-20">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/img.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <Link href="#">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <p className="text-body-text color-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    interdum ullamcorper sed pharetra senectus donec nunc.
                    Consequat semper viverra nam libero justo laoreet facilisis
                    magna etiam.
                  </p>
                  <div className="blog-img-user">
                    <div className="img-user img-user-round">
                      <img
                        src="/assets/imgs/page/blog/2/user-1.png"
                        alt="Builder Floor"
                      />
                    </div>
                    <h4 className="text-heading-6 color-gray-900">
                      Jenny Wilson
                    </h4>
                    <p className="text-body-small color-gray-500">
                      August 25, 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                <div className="card-grid-style-4">
                  <div className="grid-4-img color-bg-2 mb-20">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/img-2.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                  <Link href="#">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <p className="text-body-text color-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    interdum ullamcorper sed pharetra senectus donec nunc.
                    Consequat semper viverra nam libero justo laoreet facilisis
                    magna etiam.
                  </p>
                  <div className="blog-img-user">
                    <div className="img-user img-user-round">
                      <img
                        src="/assets/imgs/page/blog/2/user-2.png"
                        alt="Builder Floor"
                      />
                    </div>
                    <h4 className="text-heading-6 color-gray-900">
                      Jenny Wilson
                    </h4>
                    <p className="text-body-small color-gray-500">
                      August 25, 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                <div className="card-list-style-1">
                  <Link href="#">
                    <a className="text-heading-6">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="blog-img-user">
                    <div className="img-user img-user-round">
                      <img
                        src="/assets/imgs/page/blog/2/user-3.png"
                        alt="Builder Floor"
                      />
                    </div>
                    <h4 className="text-body-lead color-gray-500">
                      Jane Cooper
                    </h4>
                    <p className="text-body-small color-gray-500">
                      August 25, 2022
                    </p>
                  </div>
                  <div className="style-1-img color-bg-10">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/img-3.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="card-list-style-1">
                  <Link href="#">
                    <a className="text-heading-6">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="blog-img-user">
                    <div className="img-user img-user-round">
                      <img
                        src="/assets/imgs/page/blog/2/user-4.png"
                        alt="Builder Floor"
                      />
                    </div>
                    <h4 className="text-body-lead color-gray-500">
                      Wade Warren
                    </h4>
                    <p className="text-body-small color-gray-500">
                      August 25, 2022
                    </p>
                  </div>
                  <div className="style-1-img color-bg-2">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/img-4.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="card-list-style-1">
                  <Link href="#">
                    <a className="text-heading-6">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="blog-img-user">
                    <div className="img-user img-user-round">
                      <img
                        src="/assets/imgs/page/blog/2/user-5.png"
                        alt="Builder Floor"
                      />
                    </div>
                    <h4 className="text-body-lead color-gray-500">
                      Jenny Wilson
                    </h4>
                    <p className="text-body-small color-gray-500">
                      August 25, 2022
                    </p>
                  </div>
                  <div className="style-1-img color-bg-5">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/img-5.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="card-list-style-1">
                  <Link href="#">
                    <a className="text-heading-6">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="blog-img-user">
                    <div className="img-user img-user-round">
                      <img
                        src="/assets/imgs/page/blog/2/user-6.png"
                        alt="Builder Floor"
                      />
                    </div>
                    <h4 className="text-body-lead color-gray-500">
                      Robert Fox
                    </h4>
                    <p className="text-body-small color-gray-500">
                      August 25, 2022
                    </p>
                  </div>
                  <div className="style-1-img color-bg-9">
                    <Link href="#">
                      <a>
                        <img
                          src="/assets/imgs/page/shop1/img-6.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-70 shop-bottom-banner">
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
        </section>
      </Layout>
    </>
  );
}

export default ShopFrid1;
