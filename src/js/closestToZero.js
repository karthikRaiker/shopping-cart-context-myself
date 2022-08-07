function closestToZero(arr) {
  let closest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (closest === 0) {
      closest = arr[i];
    } else if (arr[i] < 0 && -arr[i] < Math.abs(closest)) {
      closest = arr[i];
    } else if (arr[i] > 0 && arr[i] < Math.abs(closest)) {
      closest = arr[i];
    }
  }
  return closest;
}
console.log(closestToZero([10, 1, 6, -1, 5, -5]));
