// write your code here
//resources
const ramenDb = "http://localhost:3000/ramens";

// New Ramen Form
fastGet("new-ramen").addEventListener('submit', createNewRamen);

//Get Ramens
fetch(ramenDb)
    .then((res) => res.json())
    .then(createRamens)
// iterate over ramens
function createRamens(ramens) {
    ramens.forEach(createRamen)
}

//Append Ramens to DOM
function createRamen(ramen) {
    const ramenMenuDiv = document.getElementById('ramen-menu');
    const ramenImage = document.createElement('img');
    ramenImage.src = ramen.image;
    ramenMenuDiv.append(ramenImage);

    ramenImage.addEventListener("click", (e) => renderDetails(ramen));
}
//grabbing each dom element to change on page after click
function renderDetails(ramen) {
    const detailImage = fastGet("detail-image");
    const ramenName = fastGet("ramen-name");
    const restaurantName = fastGet("restaurant-name");
    const ratingDisplay = fastGet("rating-display");
    const commentDisplay = fastGet("comment-display");
    
   
//changing each detail pulled from renderDetails per src(ramen) info
    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    ramenName.textContent = ramen.name;
    restaurantName.textContent = ramen.restaurant;
    ratingDisplay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;
}

//function for get element by ID
function fastGet(elementName) {
    return document.getElementById(elementName);
}

//createNewRamen function
function createNewRamen(e) {
    e.preventDefault();
    console.log(e.target['new-comment'].value)
    const newRamen = {
        name: e.target.name.value,
        rating: e.target.rating.value,
        restaurant: e.target.restaurant.value,
        comment: e.target['new-comment'].value,
        image: e.target.image.value,
    };

    e.target.reset()
    createRamen(newRamen);
}

