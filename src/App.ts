import { FlyweightFactory } from './FlyweightFactory';
export class App {
  static main1() {
    const factory = new FlyweightFactory([
      ["Chevrolet", "Camaro2018", "pink"],
      ["Mercedes Benz", "C300", "black"],
      ["Mercedes Benz", "C500", "red"],
      ["BMW", "M5", "red"],
      ["BMW", "X6", "white"],
    ]);
    return factory.listFlyweight();
  }
}
