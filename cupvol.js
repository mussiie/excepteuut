let skip = false;
const items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig'];

for (const item of items) {
    if (!(skip = !skip)) {
        console.log(item); // This will log 'apple', 'cherry', 'elderberry'
    }
}
