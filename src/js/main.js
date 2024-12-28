import { initNavigation } from './navigation.js';
import { initGallery } from './gallery.js';
import { initContactForm } from './contact.js';
import { initAudioPlayer } from './modules/audioPlayer.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initGallery();
  initContactForm();
  initAudioPlayer();
});