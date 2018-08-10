import { MenuItemType, MenuItem } from '@ngx-starter-kit/navigator';

export const defaultMenu: MenuItem[] = [
  {
    name: 'Home',
    icon: 'home',
    link: '/home'
  },
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard'
  },
  // {
  //   name: 'Custom components',
  //   type: SidenavItemType.Separator,
  // },
  {
    name: 'Grid',
    icon: 'insert_chart',
    disabled: false,
    children: [
      {
        name: 'CRUD Table',
        icon: 'web_aaset',
        link: '/dashboard/grid/crud-table'
      },
      {
        name: 'Grid List',
        icon: 'grid_on',
        link: '/dashboard/grid/grid-list'
      }
    ]
  },
  {
    name: 'Experiments',
    icon: 'pie_chart_outlined',
    disabled: false,
    children: [
      {
        name: 'Animations',
        icon: 'view_list',
        link: '/dashboard/experiments/animations'
      },
      {
        name: 'Upload',
        icon: 'directions',
        link: '/dashboard/experiments/file-upload'
      },
      {
        name: 'Context Menu',
        icon: 'web_aaset',
        link: '/dashboard/experiments/context-menu'
      },
      {
        name: 'Virtual Scroll',
        icon: 'view_list',
        link: '/dashboard/experiments/virtual-scroll'
      },
      {
        name: 'Sticky Table',
        icon: 'view_list',
        link: '/dashboard/experiments/table'
      }
    ]
  },
  {
    name: 'Multi-Level Menu',
    icon: 'menu',
    disabled: false,
    children: [
      {
        name: 'Level 1',
        link: '/level1',
        children: [
          {
            name: 'Level 2',
            link: '/level1/level2',
            children: [
              {
                name: 'Level 3',
                link: '/level1/level2/level3',
                children: [
                  {
                    name: 'Level 4',
                    link: '/level1/level2/level3/level4',
                    children: [
                      {
                        name: 'Level 5',
                        link: '/level1/level2/level3/level4/level5'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export const adminMenu: MenuItem[] = [
  {
    name: 'Dashboard',
    type: MenuItemType.DropDown,
    icon: 'dashboard',
    badge: { value: 1, color: 'accent' },
    tooltip: 'Dashboard',
    children: [
      {
        name: 'Dashboard',
        link: '/dashboard',
        icon: 'dashboard'
      },
      {
        name: 'Products',
        link: '/dashboard/products',
        icon: 'dashboard'
      },
      {
        name: 'Orders',
        link: '/dashboard/orders',
        icon: 'dashboard'
      }
    ]
  },
  {
    name: 'Custom components',
    type: MenuItemType.Separator
  }
];

export const demoMenu: MenuItem[] = [
  {
    name: 'Dashboard',
    type: MenuItemType.DropDown,
    icon: 'dashboard',
    badge: { value: 1, color: 'accent' },
    tooltip: 'Dashboard',
    children: [
      {
        name: 'Dashboard',
        link: '/dashboard',
        icon: 'dashboard'
      },
      {
        name: 'Products',
        link: '/dashboard/products',
        icon: 'dashboard'
      },
      {
        name: 'Orders',
        link: '/dashboard/orders',
        icon: 'dashboard'
      }
    ]
  },
  {
    name: 'Custom components',
    type: MenuItemType.Separator
  }
];
