axios.get('http://api.github.com/users/thaiscristine')
    .then(function(response) {
        console.log(response.data)
    })
    .catch(function(error) {
        console.log(error)
    })