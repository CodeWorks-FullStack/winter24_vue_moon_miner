import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  cheese: 100,

  /** @type {import('./models/Upgrade.js').Upgrade[]} */
  clickUpgrades: [
    new Upgrade({
      name: 'Pickaxe',
      price: 10,
      multiplier: 1,
      icon: 'mdi-pickaxe'
    }),
    new Upgrade({
      name: 'Drill',
      price: 50,
      multiplier: 8,
      icon: 'mdi-screw-flat-top'
    }),
  ],

  /** @type {import('./models/Upgrade.js').Upgrade[]} */
  autoUpgrades: [
    new Upgrade({
      name: 'Rover',
      price: 100,
      multiplier: 1,
      icon: 'mdi-moped'
    }),
    new Upgrade({
      name: 'Mousetronaut',
      price: 500,
      multiplier: 10,
      icon: 'mdi-rodent'
    }),
  ],
})
