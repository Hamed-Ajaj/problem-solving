function queryToObject(query) {
  const result = {};

  const pairs = query.split("&");

  for (const pair of pairs) {
    const [rawKey, rawValue] = pair.split("=");
    const keys = rawKey.split(".");
    const value = decodeURIComponent(rawValue);

    let current = result;
    if (!query) return result; // ✅ Handle empty string
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      if (i === keys.length - 1) {
        // Last key, set value
        current[key] = value;
      } else {
        // Intermediate key, create object if not present
        if (!current[key]) {
          current[key] = {};
        }
        current = current[key];
      }
    }
  }

  if (!result) return {};
  return result;
}

let query =
  "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";
console.log(queryToObject(query));
