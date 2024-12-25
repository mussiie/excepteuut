// Example object structure
const item = {
  mark: {
    marktype: 'group',
    group: { /* group object */ }
  }
};

// Evaluating the assignment
const itemGroup = item
  ? item.mark.marktype === 'group'
    ? item
    : item.mark.group
  : null;

console.log(itemGroup); // Outputs the 'item' object because its marktype is 'group'
