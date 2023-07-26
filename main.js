/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* PULL EMAGES REQUEST FRON JSON */

const response = fetch ("data.json")
.then(dataReturned =>{
  return dataReturned.json();
})
.then(jsonData =>{
const AI = jsonData.AI;
const A8K = jsonData.A8K;
const HD = jsonData.HD;
const A4K = jsonData.A4K;
const movies = jsonData.movies;
const logos = jsonData.logos;
const juicey = jsonData.juicey;
const basketball = jsonData.basketball;
const natureWildlife = jsonData.natureWildlife;

////////////////AI ///////////////////////
  /*  [0] FIRST CHILD */
  const FirstChild = document.querySelectorAll("article")[0].children[0].children[0]
  let Random = Math.floor(Math.random()* AI.length);
  let RandomImage = AI[Random]
  FirstChild.setAttribute(`src`, `${RandomImage}`)

  /*  [0] SECOND */
  const secondChild = document.querySelectorAll("article")[0].children[1].children[0]
  let sRandom = Math.floor(Math.random()* AI.length);
  let sRandomImage = AI[sRandom]
  secondChild.setAttribute(`src`, `${sRandomImage}`)

  /*  [0] THIRD */
  const thirdChild = document.querySelectorAll("article")[0].children[2].children[0]
  let tRandom = Math.floor(Math.random()* AI.length);
  let tRandomImage = AI[tRandom]
  thirdChild.setAttribute(`src`, `${tRandomImage}`)

  /*  [0] FOURTH */
  const fourthChild = document.querySelectorAll("article")[0].children[3].children[0]
  let fRandom = Math.floor(Math.random()* AI.length);
  let fRandomImage = AI[fRandom]
  fourthChild.setAttribute(`src`, `${fRandomImage}`)
  ////////////////////////////AI///////////////////////////////////////
  ///////////////////////////A8K//////////////////////////////////////
  /*  [1] FOURTH */
  const firstChild = document.querySelectorAll("article")[1].children[0].children[0]
  let Random1 = Math.floor(Math.random()* A8K.length);
  let RandomImage1 = A8K[Random1]
  firstChild.setAttribute(`src`, `${RandomImage1}`)

  /*  [1] SECOND */
  const secondChild1 = document.querySelectorAll("article")[1].children[1].children[0]
  let Random2 = Math.floor(Math.random()* A8K.length);
  let RandomImage2 = A8K[Random2]
  secondChild1.setAttribute(`src`, `${RandomImage2}`)

  /*  [1] THIRD */
  const thirdChild1 = document.querySelectorAll("article")[1].children[2].children[0]
  let Random3 = Math.floor(Math.random()* A8K.length);
  let RandomImage3 = A8K[Random3]
  thirdChild1.setAttribute(`src`, `${RandomImage3}`)

  /*  [1] THIRD */
  const fourthChild1 = document.querySelectorAll("article")[1].children[3].children[0]
  let Random4 = Math.floor(Math.random()* A8K.length);
  let RandomImage4 = A8K[Random4]
  fourthChild1.setAttribute(`src`, `${RandomImage4}`)
  ////////////////////////////A8k///////////////////////////////////////

  ////////////////////////////A4k///////////////////////////////////////
  /*  [2] FIRST */
  const firstChild1 = document.querySelectorAll("article")[2].children[0].children[0]
  let Random5 = Math.floor(Math.random()* A4K.length);
  let RandomImage5 = A4K[Random5]
  firstChild1.setAttribute(`src`, `${RandomImage5}`)

  /*  [2] SECOND */
  const secondChild2= document.querySelectorAll("article")[2].children[1].children[0]
  let Random6 = Math.floor(Math.random()* A4K.length);
  let RandomImage6 = A4K[Random6]
  secondChild2.setAttribute(`src`, `${RandomImage6}`)

  /*  [2] THIRD */
  const thirdChild2= document.querySelectorAll("article")[2].children[2].children[0]
  let Random7 = Math.floor(Math.random()* A4K.length);
  let RandomImage7 = A4K[Random7]
  thirdChild2.setAttribute(`src`, `${RandomImage7}`)

  /*  [2] THIRD */
  const fourthChild2= document.querySelectorAll("article")[2].children[3].children[0]
  let Random8 = Math.floor(Math.random()* A4K.length);
  let RandomImage8 = A4K[Random8]
  fourthChild2.setAttribute(`src`, `${RandomImage8}`)
  ////////////////////////////A4k///////////////////////////////////////

  ////////////////////////////HD///////////////////////////////////////
  /*  [2] FIRST */
  const firstChild2 = document.querySelectorAll("article")[3].children[0].children[0]
  let Random9 = Math.floor(Math.random()* HD.length);
  let RandomImage9 = HD[Random9]
  firstChild2.setAttribute(`src`, `${RandomImage9}`)

  /*  [3] SECOND */
  const secondChild3= document.querySelectorAll("article")[3].children[1].children[0]
  let Random10 = Math.floor(Math.random()* HD.length);
  let RandomImage10 = HD[Random10]
  secondChild3.setAttribute(`src`, `${RandomImage10}`)

  /*  [3] THIRD */
  const thirdChild3= document.querySelectorAll("article")[3].children[2].children[0]
  let Random11 = Math.floor(Math.random()* HD.length);
  let RandomImage11 = HD[Random11]
  thirdChild3.setAttribute(`src`, `${RandomImage11}`)

  /*  [3] THIRD */
  const fourthChild3= document.querySelectorAll("article")[3].children[3].children[0]
  let Random12 = Math.floor(Math.random()* HD.length);
  let RandomImage12 = HD[Random12]
  fourthChild3.setAttribute(`src`, `${RandomImage12}`)
  ////////////////////////////HD///////////////////////////////////////

  ////////////////////////////movies///////////////////////////////////////
  /*  [2] FIRST */
  const firstChild3 = document.querySelectorAll("article")[4].children[0].children[0]
  let Random13 = Math.floor(Math.random()* movies.length);
  let RandomImage13 = movies[Random13]
  firstChild3.setAttribute(`src`, `${RandomImage13}`)

  /*  [3] SECOND */
  const secondChild4= document.querySelectorAll("article")[4].children[1].children[0]
  let Random14 = Math.floor(Math.random()* movies.length);
  let RandomImage14 = movies[Random14]
  secondChild4.setAttribute(`src`, `${RandomImage14}`)

  /*  [3] THIRD */
  const thirdChild5= document.querySelectorAll("article")[4].children[2].children[0]
  let Random15 = Math.floor(Math.random()* movies.length);
  let RandomImage15 = movies[Random15]
  thirdChild5.setAttribute(`src`, `${RandomImage15}`)

  /*  [3] THIRD */
  const fourthChild4= document.querySelectorAll("article")[4].children[3].children[0]
  let Random16 = Math.floor(Math.random()* movies.length);
  let RandomImage16 = movies[Random16]
  fourthChild4.setAttribute(`src`, `${RandomImage16}`)
  ////////////////////////////movies///////////////////////////////////////

  ////////////////////////////logos///////////////////////////////////////
  /*  [2] FIRST */
  const firstChild4 = document.querySelectorAll("article")[5].children[0].children[0]
  let Random17 = Math.floor(Math.random()* logos.length);
  let RandomImage17 = logos[Random17]
  firstChild4.setAttribute(`src`, `${RandomImage17}`)

  /*  [3] SECOND */
  const secondChild5= document.querySelectorAll("article")[5].children[1].children[0]
  let Random18 = Math.floor(Math.random()* logos.length);
  let RandomImage18 = logos[Random18]
  secondChild5.setAttribute(`src`, `${RandomImage18}`)

  /*  [3] THIRD */
  const thirdChild6= document.querySelectorAll("article")[5].children[2].children[0]
  let Random19 = Math.floor(Math.random()* logos.length);
  let RandomImage19 = logos[Random19]
  thirdChild6.setAttribute(`src`, `${RandomImage19}`)

  /*  [3] THIRD */
  const fourthChild5= document.querySelectorAll("article")[5].children[3].children[0]
  let Random20 = Math.floor(Math.random()* logos.length);
  let RandomImage20 = logos[Random20]
  fourthChild5.setAttribute(`src`, `${RandomImage20}`)
  ////////////////////////////logos///////////////////////////////////////

  ////////////////////////////juicey///////////////////////////////////////
  /*  [2] FIRST */
  const firstChild5 = document.querySelectorAll("article")[6].children[0].children[0]
  let Random21 = Math.floor(Math.random()* juicey.length);
  let RandomImage21 = juicey[Random21]
  firstChild5.setAttribute(`src`, `${RandomImage21}`)

  /*  [3] SECOND */
  const secondChild6= document.querySelectorAll("article")[6].children[1].children[0]
  let Random22 = Math.floor(Math.random()* juicey.length);
  let RandomImage22 = juicey[Random22]
  secondChild6.setAttribute(`src`, `${RandomImage22}`)

  /*  [3] THIRD */
  const thirdChild7= document.querySelectorAll("article")[6].children[2].children[0]
  let Random23 = Math.floor(Math.random()* juicey.length);
  let RandomImage23 = juicey[Random23]
  thirdChild7.setAttribute(`src`, `${RandomImage23}`)

  /*  [3] THIRD */
  const fourthChild6= document.querySelectorAll("article")[6].children[3].children[0]
  let Random24 = Math.floor(Math.random()* juicey.length);
  let RandomImage24 = juicey[Random24]
  fourthChild6.setAttribute(`src`, `${RandomImage24}`)
  ////////////////////////////juicey///////////////////////////////////////

  ////////////////////////////basketball///////////////////////////////////////
  /*  [2] FIRST */
  const firstChild6 = document.querySelectorAll("article")[7].children[0].children[0]
  let Random25 = Math.floor(Math.random()* basketball.length);
  let RandomImage25 = basketball[Random25]
  firstChild6.setAttribute(`src`, `${RandomImage25}`)

  /*  [3] SECOND */
  const secondChild7= document.querySelectorAll("article")[7].children[1].children[0]
  let Random26 = Math.floor(Math.random()* basketball.length);
  let RandomImage26 = basketball[Random26]
  secondChild7.setAttribute(`src`, `${RandomImage26}`)

  /*  [3] THIRD */
  const thirdChild8= document.querySelectorAll("article")[7].children[2].children[0]
  let Random27 = Math.floor(Math.random()* basketball.length);
  let RandomImage27 = basketball[Random27]
  thirdChild8.setAttribute(`src`, `${RandomImage27}`)

  /*  [3] THIRD */
  const fourthChild7= document.querySelectorAll("article")[7].children[3].children[0]
  let Random28 = Math.floor(Math.random()* basketball.length);
  let RandomImage28 = basketball[Random28]
  fourthChild7.setAttribute(`src`, `${RandomImage28}`)
  ////////////////////////////basketball///////////////////////////////////////
  
  ////////////////////////////natureWildlife///////////////////////////////////////
  /*  [2] FIRST */
  const firstChild7 = document.querySelectorAll("article")[8].children[0].children[0]
  let Random29 = Math.floor(Math.random()* natureWildlife.length);
  let RandomImage29 = natureWildlife[Random29]
  firstChild7.setAttribute(`src`, `${RandomImage29}`)

  /*  [3] SECOND */
  const secondChild8= document.querySelectorAll("article")[8].children[1].children[0]
  let Random30 = Math.floor(Math.random()* natureWildlife.length);
  let RandomImage30 = natureWildlife[Random30]
  secondChild8.setAttribute(`src`, `${RandomImage30}`)

  /*  [3] THIRD */
  const thirdChild9= document.querySelectorAll("article")[8].children[2].children[0]
  let Random31 = Math.floor(Math.random()* natureWildlife.length);
  let RandomImage31 = natureWildlife[Random31]
  thirdChild9.setAttribute(`src`, `${RandomImage31}`)

  /*  [3] THIRD */
  const fourthChild8= document.querySelectorAll("article")[8].children[3].children[0]
  let Random32 = Math.floor(Math.random()* natureWildlife.length);
  let RandomImage32 = natureWildlife[Random32]
  fourthChild8.setAttribute(`src`, `${RandomImage32}`)
  ////////////////////////////natureWildlife///////////////////////////////////////
  
})

const Randombackground = fetch ("data.json")
.then(response =>{
  return response.json();
})
.then(jsonResponse =>{
  const responseArray = jsonResponse.PhoneDispaly;
  const Random = Math.floor(Math.random()*responseArray.length);
  const generatedImage = responseArray[Random];

  const background = document.querySelector(".mobileImages");

  background.style.backgroundImage = `url(${generatedImage})`

  console.log(background)
})