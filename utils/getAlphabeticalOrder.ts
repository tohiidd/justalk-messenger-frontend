export function getAlphabeticalOrder(arr: any[]) {
  return Object.entries(
    arr
      .sort((a, b) => {
        const userA = a.name || a.username;
        const userB = b.name || b.username;

        return userA.localeCompare(userB);
      })
      .reduce((obj, user) => {
        const name = user.name || user.username;
        const c = name[0].toLowerCase();
        !obj[c] ? (obj[c] = [user]) : obj[c].push(user);
        return obj;
      }, {})
  );
}
