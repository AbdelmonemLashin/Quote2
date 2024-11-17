

function changeQuote(){
 var counter=Math.random()*quote.length
 var lastcounter=Math.trunc(counter)

document.getElementById("quote").textContent=quote[lastcounter].quote
document.getElementById("auther").textContent=quote[lastcounter].auther
document.getElementById("img").setAttribute("src",quote[lastcounter].image)

 console.log(lastcounter);
   
}

























var quote=[
  {
    quote:`“ Be yourself; everyone else is already taken.”
`,
    auther:`Oscar Wilde`,
    image:"images/1.jpg"
  },
  {
    quote:`“ I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”

`,
    auther:`Marilyn Monroe`,
    image:"images/2.jpg"
  },
  {
    quote:`“ So many books, so little time.”
`,
    auther:`Frank Zappa`,
    image:"images/3.jpg"
  },
  {
    quote:`“ Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”

`,
    auther:`OAlbert Einstein`,
    image:"images/4.jpg"
  },
  {
    quote:`“ A room without books is like a body without a soul.”

`,
    auther:`Marcus Tullius Cicero`,
    image:"images/5.jpg"
  },
  {
    quote:`“ Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”

`,
    auther:`Bernard M. Baruch`,
    image:"images/6.jpg"
  },
  {
    quote:`“ You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
`,
    auther:`William W. Purkey`,
    image:"images/7.jpg"
  },
  {
    quote:`“ You know you're in love when you can't fall asleep because reality is finally better than your dreams.”

`,
    auther:`Dr. Seuss`,
    image:"images/8.jpg"
  },
  {
    quote:`“ You only live once, but if you do it right, once is enough.”

`,
    auther:`Mae West`,
    image:"images/9.jpg"
  },
  {
    quote:`“ Be the change that you wish to see in the world.”

`,
    auther:`Mahatma Gandhi`,
    image:"images/10.jpg"
  },
  {
    quote:`“ In three words I can sum up everything I've learned about life: it goes on.”

`,
    auther:`Robert Frost`,
    image:"images/10.jpg"
  },
]

