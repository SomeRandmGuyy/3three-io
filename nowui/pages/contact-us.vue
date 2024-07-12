<template>
  <div class="wrapper contact-page">
      <div class="page-header page-header-small rellax-header">
          <div class="page-header-image" style="background-image: url('img/bg45.jpg')"></div>
      </div>
      <div class="main">
          <div class="contact-content">
              <div class="container">
                  <div class="row">
                      <div class="col-md-5 ml-auto mr-auto">
                          <h2 class="title">Send us a message</h2>
                          <p class="description">You can contact us with anything related to our Products. We'll get in touch with you as soon as possible.<br><br></p>
                          <form role="form" id="contact-form" method="post">
                              <label>Your name</label>
                              <fg-input placeholder="Your Name..." v-model="form.firstName" addon-left-icon="now-ui-icons users_circle-08"></fg-input>
                              <label>Email address</label>
                              <fg-input placeholder="Email Here..." v-model="form.email" addon-left-icon="now-ui-icons users_circle-08"></fg-input>
                              <label>Phone</label>
                              <fg-input placeholder="Number Here..." v-model="form.phone" addon-left-icon="now-ui-icons tech_mobile"></fg-input>
                              <div class="form-group">
                                  <label>Your message</label>
                                  <textarea name="message" class="form-control" id="message" rows="6"></textarea>
                              </div>
                              <div class="submit text-center">
                                  <n-button type="success" round>Contact Us</n-button>
                              </div>
                          </form>
                      </div>
                      <div class="col-md-5 ml-auto mr-auto">
                          <info-section type="success" class="mt-5" icon="now-ui-icons business_briefcase-24">
                              <h4 class="info-title">Contact us via Instagram</h4>
                              <p>@3three.net.au</p>
                          </info-section>
                          <info-section type="success" icon="now-ui-icons tech_mobile">
                              <h4 class="info-title">Give us a ring</h4>
                              <p>Michael Jordan<br>+61410 971 312<br>Mon - Fri, 8:00-22:00</p>
                          </info-section>
                          <info-section type="success" icon="now-ui-icons business_briefcase-24">
                              <h4 class="info-title">Contact via WAB</h4>
                              <p>WhatsApp Business<br>+61410 971 312<br>Mon - Fri, 8:00-22:00</p>
                          </info-section>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { Button, InfoSection, FormGroupInput } from '@/components';
import initParallax from '@/utils/initParallax';

export default {
name: 'contact',
layout: 'white-nav',
components: {
  InfoSection,
  [Button.name]: Button,
  [FormGroupInput.name]: FormGroupInput,
},
data() {
  return {
    form: {
      firstName: '',
      email: '',
      phone: ''
    }
  };
},
mounted() {
  initParallax();
}
};
</script>

<style>
</style>
