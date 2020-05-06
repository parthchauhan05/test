function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

cardIcons = ['fa-bahai', 'fa-snowflake', 'fa-fan', 'fa-life-ring', 'fa-sun', 'fa-atom']
icons = []
cardHtml = []
Html =[]
openCard = null
move = 0
score = 0

cardIcons = shuffle(cardIcons)

$("button#easy").on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass("fadeOut fadeIn")
  $("#begin").addClass("hidden")
  $('#game').removeClass("hidden")
  for(let i = 0; i<3; i++){
    icons.push(cardIcons[i])
    icons.push(cardIcons[i])
  }
  icons = shuffle(icons)
  for(let i=0; i<2; i++){
    Html.push(`<div class='row py-3'>`)
    for(let j=0; j<3; j++){
      cardValue = icons.pop()
      Html.push(`<div class='col'>
          <div class="game-card" data-value=${cardValue}>
            <div class="cardFace front"></div>
            <div class="cardFace back"><i class="fas ${cardValue} fa-spin"></i></div>
          </div>
      </div>`)
    }
    Html.push(`</div>`)
  }
  $('#game').append(Html.join('\n'))
  $('.game-card').on('click', function(e) {
    e.preventDefault();
    if(!$(this).hasClass('isFlipped')){
      $(this).toggleClass('isFlipped')
      move++
      currentCard = $(this).data('value')
      if(openCard == null){
        openCard = currentCard
      } else {
        if (openCard == currentCard){
          sleep(700).then(function(){
            $(`div[data-value=${currentCard}]`).addClass("faded")
            openCard = null
            currentCard = null
            score++
            if(score==3){
              $('p.result').append(`Congratulation! You won in ${move} moves.`)
              $('#end').css('position', 'absolute')
              $('#end').removeClass("hidden")
            }
          })
        } else {
          sleep(1000).then(function(){
            $(`div[data-value=${openCard}]`).removeClass("isFlipped")
            $(`div[data-value=${currentCard}]`).removeClass("isFlipped")
            openCard = null
            currentCard = null
          })
          
        }
    } 
    } else {
      alert('Please Select Different Card')
      }
  })
})

$("button#medium").on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass("fadeOut fadeIn")
  $("#begin").addClass("hidden")
  $('#game').removeClass("hidden")
  for(let i = 0; i<4; i++){
    icons.push(cardIcons[i])
    icons.push(cardIcons[i])
  }
  icons = shuffle(icons)
  for(let i=0; i<2; i++){
    Html.push(`<div class='row py-3'>`)
    for(let j=0; j<4; j++){
      cardValue = icons.pop()
      Html.push(`<div class='col'>
          <div class="game-card" data-value=${cardValue}>
            <div class="cardFace front"></div>
            <div class="cardFace back"><i class="fas ${cardValue} fa-spin"></i></div>
          </div>
      </div>`)
    }
    Html.push(`</div>`)
  }
  $('#game').append(Html.join('\n'))
  $('.game-card').on('click', function(e) {
    e.preventDefault();
    if(!$(this).hasClass('isFlipped')){
      $(this).toggleClass('isFlipped')
      move++
      currentCard = $(this).data('value')
      if(openCard == null){
        openCard = currentCard
      } else {
        if (openCard == currentCard){
          sleep(700).then(function(){
            $(`div[data-value=${currentCard}]`).addClass("faded")
            openCard = null
            currentCard = null
            score++
            if(score==4){
              $('p.result').append(`Congratulation! You won in ${move} moves.`)
              $('#end').css('position', 'absolute')
              $('#end').removeClass("hidden")
            }
          })
        } else {
          sleep(1000).then(function(){
            $(`div[data-value=${openCard}]`).removeClass("isFlipped")
            $(`div[data-value=${currentCard}]`).removeClass("isFlipped")
            openCard = null
            currentCard = null
          })          
        }
    } 
    } else {
      alert('Please Select Different Card')
      }
  })
})

$("button#hard").on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass("fadeOut fadeIn")
  $("#begin").addClass("hidden")
  $('#game').removeClass("hidden")
  for(let i = 0; i<6; i++){
    icons.push(cardIcons[i])
    icons.push(cardIcons[i])
  }
  icons = shuffle(icons)
  for(let i=0; i<2; i++){
    Html.push(`<div class='row py-3'>`)
    for(let j=0; j<6; j++){
      cardValue = icons.pop()
      Html.push(`<div class='col'>
          <div class="game-card" data-value=${cardValue}>
            <div class="cardFace front"></div>
            <div class="cardFace back"><i class="fas ${cardValue} fa-spin"></i></div>
          </div>
      </div>`)
    }
    Html.push(`</div>`)
  }
  $('#game').append(Html.join('\n'))
  $('.game-card').on('click', function(e) {
    e.preventDefault();
    if(!$(this).hasClass('isFlipped')){
      $(this).toggleClass('isFlipped')
      move++
      currentCard = $(this).data('value')
      if(openCard == null){
        openCard = currentCard
      } else {
        if (openCard == currentCard){
          sleep(700).then(function(){
            $(`div[data-value=${currentCard}]`).addClass("faded")
            openCard = null
            currentCard = null
            score++
            if(score==6){
              $('p.result').append(`Congratulation! You won in ${move} moves.`)
              $('#end').css('position', 'absolute')
              $('#end').removeClass("hidden")
            }
          })
        } else {
          sleep(1000).then(function(){
            $(`div[data-value=${openCard}]`).removeClass("isFlipped")
            $(`div[data-value=${currentCard}]`).removeClass("isFlipped")
            openCard = null
            currentCard = null
          })
          
        }
    } 
    } else {
      alert('Please Select Different Card')
      }
  })
})

