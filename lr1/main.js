const { execSync } = require('child_process');


function getUserName() {
  try {
   return {name: execSync('git config user.name').toString().trim() };
  } catch (e) {
   console.error('Cant read username!');
   return null;
  }
}

const userName = getUserName();

if (userName) {
  console.log(`Hello, ${userName.name}`);
}
