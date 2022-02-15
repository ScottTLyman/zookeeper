import { ProxyState } from "../AppState.js";
import { Value } from "../Models/Value.js";
import { Alligator, Bobcat, Cheetah, Dolphin, Elephant, Falcon, Giraffe, Hawk, Iguana, Jaguar, Koala, Lemur, Marmoset, Narwhal, Octopus, Panther, Quail, Raccoon, Sable, Tiger, Urchin, Vicuna, Wallaby, Xeme, Yak, Zebra } from "../Models/Animals.js";

let animal1 = new Alligator('Alfred', 'M', 220, 68, false, true, true)
let animal2 = new Bobcat('Bobby', 'M', 125, 28, false, true, false)
let animal3 = new Cheetah('Cassie', 'F', 165, 38, false, true, false)
let animal4 = new Dolphin('Dolly', 'F', 230, 20, true, false, false)
let animal5 = new Elephant('Dumbo', 'M', 750, 8, true, false, false)
let animal6 = new Falcon('Freddie', 'M', 50, 6, true, true, false)
let animal7 = new Giraffe('Gertie', 'F', 850, 14, false, false, false)
let animal8 = new Hawk('Herbie', 'M', 150, 8, true, true, true)
let animal9 = new Iguana('Izzy', 'F', 20, 18, false, true, true)
let animal10 = new Jaguar('Jenny', 'F', 450, 40, false, true, false)
let animal11 = new Koala('Kenny', 'M', 200, 3, false, true, false)
let animal12 = new Lemur('Leonard', 'M', 35, 7, true, true, false)
let animal13 = new Marmoset('Martin', 'M', 300, 16, false, false, false)
let animal14 = new Narwhal('Nellie', 'F', 790, 20, false, false, false)
let animal15 = new Octopus('Octavius', 'M', 300, 0, false, false, false)
let animal16 = new Panther('Penny', 'F', 550, 37, false, true, false)
let animal17 = new Quail('Quahog', 'M', 3, 4, true, true, false)
let animal18 = new Raccoon('Ralphie', 'M', 65, 13, false, true, false)
let animal19 = new Sable('Sandy', 'M', 475, 6, true, true, false)
let animal20 = new Tiger('Tony', 'M', 900, 39, false, true, true)
let animal21 = new Urchin('Ulysses', 'M', 5, 0, false, false, false)
let animal22 = new Vicuna('Vinnie', 'M', 240, 8, false, true, false)
let animal23 = new Wallaby('Wally', 'M', 195, 16, false, true, false)
let animal24 = new Xeme('Xander', 'M', 8, 10, true, true, false)
let animal25 = new Yak('Yakov', 'M', 675, 7, false, false, false)
let animal26 = new Zebra('Zany', 'F', 400, 10, false, false, false)


let allAnimals = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10, animal11, animal12, animal13, animal14, animal15, animal16, animal17, animal18, animal19, animal20, animal21, animal22, animal23, animal24, animal25, animal26]

class ValuesService {
  sayHelloToAnimals() {
    let template = ''
    allAnimals.forEach(a => a.hello())
    allAnimals.forEach(a => template += a.animalTemplate)
  }
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}

export const valuesService = new ValuesService();

