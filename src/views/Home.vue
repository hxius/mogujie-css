<template>
  <div class="home">
    <div class="home-header">
      CSS 架构
      <input type="text" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted } from 'vue'

import { getUsers } from '@/apis'

export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      getUsers().then(res => {
        console.log('res', res)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  @include box-center;
  height: 200px;
}
</style>
