<template>
  <div class="home">
    <flags />
  </div>
</template>

<script>
// @ is an alias to /src
import Flags from '@/components/FlagsGame.vue'

export default {
  name: 'Home',
  components: {
    Flags
  }
}
</script>
