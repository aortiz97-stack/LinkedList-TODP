const Node = (passedValue) => {
  const value = passedValue;
  const nextNode = null;

  return { value, nextNode };
};

const LinkedList = () => {
  let head = null;
  let tail = null;

  const getHead = () => head;
  const setHead = (newHead) => {
    head = newHead;
  };

  const getTail = () => tail;
  const setTail = (newTail) => {
    tail = newTail;
  };

  const initializeLinkedList = (node) => {
    setHead(node);
    setTail(node);
  };

  const append = (value) => {
    const newNode = Node(value);
    if (head === null && tail === null) {
      initializeLinkedList(newNode);
    } else {
      tail.nextNode = newNode;
      setTail(newNode);
    }
  };

  const prepend = (value) => {
    const newNode = Node(value);
    if (head === null && tail === null) {
      initializeLinkedList(newNode);
    } else {
      newNode.nextNode = head;
      setHead(newNode);
    }
  };
  return {
    getHead, getTail, setHead, setTail, append, prepend,
  };
};

const linkedList = LinkedList();
linkedList.prepend('what up');

linkedList.prepend('ooo snap');
console.log(linkedList.getTail());
