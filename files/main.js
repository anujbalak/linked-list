import { LinkedList } from "./linked-list.mjs";

let list = new LinkedList();

list.append("Grandfather");
list.append("Father");
list.append("Son");
list.append("Grandson");
list.prepend("Great-Grandfather");
console.log(list.toString());
