var container =

document.querySelector('.container')

const action_btn = 

document.querySelectorAll('.buttons button')

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

