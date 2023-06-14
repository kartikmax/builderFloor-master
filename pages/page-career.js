/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Career() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-3">
            <div className="container">
              <div className="text-center">
                <span className="tag-1 bg-6 color-green-900">
                  Success Together
                </span>
                <h1 className="text-display-2 color-gray-900 mt-30">
                  Working with us,
                  <br className="d-lg-block d-none" />
                  the awesome team
                </h1>
                <div className="text-body-lead-large color-gray-500 mt-40">
                  Our focus is always on finding the best people to work with.
                  Our bar
                  <br className="d-lg-block d-none" />
                  is high, but you look ready to take on the challenge.
                </div>
                <div className="mt-50">
                  <Link href="/page-about-3">
                    <a className="btn btn-black icon-arrow-right-white mb-15 mr-20">
                      Join our team
                    </a>
                  </Link>

                  <Link href="/page-faqs-1">
                    <a className="btn btn-default icon-arrow-right color-gray-900 btn-mb mb-15">
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-box mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="box-image">
                  <a
                    className="popup-youtube btn-play-video btn-play-middle"
                    onClick={() => setOpen(true)}
                  ></a>
                  <img
                    className="img-responsive bdrd-16"
                    src="assets/imgs/page/career/img.png"
                    alt="Builder Floor"
                  />
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
          </div>
        </div>
        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                <h2 className="text-heading-1 color-gray-900">
                  Join a Workplace That
                  <br className="d-lg-block d-none" />
                  Gives You More
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Interactively transform magnetic growth strategies whereas
                  prospective "outside the box" thinking.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-5 hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/business-strategy.svg"
                      alt="Builder Floor"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">
                    Design &amp; Vreatives
                  </h3>
                  <p className="text-body-excerpt mt-20">
                    You are always welcome to visit our little den. Professional
                    in teir craft! All properties were super amazing with strong
                    attension to details, comps and overall vibe.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-service-1">
                      <a className="btn btn-default btn-white icon-arrow-right">
                        Learn more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-9 hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/local.svg"
                      alt="Builder Floor"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">Work and travel</h3>
                  <p className="text-body-excerpt mt-20">
                    You are always welcome to visit our little den. Professional
                    in teir craft! All properties were super amazing with strong
                    attension to details, comps and overall vibe.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-service-1">
                      <a className="btn btn-default btn-white icon-arrow-right">
                        Learn more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-2 hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/social.svg"
                      alt="Builder Floor"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">Smart salary</h3>
                  <p className="text-body-excerpt mt-20">
                    You are always welcome to visit our little den. Professional
                    in teir craft! All properties were super amazing with strong
                    attension to details, comps and overall vibe.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-service-1">
                      <a className="btn btn-default btn-white icon-arrow-right">
                        Learn more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  Choose the category
                  <br className="d-lg-block d-none" />
                  where you expert
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  In a professional context it often happens that private or
                  corporate
                  <br className="d-lg-block d-none" />
                  clients order a publication to publish news.
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-40">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Builder Floor"
                      />
                    </span>
                    <h4 className="text-heading-4">Graphic designer</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-active.svg"
                        alt="Builder Floor"
                      />
                    </span>
                    <h4 className="text-heading-4">Web developer</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-retent.svg"
                        alt="Builder Floor"
                      />
                    </span>
                    <h4 className="text-heading-4">Data scientistn</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Builder Floor"
                      />
                    </span>
                    <h4 className="text-heading-4">Technical Support</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-active.svg"
                        alt="Builder Floor"
                      />
                    </span>
                    <h4 className="text-heading-4">Digital Marketing</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-retent.svg"
                        alt="Builder Floor"
                      />
                    </span>
                    <h4 className="text-heading-4">UI/UX designer</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box pt-100 pb-100 mt-100 bg-orange-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-30">
                <span className="tag-1 bg-6 color-gray-900">
                  Built Exclusively For You
                </span>
                <h3 className="text-heading-1 mt-30">
                  Why Our Team Is One Of The Best!
                </h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                  There are countless great reasons to work at our company and
                  we hate to brag, but it’s too hard not to!
                </p>
                <div className="mt-40">
                  <Link href="/page-service-1">
                    <a className="btn btn-default btn-white icon-arrow-right text-body-text">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row" data-masonry='{"percentPosition": true }'>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        "No matter where you go, It's is the coolest, most
                        happening thing around! Not able to tell you how happy I
                        am with it. "
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/homepage2/user-1.png"
                            alt="Builder Floor"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Jane Cooper
                        </h4>
                        <p className="text-body-text-md">
                          Biffco Enterprises Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        "Wow what great service, I love it! It's is the most
                        valuable business resource we have EVER purchased. We
                        can't understand how we've been living without it. I
                        couldn't have asked for more than this."
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/homepage2/user-2.png"
                            alt="Builder Floor"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Wade Warren
                        </h4>
                        <p className="text-body-text-md">Krusty Krab</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        "Your company is truly upstanding and is behind its
                        product 100%. It's the perfect solution for our
                        business. It has really helped our business. Needless to
                        say we are extremely satisfied with the results. "
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/homepage2/user-3.png"
                            alt="Builder Floor"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Leslie Alexander
                        </h4>
                        <p className="text-body-text-md">
                          Biffco Enterprises Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">
                        "It's is both attractive and highly adaptable. It's
                        exactly what I've been looking for. Definitely worth the
                        investment."
                      </p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/homepage2/user-4.png"
                            alt="Builder Floor"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Jenny Wilson
                        </h4>
                        <p className="text-body-text-md">Soylent Corp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container mt-110">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="text-heading-1 mb-10">Latest News</h3>
                <p className="text-body-lead-large color-gray-600">
                  From Our blog and Event fanpage
                </p>
              </div>
              <div className="col-lg-4 text-lg-end text-start pt-30">
                <Link href="/blog-2">
                  <a className="btn btn-black icon-arrow-right-white">
                    View More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="container mt-90">
            <div className="row">
              <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Company</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-1.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Marketing Event</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      How To Blow Through Capital At An Incredible Rate
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-2.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Customer Services</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="grid-4-img color-bg-4">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-3.png"
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
                            placeholder="Enter you mail .."
                          />
                          <button className="btn btn-send" />
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

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="7e90gBu4pas"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}

export default Career;
