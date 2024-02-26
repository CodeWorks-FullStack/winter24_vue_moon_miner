import { AppState } from "../AppState.js"

class CheeseService {
  mineCheese() {
    AppState.cheese++
  }
}

export const cheeseService = new CheeseService()