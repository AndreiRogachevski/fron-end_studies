export default function sorting(arr, sortBy) {
  let newArr = arr.sort((a, b) => {
    let sortArr = sortBy.split('.');
    for (let i = 0; i < sortArr.length; i++) {
      a = a[sortArr[i]];
      b = b[sortArr[i]];
    }
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });
  return newArr;
}
