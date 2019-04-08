module.exports = {
  success,
  fail,
  repair
}

const item = { 
  name: "Longclaw",
  type: "weapon",
  durability: 100,
  enhancement: 0
}

const enhancement = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "PRI", "DUO", "TRI", "TET", "PEN"
]


function success(item) {
  return item;
}

function fail(item) {
  return item;
}

function repair(item) {
  return item; 
}