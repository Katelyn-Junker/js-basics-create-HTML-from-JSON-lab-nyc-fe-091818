document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  const titanicButton = document.querySelector('#Titanic')
  const terminatorButton = document.querySelector('#Terminator-2')
  
  titanicButton.addEventListener('#click',fillInMovieData)
  
});

function fillInMovieData(){
  const currentMovie = movies['Titanic']
  
  
  
  const title = movies['Titanic'].title // "Titanic"
  const titleDiv= document.querySelector('title')
  titleDiv.innerText = title
  
  const director =movies['Titanic'].director
  const directorDiv = document.querySelector('#director')
  directorDiv.innerText = director 
  
  
  const genre =movies['Titanic'].genre
  const genreDiv = document.querySelector('#genre')
  genreDiv.innerText = genre 
  
  
}