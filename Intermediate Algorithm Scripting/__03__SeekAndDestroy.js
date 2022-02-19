function destroyer(arr) {
  const numsToRemove = new Set([...arguments].slice(1));
  return arr.filter(a => !numsToRemove.has(a));
}