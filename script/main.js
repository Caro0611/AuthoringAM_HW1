(function(){
var theImages = document.querySelectorAll('.image-holder'),
    theHeading = document.querySelector('.heading'),
    theSubhead = document.querySelector('.main-copy h2'),
    theSeasonText = document.querySelector('.main-copy p'),
    appliedClass;

    //I want to change all the content on the page
    function changeElements(){
      //debugger; // this is a special term that stops code execution. like a pause.para testear q funciona
      let subImages = document.querySelector('.subImagesContainer');
      let objectIndex = dynamicContent[this.id];

      //remove duplicate img
      while (subImages.firstChild){
        subImages.removeChild(subImages.firstChild);
      }

      //add the img to the bottom of the page
      objectIndex.images.forEach(function(image, index){

        //create an img element
        let newSubImg = document.createElement('img');

        //add a css class to it
        newSubImg.classList.add('thumb');

        //set the src
        newSubImg.src = "images/" + objectIndex.images[index];

        //add some data to the thumbnail
        newSubImg.dataset.index = index;

        //add an event handler to trigger a lightbox
        newSubImg.addEventListener('click', function() {popLightbox(index, objectIndex); }, false);


        //add it to he page
        subImages.appendChild(newSubImg);
      });


      //remove the colors we applies on last click
      theSubhead.classList.remove(appliedClass);
      theHeading.classList.remove(appliedClass);
      //change the text using the values of the properties in the object

      theSubhead.firstChild.nodeValue = objectIndex.headline;
      theSeasonText.firstChild.nodeValue = objectIndex.text;
      //add the color that corresponds to the seaon we clicked on

      theSubhead.classList.add(this.id);
      theHeading.classList.add(this.id);

      appliedClass = this.id;

    }

    //for (i=0; i<someht; i++) {} asi se haria antes hay una mas facil:
    theImages.forEach(function(image, index){
    //add an event handler to each image
    image.addEventListener('click', changeElements, false);
  });

  //trigger the lightbox
  function popLightbox(currentIndex, currentObject){
    debugger;

    //quick scroll fix to make lightbox cover everything
    window.scrollTo(0, 0);
    //trigger the lightbox overlay so that we can see it
    let lightbox = document.querySelector('.lightbox');
    let lightboxImg = lightbox.querySelector('img');
    let lightboxDesc = lightbox.querySelector('p');
    let lightboxClose = lightbox.querySelector('.close-lightbox');

    //put the data to the loghtbox elements
    lightboxImg.src = "images/" + currentObject.images[currentIndex];
    lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];

    lightbox.style.display = 'block';

    //wire up the close button
    lightboxClose.addEventListener('click', closeLightbox, false);

  }

  function closeLightbox(){
    debugger;
    //reset and close the lightbox- empty contents, reset the img src and the description text to nothing
  }

  //document.querySelector('#spring').click();
  changeElements.call(document.querySelector('#spring'));
  })();
