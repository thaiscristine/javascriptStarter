
var btn = document.querySelector('#app button')
var input = document.querySelector('#app input')

btn.addEventListener('click', function(){

    axios.get(`http://api.github.com/users/${input.value}/repos`)
        .then(function(response) {

            var repositories = response.data
            var lista = document.querySelector('#app ul')
            lista.innerHTML = '';

            for(repository of repositories){
                var listLiElement = document.createElement('li'); 
                var textElement = document.createTextNode(repository.name); 
                listLiElement.appendChild(textElement)

                
                lista.appendChild(listLiElement)

                // link => html_url   
            }
        })
        .catch(function(error) {
            console.log(error)
    });
})