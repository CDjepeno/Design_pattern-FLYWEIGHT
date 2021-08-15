export class Flyweight {
  sharedState: any;

  constructor(newSharedState: any) {
    this.sharedState = newSharedState
  } 

  operation(uniqueState: string) {
    const s = JSON.stringify(this.sharedState)
    const u = JSON.stringify(uniqueState)

    return `Flyweight: affichage partagé (${s}) et le seul état (${u})`
  }

  

}