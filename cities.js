const newJerseyCities = [
  "Westfield", "Westville", "Westwood", "Wharton", "Whippany",
  "Whitehouse", "Whitehouse Station", "Wildwood", "Williamstown", "Willingboro",
  "Windsor", "Wood Ridge", "Woodbine", "Woodbridge", "Woodcliff Lake",
  "Woodstown", "Wrightstown", "Wyckoff",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newJerseyCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newJerseyCities[i]);
}

module.exports = { batches };
