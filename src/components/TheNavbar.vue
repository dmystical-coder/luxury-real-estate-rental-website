<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <h1 class="navbar__heading">Luxury RENTALS</h1>
    </div>

    <ul class="navbar__menu menu">
      <li class="menu__item"><a class="menu__link" href="/">Villas</a></li>
      <li class="menu__item"><a class="menu__link" href="/">About us</a></li>
      <li class="menu__item"><a class="menu__link" href="/">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background: rgba(3, 3, 3, 0.2);
  display: flex;
  padding: 1rem 10rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}
.navbar__heading {
  color: #f5f3f1;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 109.091% */
  letter-spacing: 0.375rem;
  text-transform: uppercase;
}
.navbar__menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
}
.menu__item {
  display: flex;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
}
.menu__link {
  color: #ffffff;
  text-align: center;
  font-family: 'Rufina', serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
}
</style>
