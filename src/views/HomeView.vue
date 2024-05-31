<script setup>
// import '@/assets/hero_bg-image.png'
import TheFooter from '@/components/TheFooter.vue'
import TheNavbar from '@/components/TheNavbar.vue'
import HomeFiltersForm from '@/components/HomeFiltersForm.vue'
</script>

<template>
  <header class="header">
    <TheNavbar />

    <div class="hero">
      <div class="ellipse"></div>
      <h1 class="hero__heading">Be our Guest</h1>
      <div class="hero__paragraph-frame">
        <p class="hero__paragraph">LIVE like a king in our best houses</p>
      </div>
      <HomeFiltersForm />
    </div>
  </header>
  <main>
    <h1>Welcome to the Homepage</h1>
  </main>
  <TheFooter />
</template>

<style scoped>
.header {
  border-radius: 0rem 0rem 9.375rem 0rem;
  background:
    linear-gradient(0deg, rgba(28, 33, 43, 0.1) 0%, rgba(28, 33, 43, 0.1) 100%),
    url(<path-to-image>) lightgray -0.208px -88px / 100.23% 124.026% no-repeat;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: url('../assets/hero_bg-image.png');
  background-size: cover;
}
.ellipse {
  position: absolute;
  top: 0%;
  border-radius: 63.013rem;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(18, 38, 52, 0.4) 0%,
    rgba(18, 38, 52, 0) 100%
  );
  width: 63.013rem;
  height: 26.31569rem;
  transform: rotate(-13.943deg);
  flex-shrink: 0;
}
.hero {
  position: relative;
  padding-block: 5rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.hero__heading {
  color: #ffffff;
  text-align: center;
  text-shadow: 0px 4.977px 49.771px rgba(0, 0, 0, 0.35);
  font-family: 'Rufina', serif;
  font-size: 5.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 6.25rem; /* 113.636% */
  letter-spacing: -0.0625rem;
  text-transform: uppercase;
}
.hero__paragraph-frame {
  border-radius: 0rem 0.3125rem 0.3125rem 0.3125rem;
  background: rgba(255, 255, 255, 0.94);
  display: flex;
  padding: 0.62213rem 1.86644rem;
  justify-content: center;
  align-items: center;
  gap: 0.77769rem;
}
.hero__paragraph {
  color: #c9bdab;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 1.55531rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.18663rem;
  text-transform: uppercase;
}
</style>
