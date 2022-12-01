export default function sort(element) {
  if (sort.propertyName === sortBy) {
    sort.order = !sort.order;
  } else {
    sort.order = true;
  }
  sort.propertyName = sortBy;
  showUsers.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    } else if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 0;
  });
  if (!sort.order) {
    showUsers = showUsers.reverse();
  }
}