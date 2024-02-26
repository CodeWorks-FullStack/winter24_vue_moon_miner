<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <div class="text-center m-3">
          <h1>Moon Miner</h1>
        </div>
      </div>
      <div class="col-12 text-center">
        <img @click="mineCheese()" class="img-fluid"
          src="https://images.unsplash.com/photo-1479090793912-eb9929f4fdb2?q=80&w=968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="">
        <h2 class="mt-2">Cheese: 🧀{{ cheese }}</h2>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // NOTE private
    const cheese = ref(0)


    return {
      // NOTE public
      cheese,

      mineCheese() {
        cheese.value++
        console.log('cheese object', cheese);
        console.log('cheese value', cheese.value);
      }
    }
  }
}
</script>

<!-- NOTE scoped attribute only applies styles to this vue file (component) -->
<style scoped lang="scss">
img {
  height: 40vh;
  width: 40vh;
  border-radius: 50%;
  object-fit: cover;
}
</style>
