var images = [

    {caption:"lardo", url:"https://www.sunnyskyz.com/uploads/2013/09/bu7j0-fat-raccoon.jpg"},

    {caption:"peekaboo", url:"https://www.walkingmountains.org/wp-content/uploads/2015/04/Raccoon-1-300x250.jpg"},

    {caption:"hugs", url:"https://static.boredpanda.com/blog/wp-content/uploads/2017/06/59561066699cf_Rc7GiRs__700.jpg"},

];



var container = $('.image-list');



images.forEach(function(currentImageInModal) {
    
    var newImage = $('<img>');

    newImage.attr('src', currentImageInModal.url);

    var caption = $('<p>');

    caption.textContent = currentImageInModal.caption;

    var listItem = $('<li>');

    listItem.append(newImage);

    listItem.append(caption);

    container.append(listItem);

    var button = $('.trigger');

    var openNewImageInModal = function () {
        var imgContainer = $('.img-container');
        imgContainer.addClass('show');
        var img = $('.newImg');
        img.attr('src', currentImageInModal.url)

    }

    button.on("click", openNewImageInModal)  
})




/*var modalStuff = .$('.modal-img') 
    modalStuff = */