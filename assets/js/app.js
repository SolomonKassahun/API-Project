var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET','https://ghibliapi.herokuapp.com/films')

//

const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = 'assets/image/logo.png'
const container = document.createElement('div')
container.setAttribute('class','container cont')

app.appendChild(container)
// function getMovies(json){
//     document.querySelector('.director-selector').onload = function(){
//         var directorSelected = document.querySelector('.director-selector')
//         var directorName = directorSelected.options[directorSelected.selectesIndex].innerHTML
    
//         var filterData = JSON.filter(function(element){
//             return element.director == directorName 
//         })
//         getMovies(filterData)
//     }
// }


request.onload = function(){
    var data = JSON.parse(this.response)
    if(request.status >= 200 && request.status <= 400){
        data.forEach(movie => {

            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const title = document.createElement('h1')
            title.setAttribute('id','title')
            title.textContent =`${movie.title}`

            const description = document.createElement('p')
            description.setAttribute('id','description')
            description.textContent = `${movie.description}`

            const director = document.createElement('p')
            director.setAttribute('id','director')
            director.textContent = `Director: ${movie.director}`

            const producer = document.createElement('p')
            producer.setAttribute('id','producer')
            producer.textContent = `Producer: ${movie.producer}`

            const releaseDate = document.createElement('p')
            releaseDate.setAttribute('id','date')
            releaseDate.textContent = `Release Date: ${movie.release_date}`

            container.appendChild(card)
            card.append(title,description,director,producer,releaseDate)
            
        });
    }else{
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `man, it's not working!`
        app.appendChild(errorMessage)
    }
}
request.send()



