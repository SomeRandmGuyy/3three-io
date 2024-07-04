<template>
    <navbar position="fixed"
            :transparent="transparent"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto">
      <template slot-scope="{toggle, isToggled}">
        <nuxt-link class="navbar-brand" to="/">3three.io</nuxt-link>
      </template>
      <template slot="navbar-menu">
        <!-- Main Dropdown -->
        <drop-down tag="li" title="Main" class="nav-item">
          <nav-link to="/about-us">About Us</nav-link>
          <nav-link to="/contact-us">Contact Us</nav-link>
          <nav-link to="/products">Products</nav-link>
          <nav-link to="/services">Services</nav-link>
          <nav-link to="/blog">Blog</nav-link>
          <nav-link to="/shop">Shop</nav-link>
        </drop-down>
        <!-- Account Dropdown -->
        <drop-down tag="li" title="Account" class="nav-item">
          <nav-link to="/login">Login</nav-link>
          <nav-link to="/signup">Sign Up</nav-link>
          <nav-link to="my-account">My Account</nav-link>
        </drop-down>
        <!-- Additional Dropdown -->
        <drop-down tag="li" title="Additional" class="nav-item">
          <nav-link to="#">Link 1</nav-link>
          <nav-link to="#">Link 2</nav-link>
          <nav-link to="#">Link 3</nav-link>
          <nav-link to="#">Link 4</nav-link>
          <nav-link to="#">Link 5</nav-link>
          <nav-link to="#">Link 6</nav-link>
        </drop-down>
        <!-- All Dropdown -->
        <drop-down tag="li" title="All" class="nav-item">
          <nav-link to="#">Link 1</nav-link>
          <nav-link to="#">Link 2</nav-link>
          <nav-link to="#">Link 3</nav-link>
          <nav-link to="#">Link 4</nav-link>
          <nav-link to="#">Link 5</nav-link>
          <nav-link to="#">Link 6</nav-link>
          <nav-link to="#">Link 7</nav-link>
          <nav-link to="#">Link 8</nav-link>
          <nav-link to="#">Link 9</nav-link>
          <nav-link to="#">Link 10</nav-link>
          <nav-link to="#">Link 11</nav-link>
          <nav-link to="#">Link 12</nav-link>
          <nav-link to="#">Link 13</nav-link>
          <nav-link to="#">Link 14</nav-link>
          <nav-link to="#">Link 15</nav-link>
        </drop-down>
        <!-- Buy Now Button -->
        <li class="nav-item">
          <nuxt-link class="btn btn-default btn-neutral buy-now-button" to="/buy">Buy Now</nuxt-link>
        </li>
      </template>
    </navbar>
  </template>
  
  <script>
  import { DropDown, Navbar, NavLink } from '@/components';
  import { Popover } from 'element-ui';
  
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number,
    },
    components: {
      DropDown,
      Navbar,
      NavLink,
      [Popover.name]: Popover
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .navbar-brand {
    font-size: 1.2rem; /* Slightly larger than other text */
    font-weight: bold;
  }
  .nav-item .btn {
    margin-left: 20px;
  }
  .nav-item {
    display: flex;
    align-items: center; /* Align dropdown titles with Buy Now button */
  }
  .buy-now-button {
    background-color: #32CD32; /* Light green color */
    opacity: 1; /* Remove opacity to make it more solid */
    color: #ffffff; /* White text color */
  }
  </style>
  