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
  return {
    head, tail, append, prepend, size, at,
  };
};

const linkedList = LinkedList();
linkedList.prepend('1');

linkedList.prepend('0');

linkedList.append('2');
console.log(linkedList.at(2));
