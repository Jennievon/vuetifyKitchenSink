import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Youtube from '../views/Youtube.vue';
import GoogleKeep from '../views/GoogleKeep.vue';
import MainApp from '../views/MainApp.vue';
import GoogleContacts from '../views/GoogleContacts.vue';
import LoginForm from '../views/LoginForm.vue';
import Elements from '../views/Elements.vue';
import DoubleSideBar from '../views/DoubleSideBar.vue';
import SimpleApp from '../views/SimpleApp.vue';
import Alerts from '../components/Elements/Alerts/All.vue';
import AppBars from '../components/Elements/AppBars/All.vue';
import Autocomplete from '../components/Elements/Autocomplete/All.vue';
import Avatars from '../components/Elements/Avatars/All.vue';
import Badges from '../components/Elements/Badges/All.vue';
import Banners from '../components/Elements/Banners/All.vue';
import BottomNav from '../components/Elements/BottomNav/All.vue';
import VirtualScrollers from '../components/Elements/VirtualScrollers/All.vue';
import Treeview from '../components/Elements/Treeview/All.vue';
import ToolTips from '../components/Elements/Tooltips/All.vue';
import Toolbars from '../components/Elements/Toolbars/All.vue';
import Timepickers from '../components/Elements/TimePickers/All.vue';
import Timelines from '../components/Elements/Timelines/All.vue';
import TextFields from '../components/Elements/TextFields/All.vue';
import TextAreas from '../components/Elements/TextAreas/All.vue';
import Tabs from '../components/Elements/Tabs/All.vue';
import SystemBars from '../components/Elements/SystemBars/All.vue';
import Subheaders from '../components/Elements/Subheaders/All.vue';
import Steppers from '../components/Elements/Steppers/All.vue';
import Sparklines from '../components/Elements/Sparklines/All.vue';
import Snackbars from '../components/Elements/Snackbars/All.vue';
import Sliders from '../components/Elements/Sliders/All.vue';
import SkeletonLoaders from '../components/Elements/SkeletonLoaders/All.vue';
import Sheets from '../components/Elements/Sheets/All.vue';
import Selects from '../components/Elements/Selects/All.vue';
import SelectionControls from '../components/Elements/SelectionControls/All.vue';
import Ratings from '../components/Elements/Ratings/All.vue';
import Pagination from '../components/Elements/Paginations/All.vue';
import Parallax from '../components/Elements/Parallax/All.vue';
import Overlays from '../components/Elements/Overlays/All.vue';
import Carousels from '../components/Elements/Carousels/All.vue';
import Cards from '../components/Elements/Cards/All.vue';
import OverflowButtons from '../components/Elements/OverflowButtons/All.vue';
import NavDrawers from '../components/Elements/NavDrawers/All.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Alerts,
    meta: {
      title: 'VJS Docs',
      metaTags: [
        {
          name: 'description',
          content: 'Vuetify JS Component Library'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/directives',
    name: 'Directives',
    component: Home
  },
  {
    path: '/border',
    name: 'Border',
    component: Home
  },
  {
    path: '/content',
    name: 'Content',
    component: Home
  },
  {
    path: '/elevation',
    name: 'Elevation',
    component: Home
  },
  {
    path: '/flex',
    name: 'Flex',
    component: Home
  },
  {
    path: '/float',
    name: 'Float',
    component: Home
  },
  {
    path: '/motion',
    name: 'Motion',
    component: Home
  },
  {
    path: '/spacing',
    name: 'Spacing',
    component: Home
  },
  {
    path: '/text',
    name: 'Text',
    component: Home
  },
  {
    path: '/programmaticScrolling',
    name: 'Scrolling',
    component: Home
  },
  {
    path: '/sandbox',
    name: 'Sandbox',
    component: Home
  },
  {
    path: '/layouts/contacts',
    name: 'Contacts',
    component: Home
  },
  {
    path: '/layouts/keep',
    name: 'GoogleKeep',
    component: Home
  },
  {
    path: '/layouts/login',
    name: 'Login',
    component: Home
  },
  {
    path: '/layouts/simple',
    name: 'Simple',
    component: Home
  },
  {
    path: '/layouts/youtube',
    name: 'Youtube',
    component: Home
  },
  {
    path: '/layouts/sidebars',
    name: 'Sidebars',
    component: Home
  },
  {
    path: '/sandboxes',
    name: 'Sandbox',
    component: Home
  },
  {
    path: '/elements/alerts',
    name: 'Alerts',
    component: Alerts
  },
  {
    path: '/elements/appbars',
    name: 'AppBars',
    component: AppBars
  },
  {
    path: '/elements/autocomplete',
    name: 'Autocomplete',
    component: Autocomplete
  },
  {
    path: '/elements/avatars',
    name: 'Avatars',
    component: Avatars
  },
  {
    path: '/elements/badges',
    name: 'Badges',
    component: Badges
  },
  {
    path: '/elements/banners',
    name: 'Banners',
    component: Banners
  },
  {
    path: '/elements/bottomnavs',
    name: 'BottomNav',
    component: BottomNav
  },
  {
    path: '/elements/bottomSheets',
    name: 'BottomSheets',
    component: Home
  },
  {
    path: '/elements/breadcrumbs',
    name: 'BreadCrumbs',
    component: Home
  },
  {
    path: '/elements/buttons',
    name: 'Buttons',
    component: Home
  },
  {
    path: '/elements/calendars',
    name: 'Calendars',
    component: Home
  },
  {
    path: '/elements/cards',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/elements/carousels',
    name: 'Carousels',
    component: Carousels
  },
  {
    path: '/elements/chips',
    name: 'Chips',
    component: Home
  },
  {
    path: '/elements/circularprogress',
    name: 'CircularProgress',
    component: Home
  },
  {
    path: '/elements/colorpickers',
    name: 'ColorPickers',
    component: Home
  },
  {
    path: '/elements/combobox',
    name: 'Combobox',
    component: Home
  },
  {
    path: '/elements/datepickers',
    name: 'DatePickers',
    component: Home
  },
  {
    path: '/elements/dialogs',
    name: 'Dialogs',
    component: Home
  },
  {
    path: '/elements/dividers',
    name: 'Dividers',
    component: Home
  },
  {
    path: '/elements/expansionPanels',
    name: 'ExpansionPanels',
    component: Home
  },
  {
    path: '/elements/fabButtons',
    name: 'FAB',
    component: Home
  },
  {
    path: '/elements/fileInputs',
    name: 'FileInputs',
    component: Home
  },
  {
    path: '/elements/footer',
    name: 'Footer',
    component: Home
  },
  {
    path: '/elements/forms',
    name: 'Forms',
    component: Home
  },
  {
    path: '/elements/grids',
    name: 'Grids',
    component: Home
  },
  {
    path: '/elements/groupButtons',
    name: 'GroupButtons',
    component: Home
  },
  {
    path: '/elements/groupChips',
    name: 'GroupChips',
    component: Home
  },
  {
    path: '/elements/groupItems',
    name: 'GroupItems',
    component: Home
  },
  {
    path: '/elements/groupListItems',
    name: 'GroupListItems',
    component: Home
  },
  {
    path: '/elements/groupSlides',
    name: 'GroupSlides',
    component: Home
  },
  {
    path: '/elements/groupWindows',
    name: 'GroupWindows',
    component: Home
  },
  {
    path: '/elements/hover',
    name: 'Hover',
    component: Home
  },
  {
    path: '/elements/icons',
    name: 'Icons',
    component: Home
  },
  {
    path: '/elements/images',
    name: 'Images',
    component: Home
  },
  {
    path: '/elements/inputs',
    name: 'Inputs',
    component: Home
  },
  {
    path: '/elements/lazy',
    name: 'Lazy',
    component: Home
  },
  {
    path: '/elements/linearProgress',
    name: 'LinearProgress',
    component: Home
  },
  {
    path: '/elements/lists',
    name: 'Lists',
    component: Home
  },
  {
    path: '/elements/menus',
    name: 'Menus',
    component: Home
  },
  {
    path: '/elements/navdrawers',
    name: 'NavDrawers',
    component: NavDrawers
  },
  {
    path: '/elements/overflowbuttons',
    name: 'OverflowButtons',
    component: OverflowButtons
  },
  {
    path: '/elements/overlays',
    name: 'Overlays',
    component: Overlays
  },
  {
    path: '/elements/pagination',
    name: 'Paginations',
    component: Pagination
  },
  {
    path: '/elements/parallax',
    name: 'Parallax',
    component: Parallax
  },
  {
    path: '/elements/ratings',
    name: 'Ratings',
    component: Ratings
  },
  {
    path: '/elements/selectioncontrols',
    name: 'SelectionControls',
    component: SelectionControls
  },
  {
    path: '/elements/selects',
    name: 'Selects',
    component: Selects
  },
  {
    path: '/elements/sheets',
    name: 'Sheets',
    component: Sheets
  },
  {
    path: '/elements/skeletonloaders',
    name: 'SkeletonLoaders',
    component: SkeletonLoaders
  },
  {
    path: '/elements/sliders',
    name: 'Sliders',
    component: Sliders
  },
  {
    path: '/elements/snackbars',
    name: 'Snackbars',
    component: Snackbars
  },
  {
    path: '/elements/sparklines',
    name: 'Sparklines',
    component: Sparklines
  },
  {
    path: '/elements/steppers',
    name: 'Steppers',
    component: Steppers
  },
  {
    path: '/elements/subheaders',
    name: 'Subheaders',
    component: Subheaders
  },
  {
    path: '/elements/systembars',
    name: 'SystemBars',
    component: SystemBars
  },
  {
    path: '/elements/tables',
    name: 'Tables',
    component: Home
  },
  {
    path: '/elements/tabs',
    name: 'Tabs',
    component: Tabs
  },
  {
    path: '/elements/textareas',
    name: 'TextAreas',
    component: TextAreas
  },
  {
    path: '/elements/textfields',
    name: 'Textfields',
    component: TextFields
  },
  {
    path: '/elements/timelines',
    name: 'Timelines',
    component: Timelines
  },
  {
    path: '/elements/timepickers',
    name: 'Timepickers',
    component: Timepickers
  },
  {
    path: '/elements/toolbars',
    name: 'Toolbars',
    component: Toolbars
  },
  {
    path: '/elements/tooltips',
    name: 'Tooltips',
    component: ToolTips
  },
  {
    path: '/elements/treeview',
    name: 'Treeview',
    component: Treeview
  },
  {
    path: '/elements/virtualscrollers',
    name: 'Virtual Scrollers',
    component: VirtualScrollers
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: Youtube
  },
  {
    path: '/simple',
    name: 'Simple',
    component: SimpleApp
  },
  {
    path: '/double',
    name: 'Double',
    component: DoubleSideBar
  },
  {
    path: '/main',
    name: 'MainApp',
    component: MainApp
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: GoogleContacts
  },
  {
    path: '/keep',
    name: 'Keep',
    component: GoogleKeep
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/elements',
    name: 'Elements',
    component: Elements
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
