const newJerseyCities = [
  "Manahawkin", "Manasquan", "Manchester Township", "Mantoloking", "Mantua",
  "Manville", "Maple Shade", "Maplewood", "Margate", "Margate City",
  "Marlboro", "Marlton", "Marmora", "Martinsville", "Matawan",
  "Mauricetown", "Mays Landing", "Maywood", "Mcafee", "Medford",
  "Mendham", "Merchantville", "Metuchen", "Mickleton", "Middlesex",
  "Middletown", "Midland Park", "Milford", "Millburn", "Millington",
  "Millstone Township", "Milltown", "Millville", "Mine Hill", "Minotola",
  "Monmouth Beach", "Monmouth Junction", "Monroe Township", "Monroeville", "Montague",
  "Montclair", "Montvale", "Montville", "Moonachie", "Moorestown",
  "Morganville", "Morris Plains", "Morristown", "Mount Arlington", "Mount Ephraim",
  "Mount Freedom", "Mount Holly", "Mount Laurel", "Mount Royal", "Mount Tabor",
  "Mountain Lakes", "Mountainside", "Mullica Hill", "Neptune", "Neshanic Station",
  "Netcong", "New Brunswick", "New Egypt", "New Milford", "New Providence",
  "New Vernon", "Newark", "Newfield", "Newfoundland", "Newton",
  "Normandy Beach", "North Arlington", "North Bergen", "North Brunswick", "Northfield",
  "Northvale", "Norwood", "Nutley", "Oak Ridge", "Oakhurst",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newJerseyCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newJerseyCities[i]);
}

module.exports = { batches };
