const friends = ['veena','neethu','litsa'];

localStorage.setItem('friends',JSON.stringify(friends));
const newFriends = JSON.parse(localStorage.getItem('friends'));

console.log(newFriends[0]);