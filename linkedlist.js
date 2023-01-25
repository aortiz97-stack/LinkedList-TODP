const Node = (passedValue) => {
  const value = passedValue;
  const nextNode = null;

  return { value, nextNode };
};

const n1 = Node('hi');
n1.nextNode = Node('bye');
console.log(n1.nextNode.value);
