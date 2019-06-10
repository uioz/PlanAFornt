import Vue from "vue";
import {
  Button,
  Paper,
  Drawer,
  AppBar,
  TextField,
  Form,
  Grid,
  Checkbox,
  theme,
  Select
} from 'muse-ui';
import 'muse-ui/lib/styles/base.less';

theme.use('light');

Vue.use(Button);
Vue.use(Paper);
Vue.use(Drawer);
Vue.use(AppBar);
Vue.use(TextField);
Vue.use(Form);
Vue.use(Grid);
Vue.use(Checkbox);
Vue.use(Select);