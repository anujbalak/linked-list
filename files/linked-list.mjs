class LinkedList {
  constructor() {
    this.Head = null;
  }
  append(value) {
    let newNode = new Node(value);
    let current;
    if (this.Head === null) {
      this.Head = newNode;
    } else {
      current = this.Head;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      this.Tail = current.next;
    }
  }

  insertAt(value, index) {
    let newNode = new Node(value);
    let current;
    let currentIndex = 0;
    if (index <= 0 || this.Head === null) {
      newNode.next = this.Head;
      this.Head = newNode;
    } else {
      current = this.Head;
      while (current.next != null) {
        if (currentIndex + 1 === index) {
          newNode.next = current.next;
          current.next = newNode;
        }
        currentIndex += 1;
        current = current.next;
      }
    }
    if (index >= currentIndex) {
      current.next = newNode;
      newNode.next = null;
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    let firstNode;
    if (this.Head === null) {
      this.Head = newNode;
    } else {
      firstNode = this.Head;
      this.Head = newNode;
      newNode.next = firstNode;
    }
  }

  length() {
    let count = 1;
    if (this.Head === null) {
      return "List is empty";
    } else {
      let currentNode = this.Head;
      while (currentNode.next !== null) {
        count += 1;
        currentNode = currentNode.next;
      }
      return count;
    }
  }

  at(index) {
    let indexCount = 0;
    if (this.Head === null) {
      return "List is empty.";
    } else {
      let current = this.Head;
      while (current.next !== null) {
        this.index = indexCount;
        if (this.index === index) {
          return current;
        }
        indexCount += 1;
        current = current.next;
      }
      return Error("Given index is not in range.");
    }
  }

  pop() {
    if (this.Head === null) {
      return "List is empty.";
    } else {
      let current = this.Head;
      while (current.next !== null) {
        current = current.next;
        if (current.next !== null && current.next.next === null) {
          delete current.next;
          current.next = null;
        }
      }
      return;
    }
  }

  removeAt(index) {
    let current = this.Head;
    let prevNode;
    let currentIndex = 0;
    if (index === 0) {
      this.Head = this.Head.next;
      return;
    } else if (index >= this.length() || index < 0) {
      return Error("Index is not in range. use .length property see more.");
    }
    while (currentIndex < this.length()) {
      if (currentIndex + 1 === index) {
        prevNode = current;
      }
      if (currentIndex === index) {
        prevNode.next = current.next;
      }
      currentIndex += 1;
      current = current.next;
    }
  }

  find(value) {
    let index = 0;
    if (this.Head === null) {
      return "List is empty.";
    } else {
      let current = this.Head;
      while (current.next !== null) {
        if (current.value === value) {
          return `Index of ${current.value} is ${index}`;
        }
        current = current.next;
        if (current.next === null && current.value === value) {
          index += 1;
          return `Index of ${current.value} is ${index}`;
        }
        index += 1;
      }
      return Error(`There is no such ${value}.`);
    }
  }

  toString() {
    if (this.Head === null) {
      return "List is empty";
    } else {
      let string = "";
      let current = this.Head;
      while (current.next !== null) {
        string += ` ${current.value} ->`;
        current = current.next;
        if (current.next === null) {
          string += ` ${current.value}`;
        }
      }
      return string;
    }
  }

  contains(query) {
    let current;
    if (this.Head === null) {
      return "List is empty.";
    } else {
      current = this.Head;
      for (let i = 1; i <= this.length(); i++) {
        if (current.value === query) {
          return `Yes, ${current.value} exists.`;
        }
        current = current.next;
      }
      return "No such value exists.";
    }
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

export { LinkedList };
