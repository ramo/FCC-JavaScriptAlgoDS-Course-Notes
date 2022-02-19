
// method-1
function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  collection.forEach(obj => {
    Object.keys(source).every(key => source[key] === obj[key]) && arr.push(obj);
  });

  // Only change code above this line
  return arr;
}


function whatIsInAName(collection, source) {
  return collection
    .filter(obj => Object.keys(source).every(key => source[key] === obj[key]));
}