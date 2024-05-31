<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue'
</script>
<template>
  <form action="" class="filter-form">
    <div class="filter-form__input-container">
      <v-select
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="solo"
        value="Italy"
      ></v-select>
      <div class="vertical-line"></div>
      <v-select
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="solo"
        value="Italy"
      ></v-select>
      <div class="vertical-line"></div>
      <v-select
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="solo"
        value="Italy"
      ></v-select>
      <div class="vertical-line"></div>
      <v-select
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="solo"
        value="Italy"
      ></v-select>
    </div>
    <button class="filter-btn">
      <span class="filter-btn__text">Search</span>
      <SearchIcon />
    </button>
  </form>
</template>

<style scoped>
.container {
  width: 100%;
}
.filter-form {
  width: 70%;
  margin-top: 7.5rem;
  display: flex;
  padding: 0.625rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.625rem;
  border-bottom: 5px solid #c9bdab;
  background: #ffffff;
  box-shadow: 0px 20px 0px 0px rgba(24, 29, 36, 0.72);
}

.filter-form__input-container {
  display: flex;
  align-items: stretch;
  gap: 0.625rem;
  flex: 1 0 0;
}
.vertical-line {
  width: 0.0625rem;
  height: 4.5rem;
  background: #dfe3e7;
}
.filter-btn {
  display: flex;
  padding: 0.9375rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 0rem 0.625rem 0.625rem 0.625rem;
  background: var(--Primary-Gold-Dark, #5b656f);
}
.filter-btn__text {
  color: #ffffff;
  font-family: 'Raleway', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
  letter-spacing: 0.0625rem;
}
</style>
