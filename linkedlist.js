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

  const append = (value) => {
    const newNode = Node(value);
    if (head === null && tail === null) {
      setHead(newNode);
      setTail(newNode);
    } else {
      tail.nextNode = newNode;
      setTail(newNode);
    }
  };
  return {
    getHead, getTail, setHead, setTail, append,
  };
};

const linkedList = LinkedList();
linkedList.append('what up');

linkedList.append('ooo snap');
console.log(linkedList.getHead());
