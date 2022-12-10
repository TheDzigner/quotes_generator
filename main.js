var container =

document.querySelector('.container')

const action_btn = 

document.querySelectorAll('.buttons button')

async function loadQuotes() {

  try {

    const results =

   await fetch('https://api.quotable.io/random')

   const data = await results.json()

   shareQuote(data)

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

function shareQuote(data) {

  const quote = {

  title: 'quotes generator',

  text : data.content,

  url: ''

}

  if (navigator.canShare && navigator.canShare(quote)) {

    navigator.share(quote)

  } else {

    alert('Your browser does not support...')

  }

}

action_btn[1].onclick = shareQuote

