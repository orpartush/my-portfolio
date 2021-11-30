<template>
  <nav
    class="navbar flex space-between align-center"
    :class="{ shadow: this.isScrolling }"
  >
    <a href="#hero" class="logo">OP</a>
    <div :class="{ 'display-el': !isMenuOpen }" class="screen"></div>
    <ul
      :class="{ 'menu-open': isMenuOpen }"
      class="nav-links flex space-evenly align-center"
    >
      <li @click="() => (isMenuOpen = false)">
        <span>01.</span>
        <a href="#about">About</a>
      </li>
      <li @click="() => (isMenuOpen = false)">
        <span>02.</span>
        <a href="#projects">Projects</a>
      </li>
      <li @click="() => (isMenuOpen = false)">
        <span>03.</span>
        <a href="#contact">Contact</a>
      </li>
      <!-- <li @click="() => (isMenuOpen = false)">
                <a
                    class="resume-link"
                    href="https://drive.google.com/file/d/1NuZnJ88tTxF1C19SjgEwwsmS2HNhKnL6/view?usp=sharing"
                    target="_blank"
                    >RESUME</a
                >
            </li> -->
    </ul>
    <tasty-burger-button
      type="emphatic"
      :color="color"
      :active-color="activeColor"
      @toggle="onToggle"
      class="my-hamburger"
    />
  </nav>
</template>

<script>
import { TastyBurgerButton } from 'vue-tasty-burgers'

export default {
  components: {
    TastyBurgerButton
  },
  props: {
    isScrolling: Boolean
  },
  data() {
    return {
      isMenuOpen: false,
      color: '#8892B0',
      activeColor: '#8892B0'
    }
  },
  computed: {
    onScroll() {
      return this.isScrolling
    }
  },
  methods: {
    onToggle() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style></style>
