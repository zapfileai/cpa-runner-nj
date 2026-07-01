const newJerseyCities = [
  "Clayton", "Clementon", "Cliffside Park", "Cliffwood", "Clifton",
  "Clinton", "Closter", "Collingswood", "Cologne", "Colonia",
  "Colts Neck", "Columbus", "Convent Station", "Cranbury", "Cranford",
  "Cream Ridge", "Cresskill", "Dayton", "Deepwater", "Demarest",
  "Denville", "Dorothy", "Dover", "Dumont", "Dunellen",
  "East Brunswick", "East Hanover", "East Orange", "East Rutherford", "Eatontown",
  "Edgewater", "Edison", "Egg Harbor City", "Egg Harbor Township", "Elizabeth",
  "Elizabethport", "Elmer", "Elmwood Park", "Emerson", "Englewood",
  "Englewood Cliffs", "Englishtown", "Essex Fells", "Fair Haven", "Fair Lawn",
  "Fairfield", "Fairview", "Fanwood", "Far Hills", "Farmingdale",
  "Flagtown", "Flanders", "Flemington", "Florence", "Florham Park",
  "Fords", "Forked River", "Fort Lee", "Fort Monmouth", "Franklin",
  "Franklin Lakes", "Franklin Park", "Franklinville", "Freehold", "Frenchtown",
  "Garfield", "Garwood", "Gibbsboro", "Gibbstown", "Gillette",
  "Gladstone", "Glassboro", "Glen Gardner", "Glen Ridge", "Glen Rock",
  "Glendora", "Gloucester City", "Great Meadows", "Green Village", "Hackensack",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newJerseyCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newJerseyCities[i]);
}

module.exports = { batches };
