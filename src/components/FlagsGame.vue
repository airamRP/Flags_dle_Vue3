.<template>
  <div class="container">
    
    <header-game />
    <div class="board">
      <names-list />
      <flags-board />
    </div>
    <controls />
    <flags-list />

    <Teleport to="#app">
      <modal-info :info="showModalInfo" />
    </Teleport>

  </div>
</template>

<script>
import HeaderGame from '@/components/Header.vue'
import NamesList from '@/components/NamesList.vue'
import FlagsList from '@/components/FlagsLIst.vue'
import FlagsBoard from '@/components/FlagsBoard.vue'
import Controls from '@/components/Controls.vue'
import ModalInfo from '@/components/ModalInfo.vue'

import { useFlag } from '@/composables/useFlag'

import { onMounted } from '@vue/runtime-core'

export default {
  name: 'FlagsGame',
  components: {
    HeaderGame, FlagsList, FlagsBoard, Controls, NamesList, ModalInfo
  },
  setup() {
    const { newGame, showModalInfo } = useFlag()

    onMounted(() => newGame())

    return {
      showModalInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem 0;
}
.board {
  overflow-X: auto;
}
</style>