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
        <h2>Click total: {{ clickTotal }} Auto total: {{ autoTotal }}</h2>
      </div>
    </section>

    <section class="row">
      <div v-for="upgrade in clickUpgrades" :key="upgrade.name" class="col-md-6 mb-2">
        <div class="bg-info p-4 rounded shadow">
          <h3 class="text-dark text-center">
            {{ upgrade.name }}
            <button @click="purchaseUpgrade(upgrade)" :disabled="cheese < upgrade.price" class="btn btn-primary">
              <i class="mdi" :class="upgrade.icon"></i>
              Buy Upgrade
            </button>
          </h3>
          <h4 class="text-dark text-center">
            {{ upgrade.price }} cheese | {{ upgrade.quantity }} qty | +{{ upgrade.multiplier }} cheese per click
          </h4>
        </div>
      </div>

      <div v-for="upgrade in autoUpgrades" :key="upgrade.name" class="col-md-6 mb-2">
        <div class="bg-warning p-4 rounded shadow">
          <h3 class="text-dark text-center">
            {{ upgrade.name }}
            <button @click="purchaseUpgrade(upgrade)" :disabled="cheese < upgrade.price" class="btn btn-primary">
              <i class="mdi" :class="upgrade.icon"></i>
              Buy
              Upgrade</button>
          </h3>
          <h4 class="text-dark text-center">
            {{ upgrade.price }} cheese | {{ upgrade.quantity }} qty | +{{ upgrade.multiplier }} cheese per 3 seconds
          </h4>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js'
import { cheeseService } from '../services/CheeseService.js'
import { upgradesService } from '../services/UpgradesService.js'
export default {

  setup() {
    // NOTE private
    // const cheese = ref(0)

    function _collectAuto() {
      upgradesService.collectAuto()
    }

    onMounted(() => {
      setInterval(_collectAuto, 3000)
    })



    return {
      // NOTE public
      // cheese: computed(() => { return AppState.cheese }), // explicit return
      cheese: computed(() => AppState.cheese), // implied return
      clickUpgrades: computed(() => AppState.clickUpgrades),
      autoUpgrades: computed(() => AppState.autoUpgrades),
      clickTotal: computed(() => {
        let clickTotal = upgradesService.generateUpgradeTotal(AppState.clickUpgrades)
        clickTotal++
        return clickTotal
      }),
      autoTotal: computed(() => {
        let autoTotal = upgradesService.generateUpgradeTotal(AppState.autoUpgrades)
        return autoTotal
      }),


      mineCheese() {
        // cheese.value++
        cheeseService.mineCheese()
      },

      purchaseUpgrade(upgradeToPurchase) {
        console.log('purchasing upgrade', upgradeToPurchase);

        upgradesService.purchaseUpgrade(upgradeToPurchase)

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
