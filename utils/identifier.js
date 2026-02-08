const { customAlphabet } = require('nanoid');

// Excludes ambiguous characters: 0/O and 1/I
const uidAlphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
// Cache NanoID generators by length
const uidGenerators = new Map();
// Lazily creates and caches a NanoID generator per UID size
const getUidGenerator = (size) => {
  if (!uidGenerators.has(size)) {
    uidGenerators.set(size, customAlphabet(uidAlphabet, size));
  }
  return uidGenerators.get(size);
};

const identifier = {
  uid(size = 21) {
    const uidGenerator = getUidGenerator(size);
    return uidGenerator();
  }
};

module.exports = identifier;
