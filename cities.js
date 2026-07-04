const newJerseyCities = [
  "Oakland", "Oaklyn", "Ocean City", "Ocean Grove", "Ocean View",
  "Oceanport", "Ogdensburg", "Old Bridge", "Oldwick", "Oradell",
  "Orange", "Oxford", "Palisades Park", "Palmyra", "Paramus",
  "Park Ridge", "Parlin", "Parsippany", "Passaic", "Paterson",
  "Paulsboro", "Peapack", "Pedricktown", "Pemberton", "Pennington",
  "Penns Grove", "Pennsauken", "Pennsville", "Pequannock", "Perth Amboy",
  "Phillipsburg", "Pine Beach", "Pine Brook", "Piscataway", "Pitman",
  "Pittstown", "Plainfield", "Plainsboro", "Pleasantville", "Pluckemin",
  "Point Pleasant Beach", "Pomona", "Pompton Lakes", "Pompton Plains", "Port Monmouth",
  "Port Murray", "Port Reading", "Port Republic", "Pottersville", "Princeton",
  "Princeton Junction", "Rahway", "Ramsey", "Randolph", "Raritan",
  "Red Bank", "Richland", "Ridgefield", "Ridgefield Park", "Ridgewood",
  "Ringoes", "Ringwood", "Rio Grande", "River Edge", "Riverdale",
  "Riverside", "Riverton", "Robbinsville", "Rochelle Park", "Rockaway",
  "Rocky Hill", "Roebling", "Roseland", "Roselle", "Roselle Park",
  "Rosenhayn", "Rumson", "Runnemede", "Rutherford", "Saddle Brook",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newJerseyCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newJerseyCities[i]);
}

module.exports = { batches };
