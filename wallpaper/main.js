const response = fetch("data.json")
.then(data =>{
    return data.json();
})
.then(jsonData =>{

    /////////////////4k//////////////
    const A4kImages = jsonData.A4K;
    A4kImages.forEach(imagePath =>{
      const main = document.querySelector(".a4k")
      const image = document.createElement('img')
      image.setAttribute("src", `${imagePath}`)

      main.appendChild(image)

    })
    ///////////////////////////////////////

    //////////////////8K//////////////////
    const A8kImages = jsonData.A8K;
    A8kImages.forEach(a8kimagePath =>{
      const a8kmain = document.querySelector(".a8k")
      const a8kimage = document.createElement('img')
      a8kimage.setAttribute("src", `${a8kimagePath}`)

      a8kmain.appendChild(a8kimage)

    })
    //////////////////8K//////////////////


    ///////////////////AI////////////////
    const AIImages = jsonData.AI;
    AIImages.forEach(AIimagePath =>{
      const AImain = document.querySelector(".AI")
      const AIimage = document.createElement('img')
      AIimage.setAttribute("src", `${AIimagePath}`)

      AImain.appendChild(AIimage)

    })
    ///////////////////AI////////////////

    ////////////////////////HD//////////////////
    const HDImages = jsonData.HD;
    HDImages.forEach(HDimagePath =>{
      const HDmain = document.querySelector(".HD")
      const HDimage = document.createElement('img')
      HDimage.setAttribute("src", `${HDimagePath}`)

      HDmain.appendChild(HDimage)

    })
    ////////////////////////HD//////////////////

})

