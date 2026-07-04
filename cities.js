const newJerseyCities = [
  "Saddle River", "Salem", "Sayreville", "Scotch Plains", "Sea Girt",
  "Sea Isle City", "Seaside Heights", "Seaside Park", "Secaucus", "Sewaren",
  "Sewell", "Short Hills", "Shrewsbury", "Sicklerville", "Skillman",
  "Somerdale", "Somers Point", "Somerset", "Somerville", "South Amboy",
  "South Bound Brook", "South Orange", "South Plainfield", "South River", "Sparta",
  "Spotswood", "Spring Lake", "Springfield", "Stanhope", "Stanton",
  "Stewartsville", "Stirling", "Stockholm", "Stockton", "Stone Harbor",
  "Stratford", "Succasunna", "Summit", "Sussex", "Swedesboro",
  "Teaneck", "Tenafly", "Test", "Teterboro", "Thorofare",
  "Three Bridges", "Titusville", "Toms River", "Totowa", "Towaco",
  "Trenton", "Tuckerton", "Union", "Union City", "United States",
  "Vauxhall", "Ventnor City", "Vernon", "Verona", "Vincentown",
  "Vineland", "Voorhees", "Waldwick", "Wallington", "Wanaque",
  "Waretown", "Warren", "Washington", "Washington Township", "Watchung",
  "Waterford Works", "Wayne", "Weehawken", "Wenonah", "West Berlin",
  "West Creek", "West Long Branch", "West Milford", "West New York", "West Orange",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newJerseyCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newJerseyCities[i]);
}

module.exports = { batches };
