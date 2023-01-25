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
      console.log(`currNode: ${currNode.value}`);
      count += 1;
      currNode = currNode.nextNode;
    }
    return count;
  };
  return {
    head, tail, append, prepend, size,
  };
};

const linkedList = LinkedList();
linkedList.prepend('what up');

linkedList.prepend('ooo snap');
console.log(`prepended next: ${linkedList.head().nextNode.value}`);
console.log(linkedList.size());
