<template>
    <div class="wrapper about-page">
      <div class="page-header page-header-small rellax-header">
        <div
          class="page-header-image"
          style="background-image: url('img/bg32.jpg')"
        ></div>
        <div class="content-center">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <h1 class="title">About Us</h1>
              <h4>
                Learn more about 3three.io, what we do, how we support businesses &
                how we can help you.
              </h4>
            </div>
          </div>
        </div>
      </div>
        <div class="features-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">About our business</h2>
                        <h4 class="description">Our services and products meld together like fine wine & cheese. Learn a bit more about what we do and how we support the community with our work. </h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <card type="background" raised color="transparent" style="background-image: url('img/bg24.jpg')">
                            <template slot="info">
                                <div class="icon icon-white">
                                    <i class="now-ui-icons business_bulb-63"></i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">Design</h4>
                                    <p>We design and code beautiful and highly functional websites.</p>
                                    <a href="/web-design" class="ml-3">Explore</a>
                                </div>
                            </template>
                        </card>
                    </div>
                    <div class="col-md-4">
                        <card type="background" raised color="transparent" style="background-image: url('img/bg23.jpg')">
                            <template slot="info">
                                <div class="icon icon-white">
                                    <i class="now-ui-icons business_badge"></i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">Digital Marketing</h4>
                                    <p>We create and curate amazing marketing material and content calendars.</p>
                                    <a href="/digital-marketing">Explore</a>
                                </div>
                            </template>
                        </card>
                    </div>
                    <div class="col-md-4">
                        <card type="background" raised color="transparenr" style="background-image: url('img/bg25.jpg')">
                            <template slot="info">
                                <div class="icon icon-white">
                                    <i class="now-ui-icons location_map-big"></i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">Supplementary services</h4>
                                    <p>We provide services such as VPN's and private clouds for all.</p>
                                    <a href="#/services" class="ml-3">Explore</a>
                                </div>
                            </template>
                        </card>
                    </div>
                </div>
            </div>
        </div>
        <div class="separator-line separator-primary"></div>
        <div class="projects-5">
          <div class="container">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center">
                <h2 class="title">Features & Benefits</h2>
                <h4 class="description">
                  Our products and services are feature filled but explore some of
                  the most captivating and reputable features our catalogue have in common.
                </h4>
                <div class="section-space"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 ml-auto">
                <card
                  type="background"
                  raised
                  class="card-background-product"
                  style="background-image: url('img/project8.jpg')"
                >
                  <h2 class="card-title">Features</h2>
                  <p class="card-description">
                    3three.io is an agency aimed to cater for SMB's in Australia,
                    our product feature list is too long to list but these are some
                    of the most impactful. We have curated a catalogue designed to 
                    provide the most features for the lowest price for businesses.
                  </p>
                  <badge type="neutral">Features</badge>
                </card>
              </div>
              <div class="col-md-5 mr-auto">
                <info-section
                  type="danger"
                  icon="now-ui-icons ui-2_chat-round"
                  title="Premium Support"
                  description="Our support can only be described as premium. Highly trained with enterprise experience."
                />
  
                <info-section
                  type="danger"
                  icon="now-ui-icons business_chart-pie-36"
                  title="Based in Australia"
                  description="Australians and the Australian market have certain quality standards that only a team in Australia can really meet consistently across the board."
                />
  
                <info-section
                  type="danger"
                  icon="now-ui-icons design-2_ruler-pencil"
                  title="Highly Customizable"
                  description="You can buy our catalogue off the shelf and experience no issues but in the off chance you need something more tailored we can support you."
                />
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-5 ml-auto mt-5">
                <info-section
                  type="warning"
                  icon="now-ui-icons users_single-02"
                  title="Support Local Business"
                  description="Our team is located on-site and our business is Australian owned."
                />
  
                <info-section
                  type="warning"
                  icon="now-ui-icons business_chart-bar-32"
                  title="Multiple Avenues of Support"
                  description="Our highly skilled staff provide support but our kb articles are what makes us great."
                />
  
                <info-section
                  type="warning"
                  icon="now-ui-icons arrows-1_refresh-69"
                  title="Product & Service Synergy"
                  description="We sell products & services that work together for you and your business."
                />
              </div>
              <div class="col-md-5 mr-auto">
                <card
                  type="background"
                  raised
                  class="card-background-product"
                  style="background-image: url('img/project9.jpg')"
                >
                  <h2 class="card-title">Benefits</h2>
                  <p class="card-description text-white">
                    We love a good feature list but what truly sets us apart is how we can benefit you.
                    At the end of the day we are all businesses and all businesses need benefits to truly shine.
                    Our catalogue is curated to provide the maximum amount of business benefit without breaking
                    the bank. While our products benefit businesses in ways we haven't listed these are some of
                    the most impactful benefits for you and your customers.
                  </p>
                  <badge type="neutral">Trello</badge>
                </card>
              </div>
            </div>
          </div>
        </div>
        <div class="projects-3" data-background-color="black">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h6 class="category text-muted">Our Methodology</h6>
                        <h2 class="title">The rational behind the business</h2>
                    </div>
                </div>
                <div class="section-story-overview">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="image-container image-left"
                                 style="background-image: url('img/project4.jpg')">
                                <!-- First image on the left side -->
                                <p class="blockquote blockquote-success">"High quality and highly efficient.
                                  We curate our catalogue with only the best enterprise ready gear that not only
                                  serves a function but does so efficiently"
                                </p>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <!-- First image on the right side, above the article -->
                            <div class="image-container image-right"
                                 style="background-image: url('img/project21.jpg')">
                            </div>
                            <h6 class="category text-success">Quality</h6>
                            <h4 class="card-title">Custom code has its benefits</h4>
                            <p>
                                The beauty behind custom coding our catalogue is the quality and
                                the efficiency that quality can provide. We've custom coded Virtual assistants
                                that can integrate into applications but can actually function in a certain way.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="section-story-overview">
                    <div class="row">
                        <div class="col-md-6">
                            <!-- First image on the left side -->
                            <div class="image-container image-left"
                                 style="background-image: url('img/project24.jpg')">
                                <p class="blockquote blockquote-success">"Affordable and easy to maintain. Our catalogue is
                                  designed in such a way that it incentivises businesses to ask questions and learn how to
                                  stand on their own metaphorical two feet. Our bound of support is nearly limitless"
                                </p>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <!-- First image on the right side, above the article -->
                            <div class="image-container image-right"
                                 style="background-image: url('img/project23.jpg')">
                            </div>
                            <h6 class="category text-success">Affordable</h6>
                            <h4 class="card-title">Cheaper is sometimes better</h4>
                            <p>
                                Our prices are based on our low overhead and not low quality. We make everything
                                custom meaning we can provide more businesses more flexibility and are able to
                                operate with a sense of modularity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-office">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-8 ml-auto mr-auto">
                <h2 class="title">Your sucess is our story</h2>
                <h4 class="description">
                  Here are some pictures of our success stories, companies we have
                  been able to help with our products & services. Check out some of our
                  client services to get a better idea of what we do.
                </h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <img
                  class="rounded img-raised"
                  alt="Raised Image"
                  src="img/bg27.jpg"
                />
              </div>
              <div class="col-md-4">
                <img
                  class="rounded img-raised"
                  alt="Raised Image"
                  src="img/bg24.jpg"
                />
              </div>
              <div class="col-md-4">
                <img
                  class="rounded img-raised"
                  alt="Raised Image"
                  src="img/bg28.jpg"
                />
              </div>
              <div class="col-md-6">
                <img
                  class="rounded img-raised"
                  alt="Raised Image"
                  src="img/project6.jpg"
                />
              </div>
              <div class="col-md-6">
                <img
                  class="rounded img-raised"
                  alt="Raised Image"
                  src="img/project14.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import {
    Card,
    Button,
    Badge,
    InfoSection,
    FormGroupInput,
    Checkbox,
  } from "@/components";
  import { Select, Option } from "element-ui";
  import initParallax from "@/utils/initParallax";
  export default {
    name: "about-us",
    layout: 'white-nav',
    components: {
      Card,
      InfoSection,
      Badge,
      [Button.name]: Button,
      [Checkbox.name]: Checkbox,
      [FormGroupInput.name]: FormGroupInput,
      [Select.name]: Select,
      [Option.name]: Option,
    },
    data() {
      return {
        form: {
          firstName: "",
          email: "",
          speciality: "",
        },
      };
    },
    mounted() {
      initParallax();
    },
  };
  </script>
  <style></style>
  