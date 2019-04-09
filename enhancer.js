module.exports = {
  success,
  fail,
  repair
};

const enhancement = {
  16: "PRI",
  17: "DUO",
  18: "TRI",
  19: "TET",
  20: "PEN"
};

function success(item) {
  if (!item) {
    return null;
  }
  if (item.type !== "armor" && item.type !== "weapon") {
    throw new Error("Type must be armor or weapon!");
  }
  if (item.enhancement < 15) {
    let newNum = item.enhancement + 1;
    return {
      originalName: item.originalName,
      name: `[+${newNum}] ${item.originalName}`,
      type: item.type,
      durability: item.durability,
      enhancement: newNum
    };
  }

  if (item.enhancement >= 15) {
    let newNum = item.enhancement + 1;
    return {
      originalName: item.originalName,
      name: `["${enhancement[newNum]}"] ${item.name}`,
      type: item.type,
      durability: item.durability,
      enhancement: newNum
    };
  }
}

function repair(item) {
  let repairedItem = { ...item };
  repairedItem.durability = 100;
  return repairedItem;
}

function fail(item) {
  if (item.enhancement <= 14 && item.durability < 25) {
    throw new Error("The item cannot be enhanced");
  }
  if (item.enhancement >= 15 && item.durability < 10) {
    throw new Error("The item cannot be enhanced");
  }

  switch (item.enhancement) {
    case 20:
      return {
        ...item,
        enhancement: item.enhancement - 1,
        name: `["TET"] ${item.name}`
      };
    case 19:
      return {
        ...item,
        enhancement: item.enhancement - 1,
        name: `["TRI"] ${item.name}`
      };
    case 18:
      return {
        ...item,
        enhancement: item.enhancement - 1,
        name: `["DUO"] ${item.name}`
      };
    case 17:
      return {
        ...item,
        enhancement: item.enhancement - 1,
        name: `["PRI"] ${item.name}`
      };
    default:
      if (item.enhancement < 14) {
        return {
          ...item,
          durability: item.durability - 5
        };
      }
      if (item.enhancement >= 14) {
        return {
          ...item,
          durability: item.durability - 10
        };
      }
  }
}
