<template>
  <div class="flags-list">
    <div class="flags" v-for="(country, index) of flagsList" :key="index">
      <img :src="getUrl(country)" alt="Flag" @click="sendFlag(country)">
    </div>
  </div>
</template>

<script>

import { useFlag } from '@/composables/useFlag'

export default {
  setup() {
    const { flagsList, getUrl, sendFlag } = useFlag()

    return {
      flagsList, getUrl, sendFlag
    }
  },
}

</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.flags-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
  gap: .2rem;
}

.flags {
  border: 2px solid $gray-dark;
  transition: .3s;

  &:hover {
    border: 2px solid #fff;
    transition: .3s;
  }

  img {
    display: block;
    object-fit: cover;
    max-width: 100%;
  }
}
</style>