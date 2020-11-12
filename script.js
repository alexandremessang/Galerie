var isLoad = false;

function preset() {
    document.getElementById("loading").style.visibility = "hidden";
    loader();
}

function loader() {
    if (!isLoad) {
        document.getElementById("loading").style.visibility = "visible";
        setTimeout(loadImages, 1000);
    }
}

function loadImages() {
    document.getElementById("loading").style.visibility = "hidden";
    var imageBox = document.getElementById("image_box");
    let numImage = 1;
    

    window.fetch("https://api.imgur.com/3/gallery/hot/viral/0.json").then(function(res){
        return res.json();
    }).then(function(response){
        const data = response;
        console.log(data);
        
        
        for(const src of data) {
            let colDiv = document.createElement("div");
            let cardDiv = document.createElement("div");
            let img = document.createElement("img");
            let cardBodyDiv = document.createElement("div");
            let h5 = document.createElement("h5");
            let p = document.createElement("p");
            let a = document.createElement("a");
    
            colDiv.className = "col col-sm-4";
    
            cardDiv.className = "card";
            cardDiv.style = "width: 18rem;";
    
            img.src = src["url"];
            img.className = "card-img-top";
    
            cardBodyDiv.className = "card-body";
    
            h5.className = "card-title"
            h5.textContent = src["name"];
    
            p.className = "card-text";
            p.textContent = src["description"];
    
            a.className = "btn btn-primary"
            a.href = "#"
            a.textContent = "En savoir plus"
    
            colDiv.appendChild(cardDiv);
            cardDiv.appendChild(img);
            cardDiv.appendChild(cardBodyDiv);
            cardBodyDiv.appendChild(h5);
            cardBodyDiv.appendChild(p);
            cardBodyDiv.appendChild(a);
    
            imageBox.appendChild(colDiv);
            numImage++;
        };
    
        isLoad = true;



    }).catch(function(err){
        console.log(err);
    });

    
}
    

    

    
