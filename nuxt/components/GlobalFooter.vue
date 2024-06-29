<template>
  <footer class="footer footer-big">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-md-4">
            <div class="column">
              <img class="logo" src="https://app.creative-tim.com/argon_placeholder/brand/blue.png" alt="">
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="column">
              <h4 class="mt-3">Account</h4>
              <ul>
                <li><NuxtLink to="/login">Login</NuxtLink></li>
                <li><NuxtLink to="/register">Register</NuxtLink></li>
                <li><NuxtLink to="/forgot-password">Forgot Password</NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="column">
              <h4 class="mt-3">Product</h4>
              <ul>
                <li><NuxtLink to="/shop">Shop</NuxtLink></li>
                <li><NuxtLink to="/services">Services</NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="column">
              <h4 class="mt-3">Resources</h4>
              <ul>
                <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
                <li><NuxtLink to="/about">About Us</NuxtLink></li>
                <li><NuxtLink to="/help-center">Help Center</NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="column">
              <h4 class="mt-3">Contact</h4>
              <ul>
                <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                <li><NuxtLink to="/our-links">Our Links</NuxtLink></li>
              </ul>
              <div class="btn-wrapper profile text-left mt-3">
                <a class="btn btn-sm" target="_blank" href="https://twitter.com/CreativeTim" data-toggle="tooltip" data-original-title="Follow us"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-sm" target="_blank" href="https://www.facebook.com/CreativeTim" data-toggle="tooltip" data-original-title="Like us"><i class="fab fa-facebook-square"></i></a>
                <a class="btn btn-sm" target="_blank" href="https://www.slack.com" data-toggle="tooltip" data-original-title="Follow us"><i class="fab fa-slack"></i></a>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-9">
            <div class="column">
              <nav>
                <ul>
                  <li class="d-inline-block"><NuxtLink class="nav-link" to="/">3three.io</NuxtLink></li>
                  <li class="d-inline-block"><NuxtLink class="nav-link" to="/terms-conditions">Terms & Conditions</NuxtLink></li>
                  <li class="d-inline-block"><NuxtLink class="nav-link" to="/privacy-policy">Privacy Policy</NuxtLink></li>
                  <li class="d-inline-block"><NuxtLink class="nav-link" to="/legal-notice" target="_blank">Legal Notice</NuxtLink></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-md-3">
            <div class="dropdown">
              <span>Language:</span>
              <div class="btn btn-link text-primary" href="javascript:;" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ni ni-chat-round"></i>
                <span>English</span>
              </div>
              <div class="dropdown-menu" x-placement="bottom-start">
                <a class="dropdown-item" href="javascript:;">Deutch</a>
                <a class="dropdown-item active" href="javascript:;">English</a>
                <a class="dropdown-item" href="javascript:;">Español</a>
                <a class="dropdown-item" href="javascript:;">Français</a>
                <a class="dropdown-item" href="javascript:;">Italiano</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="footer-description">
              Mastercard is a registered trademark and the circles design is a trademark of Mastercard International Incorporated.
              The Spendesk Prepaid Card/This card is issued by Transact Payments Limited pursuant to licence by Mastercard International Incorporated.
              The Spendesk accounts are issued by Transact Payments Limited.
              Transact Payments Limited is authorised and regulated by the Gibraltar Financial Services Commission.
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "GlobalFooter"
}
</script>

<style scoped>
/* Add your styles here */
</style>
