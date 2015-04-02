// Write your package code here!
this.binarySearch = function binarySearch(arr, target, min, max){
  if(arr.constructor !== Array){
    return 'Input array as first param';
  }

  var mid = parseInt((min + max) / 2,10);
  if(target === arr[mid]) {
    return  mid;
  }
  if(min === max) {
    return -1;
  }
  if(target < arr[mid]) {
    return binarySearch(arr, target, min, mid-1);
  }
  if(target > arr[mid]){
    return binarySearch(arr, target, mid+1, max);
  }
}

this.isSorted = function isSorted(arr){
  var i,curr;
  for(i = 0; i < arr.length-1; i++){
    curr = arr[i];
    if(curr > arr[i+1]){
      return arr.sort();
    }
  }
  return true;
}

this.getElement = function getElement(arr,find) {
  var i;
  for(i = 0; i <= arr.length; i++){
    if(arr[i] === find) {
      return i;
    }
  }
  return -1;
}

this.benchmarkSearch = function benchmarkSearch(func, array, target) {
  var start = process.hrtime();
  func(array, target, 0, array.length);
  var diff = process.hrtime(start);
  return diff[1];
}

this.benchBoth = function benchBoth(array, target) {
  console.log("Naive:", benchmarkSearch(getElement, array, target), "nanaoseconds");
  console.log("Binary:",  benchmarkSearch(binarySearch, array, target), "nanaoseconds");
}
