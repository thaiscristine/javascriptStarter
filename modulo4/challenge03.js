
var btn = document.querySelector('#app button')
var input = document.querySelector('#app input')
var lista = document.querySelector('#app ul')

btn.addEventListener('click', function(){

    var spinner = document.querySelector('.fa-3x')

    if (!this.classList.contains('open')) {
        
        spinner.style.display = 'block';
        
        console.log(spinner)
        this.classList.add('open');
        lista.innerHTML = '';
    }
    
    axios.get(`http://api.github.com/users/${input.value}/repos`)
        .then(function(response) {

            spinner.style.display = 'none';
            btn.classList.remove('open');

            var repositories = response.data
            
            for(repository of repositories){
                var listLiElement = document.createElement('li'); 
                var textElement = document.createTextNode(repository.name); 
                listLiElement.appendChild(textElement)

                lista.appendChild(listLiElement)

                // link => html_url   
            }
        })
        .catch(function(error) {
            
            spinner.style.display = 'none';
            btn.classList.remove('open');
            
            var message = document.createTextNode('Esse usuário não foi encontrado. Tente novamente')
            lista.appendChild(message)
            console.log(error)
        });
})