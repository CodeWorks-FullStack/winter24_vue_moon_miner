import { AppState } from "../AppState.js"

// REVIEW not much has changed here...
class UpgradesService {
  purchaseUpgrade(upgradeToPurchase) {
    if (upgradeToPurchase.price > AppState.cheese) {
      return
    }
    upgradeToPurchase.quantity++
    AppState.cheese -= upgradeToPurchase.price
    upgradeToPurchase.price = Math.floor(upgradeToPurchase.price * 1.2)
  }

  generateUpgradeTotal(upgradeArray) {
    let total = 0

    upgradeArray.forEach(upgrade => total += upgrade.quantity * upgrade.multiplier)

    return total
  }

}

export const upgradesService = new UpgradesService()