import Vue from "vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars,faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(
  faBars,
  faEllipsisV
);

Vue.component('font-awesome-icon', FontAwesomeIcon);