// method-1
function diffArray(arr1, arr2) {
  // In terms of sets we need to find the (A∪B)−(A∩B).
  // (A - (A∩B)) U (B - (A∩B))
  return [
    ...arr1.filter(a => !arr2.includes(a)),
    ...arr2.filter(a => !arr1.includes(a))
  ];
}

// method-2
function diffArray(arr1, arr2) {
  // In terms of sets we need to find the (A∪B)−(A∩B).
  // (A - (A∩B)) U (B - (A∩B))
  const intersection = arr1.filter(a => arr2.includes(a));
  return [...arr1, ...arr2].filter(a => !intersection.includes(a));
}