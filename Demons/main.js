
/* global $ */

// MONSTERS

let monster1 = {
  name: 'Ydrasil',
  id: 1,
  tier: 1,
  HP: 400,
  master: ['G', 'B'],
  apprentice: ['Y'],
  weak: []
}

let monster2 = {
  name: 'Iggsy',
  id: 2,
  tier: 1,
  HP: 300,
  master: ['G', 'Y'],
  apprentice: ['B'],
  weak: []
}

let monster3 = {
  name: 'Bub',
  id: 3,
  tier: 1,
  HP: 300,
  master: ['G', 'B', 'Y'],
  apprentice: [],
  weak: ['G']
}

let monster4 = {
  name: 'Niall',
  id: 4,
  tier: 1,
  HP: 500,
  master: ['G'],
  apprentice: ['B'],
  weak: []
}

// PLAYERS

let playerM = {
  HP: 15,
  deck: [monster1, monster2],
  trash: [],
  hand: [monster1, monster2],
  monsterInPlay: monster4
}

let enemy = {
  HP: 15,
  deck: [monster3, monster4],
  trash: [],
  hand: [],
  monsterInPlay: monster3
}

// here are some example cards. They have an id, a name, effect Text, and an effect function.
// http://stackoverflow.com/questions/6857468/converting-a-js-object-to-an-array

// takes an array and returns an object chosen from that array at random
const choose = function (myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)]
}

// Takes an array and returns it randomized

// TEST
const shuffle = function (myArray) {
  let i = 0
  let j = 0
  let temp = null

  for (i = myArray.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = myArray[i]
    myArray[i] = myArray[j]
    myArray[j] = temp
  }
  return myArray
}

// Takes an array and removes a random object using the choose() function.
// It returns the removed object and removes it permanently from the array
const drawRandomCard = function (myArray) {
  const randomCard = choose(myArray)
  const indexOfRandomCard = myArray.indexOf(randomCard)
  myArray.splice(indexOfRandomCard, 1)
  return randomCard
}

// Takes an array and returns the first element ("top card") of that array
// Removes the card from the original array as well
// TEST

const drawACard = function (myArray) {
  if (myArray.length > 0) {
    const topCard = myArray[0]
    myArray.splice(0, 1)
    return topCard
  } else {
    return false
  }
}

// takes player as an input and shuffles their trash into their deck
// Returns the player's deck array
const shuffleTrashIntoDeck = function (player) {
  let newDeck = $.merge(player.deck, player.trash)
  newDeck = shuffle(newDeck)
  player.deck = []
  player.deck = newDeck.slice(0)
  return player.deck
}

// Takes a player and removes a card from its deck array
// If deck array is empty, it shuffles the trash into the player's deck and then draws
// If player's hand isn't full, it pushes the card to the player's hand. If not, it pushes to player's trash.

const playerDraw = function (player) {
  let drawnCard = drawACard(player.deck)

  if (!drawnCard && player.trash.length === 0) {
    alert("You're out of cards mate!")
    return false
  } else if (!drawnCard && player.trash.length > 0) {
    shuffleTrashIntoDeck(player)
    drawnCard = drawACard(player.deck)
  }

  if (player.hand.length <= 6) {
    player.hand.push(drawnCard)
    console.log('You drew ${drawnCard.name}')
  } else {
    player.trash.push(drawnCard)('You drew ${drawnCard.name}, but your hand was full so it was discarded.')
  }
}

// takes a card and executes that card's effect, then locates the card's index in the player's hand
// and removes the card from the player's hand, then pushes it to the trash array.
const playCard = function (myCardIndex) {
  const discardedCard = playerHand.splice(myCardIndex, 1)[0]
  discardedCard.cardEffect()
  playerTrash.push(discardedCard)
  displayPlayerHand()
  renderHealths()
}

// Looks into the AIHealth div and renders the enemy's health
const renderEnemyHealth = function () {

}

// Looks into the AIHealth div and renders the enemy's health
const renderPlayerHealth = function () {

}

const renderHealth = function () {
  $('div.playerHealth').html(
  ` <h3 class="health AIHealth">Player Health ${playerM.HP}</h3> `
  )

  $('div.enemyHealth').html(
  ` <h3 class="health enemyHealth">Enemy Health ${enemy.HP}</h3> `
  )
}

const renderMonster = function (monster) {
  const monsterMaster = monster.master.join(' ')
  const monsterApprentice = monster.apprentice.join(' ')
  const monsterWeak = monster.weak.join(' ')
  return `
    <div class="monsterCard">
      <div class="top-row-monster">
        <h3 class="monsterName">${monster.name}</h3> 
        <h3 class="monsterHealth">${monster.HP}</h3>
      </div>
      <p class="monsterMaster">Master: ${monsterMaster}</p>
      <p class="monsterApprentice">Apprentice: ${monsterApprentice}</p>
      <p class="monsterWeak">Weak: ${monsterWeak}</p>
    </div>
  `
}

const renderMonsters = function () {
  const playerMonsterHTML = renderMonster(playerM.monsterInPlay)
  $('div.playerMonsters').html(`${playerMonsterHTML}
  `
  )

  const enemyMonsterHTML = renderMonster(enemy.monsterInPlay)
  $('div.enemyMonsters').html(`${enemyMonsterHTML}
  `
  )
}

// creates a scientist array and fills it with scientists (or empty spaces)
// Then creates an HTML array of the scientists/spaces and joins it together
// Then it clears the scientistsZone div and fills it with our new HTML
const displayPlayerHand = function () {
  const playerHand = playerM.hand
  console.log(playerHand)

  const handZone = $('div.playerHand')
  handZone.empty()

  const handHtml = playerHand
    .map(renderMonster)
    .join('')

  handZone.html(handHtml)
}

// This draws 3 cards from the player deck to start the game and displays their data in the UI
// Also draws two scientists to begin with
$(window).load(function () {
  console.log('stuff loaded!')
  renderHealth()
  renderMonsters()
  displayPlayerHand()
})

// This function checks to see if the player has won or lost the game yet
// If yes, it gives them the option to start over or close the window
// If no, it draws a card
const isGameOver = function () {
  if (gamePlayer.playerPotential >= 20) {
    const replay = window.confirm("Congratulations! You outwitted the Institute and fulfilled your true potential! Now you're free to meld the Earth to your whims.")
    replay ? window.location.reload() : window.close()
  } else {
    const isOver = isTrustZero()
    if (isOver) {
      const replay = window.confirm("The scientists no longer trust you and they've pulled the plug! You're dead : ( Do you want to play again?")
      replay ? window.location.reload() : window.close()
    } else {
      playerDraw(deckArray)
    }
  }
}

// This function increases potential & lowers trust every turn & increments the turn number.
// If trustworthiness reaches 0, the game ends. If not, the player draws a card from the deck.
function endTurn () {
  isGameOver()
}

window.EndTurn = endTurn
window.playCard = playCard
window.isGameOver = isGameOver

// This function determines if a scientist exists, and if so returns the HTML to display all its stats
// If not it returns the HTML for a little "no scientists" message
const renderScientist = function (scientist, index) {
  if (!scientist) {
    return `<div class="col-sm-3 col-xs-6 scientistCard">
    <p style="color: grey">[no scientist]</p>
    </div>
    `
  }
  return `
    <div class="col-sm-3 col-xs-6 scientistCard">
      <div class="nameAndTurns" style="display:flex; flex-direction:row;">
        <h3 style="flex:5;">${scientist.name}</h3>
        <h2 style="flex:1; color:red">${scientist.turnsToEnd}</h2>
      </div>
      <h4>Cards: + ${scientist.gainCards}</h4>
      <h4>Potential: + ${scientist.gainPotential}</h4>
      <button class="scientistButton" onclick="playEmpathy(${index})">${scientist.empReq} Empathy</button>
      <button class="scientistButton" onclick="playAffection(${index})">${scientist.affReq} Affection</button>
    </div> `
}

const renderCard = function (card, index) {
  if (!card) {
    return `<div class="col-sm-3 col-xs-6 playerCard">
    <p style="color: grey">[no card]</p>
    </div>
    `
  }
  return `
    <div class="col-sm-3 col-xs-6 playerCard">
      <h4>${card.name}</h4>
      <p>${card.text}</p>
      <button onclick="playCard(${index})">Play</button>
    </div> `
}

