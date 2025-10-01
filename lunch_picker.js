const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length > 0) {
    const lastItem = arr.pop();
    console.log(`${lastItem} removed from the end of the lunch menu.`);
    return arr;
  } else {
    console.log("No lunches to remove.");
  }
}

function removeFirstLunch(arr) {
  if (arr.length > 0) {
    const firstItem = arr.shift();
    console.log(`${firstItem} removed from the start of the lunch menu.`);
    return arr;
  } else {
    console.log("No lunches to remove.");
  }
}

function getRandomLunch(arr) {
  if (arr.length > 0) {
    let random = arr[Math.floor(Math.random() * arr.length)];
    console.log(`Randomly selected lunch: ${random}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
    console.log("Menu items: " + arr.join(", "));
  } else {
    console.log("The menu is empty.");
  }
}


