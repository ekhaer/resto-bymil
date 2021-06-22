<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <OrderTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import OrderTable from '@/components/OrderTable.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    OrderTable
  }
}
</script>
