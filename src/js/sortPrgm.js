const users = [
  { firstName: "anand", lastName: "raikar" },
  { firstName: "anand", lastName: "haikar" },
];
function sortPrgm(users) {
  return users.sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  });
}

console.log(sortPrgm(users));
