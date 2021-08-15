import { Flyweight } from "./Flyweight";
export class FlyweightFactory {
  flyweights: { [key: string]: Flyweight } = <any>{};

  constructor(initialFlyweights: string[][]) {
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    }
  }

  getKey(state: string[]): string {
    return state.join("_");
  }

  getFlyweight(sharadState: string[]) {
    const key = this.getKey(sharadState);

    if (!(key in this.flyweights)) {
      this.flyweights[key] = new Flyweight(sharadState);
      return `FlyweightFactory: n'est pas trouver creation d'un`;
    } else {
      console.log(`FlyweightFactory réutilisation du flyweith existant`);
      return this.flyweights[key];
    }
  }

  listFlyweight() {
    const count = Object.keys(this.flyweights).length
    return `le FlyweightFactory à ${count} flyweight`
  }
}
