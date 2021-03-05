// const filmPic = document.querySelector('.film')
// const title = document.querySelector('.title')
// const description = document.querySelector('.description')
// const director = document.querySelector('.director')
// const producer = document.querySelector('.producer')
// const releaseDate = document.querySelector('.rleaseDate')

// //const carouselInner = document.querySelector('.carousel-inner');
// document.addEventListener('DOMContentLoaded' , ()=>{

//     showfilmInfo();
//     // displayImages();

// });

// UI Vars 
//const postDiv3 = document.getElementById('thePosts');

//Load Every thing ....
// document.addEventListener("DOMContentLoaded", () => {
//     //load_fromPlaceHolder();
//     loadDataNew();
// });


//load a single customer function 
// function aboutMovie() {

//     //open the request 
//     fetch('https://ghibliapi.herokuapp.com/films')
//         .then(function(res) {
//             return res.json(); //return the JSON Promise
//         })
//         .then(function(posts) {
//             //iterate over each post [100 posts]
//             let output = '';
//             posts.forEach(function(post) {
//                 output += `
        
//                 <div class="item">
//                 <div class="image">
//                     <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
//                 </div>
//                 <div class="content">
//                     <a class="header" href="#" id="bTitle">
//                     ${post.url}
//                     </a>
//                     <div class="description">
//                         <p id="bDesc">
//                         ${post.description}
//                         </p>
//                     </div>
//                     <div class="extra">
//                         <a class="ui floated basic violet button" href="#">Read Mores</a>
//                     </div>
//                 </div>
//             </div>
        
//         `;
//             });
//             filmPic.innerHTML = output;
//         })
//         .catch(function(err) {
//             console.log(err);
//         });



// }

// async function aboutFilm() {

//     //open the request 
//     let response = await fetch('https://ghibliapi.herokuapp.com/films');

//     let data = await response.json();

//     return data;

// }

// function showfilmInfo() {
//     aboutFilm().then(function(posts) {
//             //iterate over each post [100 posts]
//             //let output = '';
//             posts.forEach(function(post) {
//                 const title = document.createElement('p')
//                 const description = document.createElement('p')
//                 const producer = document.createElement('p')
//                 const director = document.createElement('p')
//                 const releaseDate = document.createElement('p') 

//                 title.textContent = `${post.title}`
//                 description.textContent = `${post.description}`
//                 producer.textContent = `${post.producer}`
//                 director.textContent = `${post.director}`
//                 releaseDate.textContent = `${post.releaseate}`

//                 filmPic.append(title,description,producer,director,releaseDate)
//                 output += `

//         <div class="item">
//         <div class="image">
//             <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
//         </div>
//         <div class="content">
//             <a class="header" href="#" id="bTitle">
//             ${post.title}
//             </a>
//             <div class="description">
//                 <p id="bDesc">
//                 ${post.description}
//                 </p>
//             </div>
//             <div class="extra">
//                 <a class="ui floated basic violet button" href="#">Read Mores</a>
//             </div>
//         </div>
//     </div>

// `;
//             });
//             filmPic.innerHTML = output;
//         })
//         .catch(function(err) {
//             console.log(err);
//         });

// }

// Create a request variable and assign a new XMLHttpRequest object to it.





// const filmPic = document.querySelector('.film')
// const title = document.querySelector('.title')
// const description = document.querySelector('.description')
// const director = document.querySelector('.director')
// const producer = document.querySelector('.producer')
// const releaseDate = document.querySelector('.rleaseDate')

// //const carouselInner = document.querySelector('.carousel-inner');
// document.addEventListener('DOMContentLoaded' , ()=>{

//     showfilmInfo();
//     // displayImages();

// });

// UI Vars 
//const postDiv3 = document.getElementById('thePosts');

//Load Every thing ....
// document.addEventListener("DOMContentLoaded", () => {
//     //load_fromPlaceHolder();
//     loadDataNew();
// });


//load a single customer function 
// function aboutMovie() {

//     //open the request 
//     fetch('https://ghibliapi.herokuapp.com/films')
//         .then(function(res) {
//             return res.json(); //return the JSON Promise
//         })
//         .then(function(posts) {
//             //iterate over each post [100 posts]
//             let output = '';
//             posts.forEach(function(post) {
//                 output += `
        
//                 <div class="item">
//                 <div class="image">
//                     <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
//                 </div>
//                 <div class="content">
//                     <a class="header" href="#" id="bTitle">
//                     ${post.url}
//                     </a>
//                     <div class="description">
//                         <p id="bDesc">
//                         ${post.description}
//                         </p>
//                     </div>
//                     <div class="extra">
//                         <a class="ui floated basic violet button" href="#">Read Mores</a>
//                     </div>
//                 </div>
//             </div>
        
//         `;
//             });
//             filmPic.innerHTML = output;
//         })
//         .catch(function(err) {
//             console.log(err);
//         });



// }

// async function aboutFilm() {

//     //open the request 
//     let response = await fetch('https://ghibliapi.herokuapp.com/films');

//     let data = await response.json();

//     return data;

// }

// function showfilmInfo() {
//     aboutFilm().then(function(posts) {
//             //iterate over each post [100 posts]
//             //let output = '';
//             posts.forEach(function(post) {
//                 const title = document.createElement('p')
//                 const description = document.createElement('p')
//                 const producer = document.createElement('p')
//                 const director = document.createElement('p')
//                 const releaseDate = document.createElement('p') 

//                 title.textContent = `${post.title}`
//                 description.textContent = `${post.description}`
//                 producer.textContent = `${post.producer}`
//                 director.textContent = `${post.director}`
//                 releaseDate.textContent = `${post.releaseate}`

//                 filmPic.append(title,description,producer,director,releaseDate)
//                 output += `

//         <div class="item">
//         <div class="image">
//             <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
//         </div>
//         <div class="content">
//             <a class="header" href="#" id="bTitle">
//             ${post.title}
//             </a>
//             <div class="description">
//                 <p id="bDesc">
//                 ${post.description}
//                 </p>
//             </div>
//             <div class="extra">
//                 <a class="ui floated basic violet button" href="#">Read Mores</a>
//             </div>
//         </div>
//     </div>

// `;
//             });
//             filmPic.innerHTML = output;
//         })
//         .catch(function(err) {
//             console.log(err);
//         });

// }

// Create a request variable and assign a new XMLHttpRequest object to it.




var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET','https://ghibliapi.herokuapp.com/people')

//request.setRequestHeader("x-rapidapi-key", "34e56ba814msh455386714d314d5p19b5fajsnd374fd760871");
//request.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");

const app = document.getElementById('root')
//const logo = document.createElement('img')
//logo.src = 'assets/image/logo.png'
const container = document.createElement('div')
container.setAttribute('class','container cont')

app.appendChild(container)

request.onload = function(){
    var data = JSON.parse(this.response)
    if(request.status >= 200 && request.status <= 400){
        data.forEach(person => {

            const row = document.createElement('div')
            const col1 = document.createElement('div')
            const col2 = document.createElement('div')
            const col3 = document.createElement('div')
        
            const card = document.createElement('div')

            

            card.setAttribute('class', 'card')

            const name = document.createElement('h1')
            name.setAttribute('id','name')
            name.textContent =`${person.name}`

            const age = document.createElement('p')
            age.setAttribute('id','age')
            age.textContent = `Age: ${person.age}`

            const gender = document.createElement('p')
            gender.setAttribute('id','gender')
            gender.textContent = `Gender: ${person.gender}`

            const eyeColor = document.createElement('p')
            eyeColor.setAttribute('id','eye')
            eyeColor.textContent = `Eye Color: ${person.eye_color}`

            const films = document.createElement('p')
            films.setAttribute('id','films')
            films.textContent = `films: ${person.films}`

            var id = person.id
            // console.log(id[0])
            // container.appendChild(row)
            // row.append(col1,col2,col3)
            // if('abcdef'.indexOf(id[0]) > 0){
            //     col1.append(card)
            // }else if(id[0] < 5){
            //     col2.append(card)
            // }else{
            //     col3.append(card)
            // }
            if('abcdef'.indexOf(id[0]) > 0){
                container.appendChild(card)
            }
            
            card.append(name,age,gender,eyeColor,films)
            
            
        });
    }else{
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `man, it's not working!`
        app.appendChild(errorMessage)
        

    }
}
request.send()