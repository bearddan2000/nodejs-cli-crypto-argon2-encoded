const argon2 = require("argon2")
let original = 'myPassword';
let test = "somePassword";

let main = async () => {
  try {
    const hash = await argon2.hash(original);
    console.log("Password: %s hashed", original);
    try {
      console.log("Compare password %s to %s", test, original);
      if (await argon2.verify(hash, test)) {
        // password match
        console.log("Match: true");
      } else {
        // password did not match
        console.log("Match: false");
      }
    } catch (firstCompareErr) {}
    try {
      console.log("Compare password %s to %s", original, original);
      if (await argon2.verify(hash, original)) {
        // password match
        console.log("Match: true");
      } else {
        // password did not match
        console.log("Match: false");
      }
    } catch (secondCompareErr) {}
  } catch (hashErr) {}
}

main();
