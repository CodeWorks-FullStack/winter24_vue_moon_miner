export class Upgrade {
  constructor (data) {
    this.name = data.name
    this.price = data.price
    this.quantity = 0
    this.multiplier = data.multiplier
    this.icon = data.icon
  }
}