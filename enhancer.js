module.exports = {
  success,
  fail,
  repair
}

const item = { 
  originalName: "Longclaw",
  name: "Longclaw",
  type: "weapon",
  durability: 100,
  enhancement: 0
}

const enhancement = {
  16: "PRI", 
  17: "DUO", 
  18: "TRI", 
  19: "TET",
  20: "PEN"
}


function success(item) {
  if (!item) { 
    return null
  } 
  if (item.type !== "armor" && item.type !== "weapon") {
    throw new Error("Type must be armor or weapon!")
  }
  if (item.enhancement < 15) {
    let newNum = item.enhancement + 1;
    return {
      originalName: item.originalName,
      name: `[+${newNum}] ${item.originalName}`,
      type: item.type,
      durability: item.durability,
      enhancement: newNum
    }
  }

  if (item.enhancement >= 15) {
    let newNum = item.enhancement + 1;
    return {
      originalName: item.originalName,
      name: `["${enhancement[newNum]}"] ${item.name}`,
      type: item.type,
      durability: item.durability,
      enhancement: newNum      
    }
  }
}

function fail(item) {
  return item;
}

function repair(item) {
  return item; 
}