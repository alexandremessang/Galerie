var isLoad = false;
var data = [];

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
        data = response.data;
        localStorage.setItem('jsonImages', data);
        
        for(const src of data) {
            if (src.images !== undefined) {
                if (src.images[0].type !== 'video/mp4'){
                    let colDiv = document.createElement("div");
                    let cardDiv = document.createElement("div");
                    let img = document.createElement("img");
                    let cardBodyDiv = document.createElement("div");
                    let h5 = document.createElement("h5");
                    let a = document.createElement("a");
                    let star = document.createElement("img");
            
                    colDiv.className = "col col-sm-4";
            
                    cardDiv.className = "card";
                    cardDiv.style = "width: 18rem;";
                    
                    img.src = src.images[0].link;
                    img.className = "card-img-top";
            
                    cardBodyDiv.className = "card-body";
            
                    h5.className = "card-title";
                    h5.textContent = src.title;
            
                    a.className = "btn btn-primary";
                    a.href = "#";
                    a.textContent = "En savoir plus";

                    star.src = "etoile_vide.svg";
                    star.alt = "favoris";
                    star.height = "50px";
                    star.width = "50px";
            
                    colDiv.appendChild(cardDiv);
                    cardDiv.appendChild(img);
                    cardDiv.appendChild(cardBodyDiv);
                    cardBodyDiv.appendChild(h5);
                    cardBodyDiv.appendChild(a);
                    cardBodyDiv.appendChild(star);
            
                    imageBox.appendChild(colDiv);
                    numImage++;
                        
                    };
            
                    isLoad = true;
                }
            }
            
    }).catch(function(err){
        console.log(err);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    if (navigator.onLine) {
        document.getElementById('offline').style.display = "none";
    }

    window.addEventListener('online', () => {
        window.document.getElementById('offline').style.display = "none";
    });

    window.addEventListener('offline', () => {
        window.document.getElementById('offline').style.display = "block";
        caches.open('v1').then(function(cache) {
            if (localStorage.getItem('jsonImages') !== undefined) {
                data = localStorage.getItem('jsonImages')
                cache.add('/index.html');
                window = cache.keys('v1');
            }
        });
    });
    
});


    







    


    

    

    
