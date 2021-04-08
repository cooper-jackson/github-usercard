import axios from "axios"

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let githubURL = 'https://api.github.com/users/'
let cards = document.querySelector('.cards')

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


const user = prompt("Please enter your Github username", "<name goes here>")

axios.get(githubURL + `${user}`)
  .then(response => {
    
    let cardElement = document.createElement('div')
    cardElement.className = "card"

    let img = document.createElement('img')
    img.src = response.data.avatar_url
    img.style.maxwidth = "25%"
    cardElement.appendChild(img)

    let cardInfo = document.createElement('div')
    cardInfo.className = "card-info"

    for(const property in response.data) {
      let pair = document.createElement('p')
      let key = property
      let value = response.data[property]
      pair.textContent = `${key}: ${value}`
      cardInfo.appendChild(pair)
    }
    cardElement.appendChild(cardInfo)
    cards.appendChild(cardElement)
  })

  .catch(err => {
    console.log(err)
})
.then(function() {
  instructorsArray.forEach(element => {
    axios.get(githubURL + element)
    .then(response => {

      let note = document.createElement('h2')
      note.textContent = 'Instructor at Lambda'

      let card = document.createElement('div')
      card.className = 'card'

      let img = document.createElement('img')
      img.src = response.data.avatar_url
      card.appendChild(img)

      let cardInfo = document.createElement('div')
      cardInfo.className = 'card-info'

      let cardName = document.createElement('h3')
      cardName.textContent = `Name: ${response.data.name}`
      cardName.className = 'name'
      cardInfo.appendChild(cardName)

      let cardUsername = document.createElement('p')
      cardUsername.textContent = `Username: ${response.data.login}`
      cardUsername.className = 'username'
      cardInfo.appendChild(cardUsername)

      let cardLocation = document.createElement('p')
      cardLocation.textContent = `Location: ${response.data.location}`
      cardInfo.appendChild(cardLocation)
      
      let cardProfile = document.createElement('p')
      let cardProfileURL = response.data.url
      cardProfile.textContent = `Profile: ${cardProfileURL}`
      cardInfo.appendChild(cardProfile)

      let cardFollowers = document.createElement('p')
      cardFollowers.textContent = `Followers: ${response.data.followers}`
      cardInfo.appendChild(cardFollowers)    

      let cardFollowing = document.createElement('p')
      cardFollowing.textContent = `Following: ${response.data.following}`
      cardInfo.appendChild(cardFollowing)

      let cardBio = document.createElement('p')
      cardBio.textContent = `Bio: ${response.data.bio}`
      cardInfo.appendChild(cardBio)

      card.appendChild(cardInfo)
      cards.appendChild(note)
      cards.appendChild(card)
    })

    .catch(err => {
      console.log(err)
    })
  });
})
.then(function() {
  axios.get(githubURL + `${user}` + '/following')
  .then (response => {
    return response.data
  })
  .then (response => {
    response.forEach(element => {
      axios.get(githubURL + element.login)
      .then(response => {
        
        let cardElement = document.createElement('div')
        cardElement.className = "card"
    
        let img = document.createElement('img')
        img.src = response.data.avatar_url
        img.style.maxwidth = "25%"
        cardElement.appendChild(img)
    
        let cardInfo = document.createElement('div')
        cardInfo.className = "card-info"
    
        for(const property in response.data) {
          let pair = document.createElement('p')
          let key = property
          let value = response.data[property]
          pair.textContent = `${key}: ${value}`
          cardInfo.appendChild(pair)
        }
        cardElement.appendChild(cardInfo)
        cards.appendChild(cardElement)
      })
    
      .catch(err => {
        console.log(err)
      })
    });
  })

  .catch (err => {
    console.log(err)
  })
})


const instructorsArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

// instructorsArray.forEach(element => {
//   axios.get(githubURL + element)
//   .then(response => {

//     let note = document.createElement('h2')
//     note.textContent = 'Instructor at Lambda'

//     let card = document.createElement('div')
//     card.className = 'card'

//     let img = document.createElement('img')
//     img.src = response.data.avatar_url
//     card.appendChild(img)

//     let cardInfo = document.createElement('div')
//     cardInfo.className = 'card-info'

//     let cardName = document.createElement('h3')
//     cardName.textContent = `Name: ${response.data.name}`
//     cardName.className = 'name'
//     cardInfo.appendChild(cardName)

//     let cardUsername = document.createElement('p')
//     cardUsername.textContent = `Username: ${response.data.login}`
//     cardUsername.className = 'username'
//     cardInfo.appendChild(cardUsername)

//     let cardLocation = document.createElement('p')
//     cardLocation.textContent = `Location: ${response.data.location}`
//     cardInfo.appendChild(cardLocation)
    
//     let cardProfile = document.createElement('p')
//     let cardProfileURL = response.data.url
//     cardProfile.textContent = `Profile: ${cardProfileURL}`
//     cardInfo.appendChild(cardProfile)

//     let cardFollowers = document.createElement('p')
//     cardFollowers.textContent = `Followers: ${response.data.followers}`
//     cardInfo.appendChild(cardFollowers)    

//     let cardFollowing = document.createElement('p')
//     cardFollowing.textContent = `Following: ${response.data.following}`
//     cardInfo.appendChild(cardFollowing)

//     let cardBio = document.createElement('p')
//     cardBio.textContent = `Bio: ${response.data.bio}`
//     cardInfo.appendChild(cardBio)

//     card.appendChild(cardInfo)
//     cards.appendChild(note)
//     cards.appendChild(card)
//   })

//   .catch(err => {
//     console.log(err)
//   })
// });


// /*
//   STEP 5: Now that you have your own card getting added to the DOM, either
//     follow this link in your browser https://api.github.com/users/<Your github name>/followers,
//     manually find some other users' github handles, or use the list found at the
//     bottom of the page. Get at least 5 different Github usernames and add them as
//     Individual strings to the friendsArray below.

//     Using that array, iterate over it, requesting data for each user, creating a new card for each
//     user, and adding that card to the DOM.
// */


// const followersArray = ['andrewctran', 'jonahgeorge', 'kptristan24',  'MillerJL', 'skeltont'];

// followersArray.forEach(element => {
//   axios.get(githubURL + element)
//   .then(response => {
    
//     let note = document.createElement('h2')
//     note.textContent = 'Follower of Coop'

//     let cardElement = document.createElement('div')
//     cardElement.className = "card"

//     let img = document.createElement('img')
//     img.src = response.data.avatar_url
//     img.style.maxwidth = "25%"
//     cardElement.appendChild(img)

//     let cardInfo = document.createElement('div')
//     cardInfo.className = "card-info"

//     for(const property in response.data) {
//       let pair = document.createElement('p')
//       let key = property
//       let value = response.data[property]
//       pair.textContent = `${key}: ${value}`
//       cardInfo.appendChild(pair)
//     }
//     cardElement.appendChild(cardInfo)
//     cards.appendChild(note)
//     cards.appendChild(cardElement)
//   })

//   .catch(err => {
//     console.log(err)
//   })
// });

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/