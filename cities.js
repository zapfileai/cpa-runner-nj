const newJerseyCities = [
  "Hackettstown", "Haddon Heights", "Haddonfield", "Hainesport", "Haledon",
  "Hamburg", "Hammonton", "Hampton", "Hancocks Bridge", "Harrington Park",
  "Harrison", "Hasbrouck Heights", "Haskell", "Haworth", "Hawthorne",
  "Hazlet", "Helmetta", "Hewitt", "Hibernia", "High Bridge",
  "Highland Lakes", "Highland Park", "Highlands", "Hightstown", "Hillsborough",
  "Hillsdale", "Hillside", "Ho Ho Kus", "Hoboken", "Holmdel",
  "Hopatcong", "Hope", "Hopewell", "Howell", "Irvington",
  "Iselin", "Island Heights", "Jackson", "Jersey City", "Keansburg",
  "Kearny", "Keasbey", "Kendall Park", "Kenilworth", "Kenvil",
  "Keyport", "Kingston", "Lafayette", "Lake Hiawatha", "Lake Hopatcong",
  "Lakewood", "Lambertville", "Landing", "Landisville", "Lanoka Harbor",
  "Lavallette", "Lawnside", "Lawrence Township", "Lebanon", "Ledgewood",
  "Leonardo", "Leonia", "Liberty Corner", "Lincoln Park", "Lincroft",
  "Linden", "Linwood", "Little Falls", "Little Ferry", "Little Silver",
  "Livingston", "Lodi", "Long Branch", "Long Valley", "Longport",
  "Lumberton", "Lyndhurst", "Madison", "Magnolia", "Mahwah",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newJerseyCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newJerseyCities[i]);
}

module.exports = { batches };
