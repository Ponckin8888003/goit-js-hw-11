import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

let form = document.querySelector('.form');
let searchText = document.querySelector("input[name='search-text']");
form.addEventListener('submit', event => {
  event.preventDefault();

  if (searchText.value.trim() === '') {
    iziToast.error({
      title: '',
      message: 'Please enter a search query ',
    });
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(searchText.value.trim())
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        createGallery(data.hits);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
});
