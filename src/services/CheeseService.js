import { AppState } from "../AppState.js"
import { upgradesService } from "./UpgradesService.js"

// REVIEW not much has changed here...
class CheeseService {
  mineCheese() {
    AppState.cheese++

    const clickTotal = upgradesService.generateUpgradeTotal(AppState.clickUpgrades)

    AppState.cheese += clickTotal
  }


  collectAuto() {
    const autoTotal = upgradesService.generateUpgradeTotal(AppState.autoUpgrades)
    AppState.cheese += autoTotal
  }
}

export const cheeseService = new CheeseService()