import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector("input[name = 'search-text']");

input.removeAttribute('required');

form.addEventListener('submit', handlerSubmitForm);

function handlerSubmitForm(event) {
  event.preventDefault();

  const query = input.value.trim().toLowerCase();

  if (!query) {
    iziToast.warning({
      // title: 'Caution',
      message: 'Please enter a search term!',
      position: 'topRight',
      theme: 'dark',
      backgroundColor: 'red',
    });
    return;
  }

  clearGallery();
  showLoader();

  setTimeout(() => {
    getImagesByQuery(query)
      .then(data => {
        if (!data.hits.length) {
          iziToast.warning({
            title: 'Caution',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            theme: 'dark',
            backgroundColor: 'red',
            messageSize: '16',
          });
          return;
        }
        createGallery(data.hits);
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: 'Something went wrong. Please try again later!',
          position: 'topRight',
          theme: 'dark',
          backgroundColor: 'red',
        });
      })
      .finally(() => {
        hideLoader();
        form.reset();
      });
  }, 0);
}
