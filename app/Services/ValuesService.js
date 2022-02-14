import { ProxyState } from "../AppState.js";
import { Value } from "../Models/Value.js";
import { Alligator, Bobcat, Cheetah, Dolphin, Elephant } from "../Models/Animals.js";

let animal1 = new Alligator('Alfred', 'M', 220, 68, false, true, true)
let animal2 = new Bobcat('Bobby', 'M', 125, 28, false, true, false)
let animal3 = new Cheetah('Cassie', 'F', 165, 38, false, true, false)
let animal4 = new Dolphin('Dolly', 'F', 230, 20, true, false, false)
let animal5 = new Elephant('Dumbo', 'M', 750, 8, true, false, false)


let allAnimals = [animal1, animal2, animal3, animal4, animal5]

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

