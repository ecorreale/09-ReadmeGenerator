const api = {
  getUser(username) {

  },
  getRepos(userName) {

    const queryUrl = `https: //api.github.com/users/${userName}/repos`;
    choices = [];

    axios.get(queryUrl).then(function (results) {
      results.map(item,index => {
        choices.push(item)
       });

    });
  }
}



module.exports = api;