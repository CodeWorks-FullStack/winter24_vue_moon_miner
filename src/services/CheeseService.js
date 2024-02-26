import { AppState } from "../AppState.js"
import { upgradesService } from "./UpgradesService.js"

class CheeseService {
  mineCheese() {
    AppState.cheese++

    const clickTotal = upgradesService.generateUpgradeTotal(AppState.clickUpgrades)

    AppState.cheese += clickTotal
  }
}

export const cheeseService = new CheeseService()