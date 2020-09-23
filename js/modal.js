function Gallery(gallery) {
  if (!gallery) {
    throw Error('No gallery found');
  }

  // Grab some elements that are going to be used.
  const images = Array.from(gallery.querySelectorAll('figure img'));
  const outerModal = document.querySelector('.outer_modal');
  const prevBttn = outerModal.querySelector('.previous');
  const nextBttn = outerModal.querySelector('.next');

  let currentImage;

  // Handle outside clicking.
  function handleClickOutside(e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  // Open the modal.
  function openModal() {
    if (outerModal.matches('.open')) {
      return;
    }
    outerModal.classList.add('open');

    // Event listeners to listen for clicks.
    window.addEventListener('keyup', handleKeyUp);
    nextBttn.addEventListener('click', showNextImage);
    outerModal.addEventListener('click', handleClickOutside);
    prevBttn.addEventListener('click', showPrevImage);
  }

  // Close the modal.
  function closeModal() {
    outerModal.classList.remove('open');

    // Event listeners to listen for clicks.
    window.addEventListener('keyup', handleKeyUp);
    nextBttn.addEventListener('click', showNextImage);
    outerModal.addEventListener('click', handleClickOutside);
    prevBttn.addEventListener('click', showPrevImage);
  }

  // Show the next image.
  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    console.log(showImage);
  }

  // Show the previous image.
  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    console.log(showImage);
  }

  // Handle some keys.
  function handleKeyUp(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
    if (e.key === 'ArrowRight') {
      showNextImage();
    }
    if (e.key === 'ArrowLeft') {
      showPrevImage();
    }
  }

  // Show the images.
  function showImage(element) {
    if (!element) {
      return;
    }

    console.log(element);
    outerModal.querySelector('img').src = element.src;
    currentImage = element;
    openModal();
  }

  // Loop over each image.
  images.forEach(image => {
    image.addEventListener('click', (e) => showImage(e.currentTarget));
  });

  // Loop over each image.
  images.forEach(image => { 
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    });
  });

}


const image = Gallery(document.querySelector('.beauty__gallery'));