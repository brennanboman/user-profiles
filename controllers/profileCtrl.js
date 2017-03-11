var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

var matchingFriends = [];

module.exports = {
  getFriendsProfiles: function(){
    for (var i = 0; i < users.length; i++) {
      for (var j = 0; i < profiles.length; i++) {
        if (users[i] === profiles[j]) {
          matchingFriends.push(users[i]);
          console.log(matchingFriends)
          res.send({
            currentUser: req.session.current,
            friends: matchingFriends
          })
        }
      }
    }
  }
}
