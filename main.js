var container =

document.querySelector('.container')

const action_btn = 

document.querySelectorAll('.buttons button')

const symbol = 

document.querySelector('.dark_symbol')

const dark_toggle = 

document.getElementById('dark_mode')

var blockquote = 

document.querySelector('.container blockquote')

function darkMode()

{

  if (dark_toggle.checked == true) {

    document.body.style.background = '#080A0C'

    symbol.innerHTML ='light_mode'

 

   symbol.classList.add('light_symbol')

   

    container.classList.add('dark')

    blockquote.classList.add('blockquote-color')

    

}else{

 document.body.style.background = '#FFFFFF'

 symbol.classList.remove('light_symbol')

 symbol.classList.add('dark_symbol')

 symbol.innerText ='dark_mode'

 container.classList.remove('dark')

 blockquote.classList.remove('blockquote-color')

    

  

}

}

const quote = {

  title: 'quotes generator',

  text : '',

  url: ''

}

async function loadQuotes() {

  try {

    const results =

   await fetch('https://api.quotable.io/random')

   const data = await results.json()

 quote.text = `${data.content}. / Author - ${data.author}`

   container.innerHTML = 

   `

     <blockquote>

       <p>

         ${data.content}

       </p>

     </blockquote> 

     <span>

    Author - <i>${data.author}</i> 

    </span>

   `

   

  } catch (e) {

    alert('an error occurred try again later')

  }

}

window.onload = loadQuotes

action_btn[0].onclick = loadQuotes

function shareQuote() {

  

  if (navigator.canShare && navigator.canShare(quote)) {

    navigator.share(quote)

  } else {

    alert('Your browser does not support...')

  }

}

action_btn[1].onclick = shareQuote



function googleTranslateElementInit()

{

  

  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');

}


