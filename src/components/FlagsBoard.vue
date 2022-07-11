<template>
  <div class="flags-board">
    <div class="rows" v-for="(row, indexRow) of board" :key="indexRow">
      <div class="flags" v-for="(col, indexCol) in row" :key="indexCol">
        <img :class="getStyleLetter(indexRow, indexCol)" :src="getUrl(col)" alt="Flag">
      </div>
    </div>
  </div>
</template>

<script>

import { useFlag } from '@/composables/useFlag'

export default {
  setup() {
    const { board, getUrl, getStyleLetter } = useFlag()

    return {
      board, getUrl, getStyleLetter
    }
  },
}

</script>

<style lang="scss" scoped>
 @import "@/assets/styles/_variables.scss";

.rows {
  display: grid;
  grid-template-columns: repeat(5, minmax(40px, 1fr));
  gap: .2rem;
  margin-bottom: .2rem;
}

.flags {
  img {
    display: block;
    object-fit: cover;
    max-width: 100%;
  }
}

.empty {
  border: 1px solid $gray-medium;
}

.pending {
  border: 1px solid rgb(0,0,0);
}

.error {
  opacity: .2;
  border: 1px solid transparent;
}

.present {
  outline: 5px ridge $color-present;
  outline-offset: -4px;
  border: 1px solid transparent;
}

.success {
  outline: 5px ridge $color-success;
  outline-offset: -4px;
  border: 1px solid transparent;
}
</style>