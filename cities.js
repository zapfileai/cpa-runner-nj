const newJerseyCities = [
  "Absecon", "Adelphia", "Allamuchy", "Allendale", "Allenhurst",
  "Allentown", "Allenwood", "Almonesson", "Alpine", "Andover",
  "Annandale", "Asbury", "Asbury Park", "Atco", "Atlantic City",
  "Atlantic Highlands", "Audubon", "Augusta", "Avalon", "Avenel",
  "Avon By The Sea", "Baptistown", "Barnegat", "Barnegat Light", "Barrington",
  "Basking Ridge", "Bayonne", "Bayville", "Beach Haven", "Beachwood",
  "Bedminster", "Belford", "Belle Mead", "Belleville", "Bellmawr",
  "Belmar", "Belvidere", "Bergenfield", "Berkeley Heights", "Berlin",
  "Bernardsville", "Beverly", "Birmingham", "Blackwood", "Blairstown",
  "Bloomfield", "Bloomingdale", "Bloomsbury", "Bogota", "Boonton",
  "Bordentown", "Bound Brook", "Bradley Beach", "Branchville", "Brick",
  "Bridgeport", "Bridgeton", "Bridgewater", "Brielle", "Brigantine",
  "Browns Mills", "Budd Lake", "Buena", "Burlington", "Butler",
  "Caldwell", "Califon", "Camden", "Cape May", "Cape May Court House",
  "Carlstadt", "Carteret", "Cedar Grove", "Cedar Knolls", "Chatham",
  "Cherry Hill", "Chester", "Chesterfield", "Clark", "Clarksboro",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newJerseyCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newJerseyCities[i]);
}

module.exports = { batches };
