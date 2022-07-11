<template>
  <div class="flags-board">
    <div :title="country" class="country" v-for="(country, indexRow) of countriesToGuess" :key="indexRow">
      {{ country }}
    </div>
  </div>
</template>

<script>
import { useFlag } from '@/composables/useFlag'

export default {
  setup() {
    const { countriesToGuess } = useFlag()

    return {
      countriesToGuess
    }
  },
}
</script>

<style lang="scss" scoped>
.flags-board {
  display: grid;
  grid-template-columns: repeat(5, minmax(40px, 1fr));
  column-gap: .3rem;
  
  .country {
    line-height: 1.5;
    white-space: nowrap;
    width: 95%;
    font-size: Min(3.6vw, 1rem);
    overflow: hidden;
  }
}
</style>