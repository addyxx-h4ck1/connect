///AI IMAGES ONLY///////////

const getData = fetch ("data.json")
.then(response =>{
    return response.json();
})
.then(jsonresponse =>{
    return jsonresponse.basketball;
})
.then(imagesPaths =>{
    imagesPaths.forEach(url =>{
        const mainsection = document.querySelector(".mainSection");

        const ImageCard = document.createElement('div');
        ImageCard.setAttribute("class", "maincard");
        

        const image = document.createElement('img');
        image.setAttribute(`src`, `${url}`);

        const donloadfunction = document.createElement('a');
        donloadfunction.setAttribute(`href`, `${url}`);
        donloadfunction.className = "btn"
        donloadfunction.setAttribute(`download`, "");
        donloadfunction.textContent = "Download"

        const downloadIcon = document.createElement('i');
        downloadIcon.setAttribute("class", "fa fa-download");

        ImageCard.appendChild(image);
        donloadfunction.appendChild(downloadIcon)
        ImageCard.appendChild(donloadfunction);

        mainsection.appendChild(ImageCard)
        
        /* FULLSCREEN IMAGE */
         
        const fullscreenImage = document.createElement('a');
        fullscreenImage.setAttribute(`href`, `${url}`);

        fullscreenImage.appendChild(image);
        fullscreenImage.appendChild(donloadfunction)
        mainsection.appendChild(fullscreenImage)

       

        /*  event */

        donloadfunction.addEventListener("click", (e) =>{
            donloadfunction.textContent = 'Downloaded'
           donloadfunction.style.backgroundColor = "grey"
        })
    })

})

