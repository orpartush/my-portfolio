<template>
  <section class="home-page container">
    <Hero />
    <About />
    <Projects />
    <Contact />
    <SocialLinks />
    <EmailLink />
  </section>
</template>

<script>
import Hero from '../cmps/hero';
import About from '../cmps/about';
import Projects from '../cmps/projects';
import Contact from '../cmps/contact';
import SocialLinks from '../cmps/social-links';
import EmailLink from '../cmps/email-link';

export default {
  components: {
    Hero,
    About,
    Projects,
    Contact,
    SocialLinks,
    EmailLink
  }
}
</script>

<style>
</style>