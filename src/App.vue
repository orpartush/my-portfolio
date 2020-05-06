<template>
  <div id="app">
    <Navbar :isScrolling="isScrolling" />
    <SocialLinks />
    <HomePage />
    <EmailLink />
  </div>
</template>

<script>
import Navbar from './cmps/navbar';
import HomePage from './views/home-page';
import SocialLinks from './cmps/social-links';
import EmailLink from './cmps/email-link';

export default {
  components: {
    Navbar,
    HomePage,
    SocialLinks,
    EmailLink
  },
    data() {
    return {
      isScrolling: false
    }
  },
  mounted() {
    document.addEventListener('scroll', this.checkPos)
  },
  methods: {
    checkPos() {
      (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
        ? this.isScrolling = true
        : this.isScrolling = false;
    }
  }
}
</script>