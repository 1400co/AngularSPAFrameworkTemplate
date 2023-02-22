import { MenuItem } from "src/oruedar-fw/services/menu-service";

/**
 * Array of (nested / recursive) menu items with optional sub-menus.
 *      Note: Route should be null when item has a sub-menu.
 *      Note: If route is not null, the sub-menu should be null.
 *      TODO: Generate this dynamically with CMS data.
 */
export let initialMenuItems: Array<MenuItem> = [
  {
    text: 'Dashboard',
    icon: 'faGauge',
    // route: 'authenticated/dashboard',
    route: '/dashboard',
    submenu: null
  },
  {
    text: 'Countries',
    icon: 'faCaretDown',
    route: null,
    //route: '/countries',
    submenu: [
      {
        text: 'Select',
        icon: 'faCaretDown',
        route: null,
        submenu: [
          {
            text: 'USA',
            icon: 'faFlag',
            // route: 'authenticated/country-detail/USA',
            route: '/country-detail/USA',
            submenu: null
          },
          {
            text: 'India',
            icon: 'faFlag',
            // route: 'authenticated/country-detail/India',
            route: '/country-detail/India',
            submenu: null
          },
          {
            text: 'Switzerland',
            icon: 'faFlag',
            route: '/country-detail/Switzerland',
            // route: 'authenticated/country-detail/Switzerland',
            submenu: null
          }
        ]
      },
      {
        text: 'Top 3',
        icon: 'faFlag',
        // route: 'authenticated/country-list/3',
        route: '/country-list/3',
        submenu: null
      },
      {
        text: 'Top 10',
        icon: 'faFlag',
        // route: 'authenticated/country-list/10',
        route: '/country-list/10',
        submenu: null
      },
      {
        text: 'All',
        icon: 'faFlag',
        // route: 'authenticated/country-list/0',
        route: '/country-list/0',
        submenu: null
      }
    ]
  },
  {
    text: 'Maintenance',
    icon: 'faCaretDown',
    route: null,
    //route: '/settings',
    submenu: [
      {
        text: 'Country List',
        icon: 'fa-th-list',
        // route: 'authenticated/country-maint',
        route: '/country-maint',
        submenu: null
      },
      {
        text: 'Settings',
        icon: 'fa-wrench',
        // route: 'authenticated/settings',
        route: '/settings',
        submenu: null
      }
    ]
  }
];
