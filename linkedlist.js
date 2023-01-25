const Node = (passedValue) => {
  const value = passedValue;
  const nextNode = null;

  return { value, nextNode };
};

const LinkedList = () => {
  let localHead = null;
  let localTail = null;

  const head = () => localHead;
  const setHead = (newHead) => {
    localHead = newHead;
  };

  const tail = () => localTail;
  const setTail = (newTail) => {
    localTail = newTail;
  };

  const initializeLinkedList = (node) => {
    setHead(node);
    setTail(node);
  };

  const append = (value) => {
    const newNode = Node(value);
    if (head() === null && tail() === null) {
      initializeLinkedList(newNode);
    } else {
      tail().nextNode = newNode;
      setTail(newNode);
    }
  };

  const prepend = (value) => {
    const newNode = Node(value);
    if (head() === null && tail() === null) {
      initializeLinkedList(newNode);
    } else {
      newNode.nextNode = head();
      setHead(newNode);
    }
  };

  const size = () => {
    let currNode = head();
    let count = 0;
    while (currNode !== null) {
      count += 1;
      currNode = currNode.nextNode;
    }
    return count;
  };
  const at = (index) => {
    if (index === 0) {
      return head();
    } if (index === size() - 1) {
      return tail();
    } if (index < 0 || index > size() - 1) {
      throw new Error('Invalid index');
    }
    let currNode = head();
    let currIdx = 0;
    while (currIdx !== index) {
      currNode = currNode.nextNode;
      currIdx += 1;
    }
    return currNode;
  };

  const contains = (value) => {
    let currNode = head();
    while (currNode !== null) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.nextNode;
    }
    return false;
  };

  const find = (value) => {
    let currNode = head();
    let idx = 0;
    while (currNode !== null) {
      if (currNode.value === value) {
        return idx;
      }
      currNode = currNode.nextNode;
      idx += 1;
    }
    throw (new Error('Value is not in linkedlist'));
  };

  const pop = () => {
    if (tail() !== null) {
      const lastIndex = size() - 1;
      const beforeTailNode = at(lastIndex - 1);
      beforeTailNode.nextNode = null;
      setTail(beforeTailNode);
    }
  };

  const toString = () => {
    let str = '';
    let currNode = head();

    while (currNode !== null) {
      str += `( ${currNode.value} ) -> `;
      currNode = currNode.nextNode;
      if (currNode === null) {
        str += 'null';
      }
    }
    return str;
  };

  const insertAt = (value, index) => {
    const listLength = size();
    if (index < 0 || index > listLength) {
      throw (new Error('Invalid index'));
    } else if (index === 0) {
      prepend(value);
    } else if (index === listLength) {
      append(value);
    } else {
      const newNode = Node(value);

      const beforeNode = at(index - 1);
      console.log(`BEFORE NODE: ${beforeNode}`);
      const afterNode = at(index);

      beforeNode.nextNode = newNode;
      newNode.nextNode = afterNode;
    }
  };

  const removeAt = (index) => {
    const length = size();
    if (index < 0 || index > length - 1) {
      throw (new Error('Invalid index'));
    } else if (index === length - 1) {
      pop();
    } else if (index === 0) {
      const oldHead = head();
      setHead(oldHead.nextNode);
      oldHead.nextNode = null;
    } else {
      const toRemoveNode = at(index);
      const beforeRemoveNode = at(index - 1);

      beforeRemoveNode.nextNode = toRemoveNode.nextNode;
      toRemoveNode.nextNode = null;
    }
  };
  return {
    head, tail, append, prepend, size, at, contains, find, pop, toString, insertAt, removeAt,
  };
};

const linkedList = LinkedList();
linkedList.prepend('1');

linkedList.prepend('0');

linkedList.append('2');
linkedList.insertAt('insertedNode', 0);

//linkedList.removeAt(1);

console.log(linkedList.toString());
