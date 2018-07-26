var images = [

    {caption:"lardo", url:"https://www.sunnyskyz.com/uploads/2013/09/bu7j0-fat-raccoon.jpg"},

    {caption:"peekaboo", url:"https://www.walkingmountains.org/wp-content/uploads/2015/04/Raccoon-1-300x250.jpg"},

    {caption:"hugs", url:"https://static.boredpanda.com/blog/wp-content/uploads/2017/06/59561066699cf_Rc7GiRs__700.jpg"},

];



var container = document.querySelector('.image-list');



images.forEach(function(currentImageInModal) {
    
    var newImage = document.createElement('img');

    newImage.setAttribute('src', currentImageInModal.url);

    var caption = document.createElement('p');

    caption.textContent = currentImageInModal.caption;

    var listItem = document.createElement('li');

    listItem.appendChild(newImage);

    listItem.appendChild(caption);

    container.appendChild(listItem);

    var button = document.querySelector('.trigger');

    var openNewImageInModal = function () {
        var imgContainer = document.querySelector('.img-container');
        imgContainer.classList.add('show');
        var img = document.querySelector('.newImg');
        img.setAttribute('src', currentImageInModal.url)

    }

    button.addEventListener("click", openNewImageInModal)  
})




/*var modalStuff = document.querySelector('.modal-img') 
    modalStuff = */