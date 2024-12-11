// Example object with an "add" function
const out = {
  elements: [],
  add(element) {
    this.elements.push(element);
  }
};

// Example method returning an array of fields
const getGroupbyFields = () => {
  return ['field1', 'field2', 'field3'];
};

// Using forEach to add each field to the "out" object
getGroupbyFields().forEach(out.add, out);

console.log(out.elements); // Output: ['field1', 'field2', 'field3']
