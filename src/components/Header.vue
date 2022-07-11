<template>
  <header>
    <p class="title">Adivina las banderas</p>
    <select v-model="currentContinent" @change="newGame()">
      <option v-for="continent in continentsList" :key="continent" :value="continent">
        {{ continent }}
      </option>
    </select>
  </header>
</template>

<script>
import { useFlag } from '@/composables/useFlag'

export default {
  name: 'HeaderGame',
  setup() {
    const { currentContinent, continentsList, newGame } = useFlag()

    return {
      continentsList, currentContinent, newGame
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

header {
  background-color: $background-color;
  border: 1px solid $border-color;
  border-radius: 3px;
  padding: .5rem;
  margin-bottom: Min(5vw, 1.5rem);

  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  justify-content: space-between;
  align-items: baseline;

  .title {
    font-size: Min(5vw, 1.5rem);
    font-variant-caps: small-caps;
    letter-spacing: .05rem;
    color: $color-red;
    text-shadow: 0px 0px 1px rgb(0, 0, 0);
  }

  select {
    padding: .3rem 0;
    font-size: Min(5vw, 1rem);
    color: $color-red;
  }
}
</style>