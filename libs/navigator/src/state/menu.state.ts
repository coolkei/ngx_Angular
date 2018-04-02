import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { MenuItem } from '../models/menu-item.model';
import { MenuService } from '../services/menu.service';
import { Tree } from '@nx-starter-kit/tree';

export class InitializeData {
  constructor(public readonly payload: Tree<MenuItem>) {}
}

export class NextCurrentlyOpened {
  constructor(public readonly payload: MenuItem[]) {}
}

export class SetIconMode {
  constructor(public readonly payload: boolean) {}
}

export class ToggleCurrentlyOpened {
  constructor(public readonly payload: MenuItem) {}
}

export class ToggleCurrentlyOpenedByRoute {
  constructor(public readonly payload: string) {}
}

export interface MenuStateModel {
  tree: Tree<MenuItem>;
  currentlyOpened: MenuItem[];
  iconMode: boolean;
}

@State<MenuStateModel>({
  name: 'menu',
  defaults: {
    tree: null,
    currentlyOpened: [],
    iconMode: false
  }
})
export class MenuState {
  constructor(private store: Store, private menuService: MenuService) {
    const _tree = menuService.tree;
    setTimeout(() => {
      this.store.dispatch(new InitializeData(_tree));
    });
  }

  @Selector()
  static menuItems(state: MenuStateModel) {
    return state.tree.root.children;
  }

  @Selector()
  static currentlyOpened(state: MenuStateModel) {
    if (state.iconMode) {
      return [];
    } else {
      return state.currentlyOpened;
    }
  }

  private getParents(tree, item: MenuItem): MenuItem[] {
    const ancestors = tree.getAllParents(item);
    ancestors.shift();
    return ancestors;
  }

  @Action(InitializeData)
  initializeData({ setState }: StateContext<MenuStateModel>, { payload }: InitializeData) {
    setState({
      tree: payload,
      currentlyOpened: [],
      iconMode: false
    });
  }

  @Action(SetIconMode)
  setIconMode({ getState, patchState }: StateContext<MenuStateModel>, { payload }: SetIconMode) {
    patchState({
      iconMode: payload
    });
  }

  @Action(NextCurrentlyOpened)
  nextCurrentlyOpened({ getState, patchState }: StateContext<MenuStateModel>, { payload }: NextCurrentlyOpened) {
    patchState({
      currentlyOpened: payload
    });
  }

  @Action(ToggleCurrentlyOpened)
  toggleCurrentlyOpened({ getState, patchState }: StateContext<MenuStateModel>, { payload }: ToggleCurrentlyOpened) {
    let { tree, currentlyOpened } = getState();
    const isOpen = currentlyOpened.indexOf(payload) !== -1;

    if (isOpen) {
      if (currentlyOpened.length > 1) {
        currentlyOpened.length = currentlyOpened.indexOf(payload);
      } else {
        currentlyOpened = [];
      }
    } else {
      currentlyOpened = this.getParents(tree, payload);
    }

    patchState({
      currentlyOpened: currentlyOpened
    });
  }

  @Action(ToggleCurrentlyOpenedByRoute)
  toggleCurrentlyOpenedByRoute(
    { getState, patchState }: StateContext<MenuStateModel>,
    { payload }: ToggleCurrentlyOpenedByRoute
  ) {
    const { tree } = getState();
    let currentlyOpened: MenuItem[] = [];

    const item = tree.findByPredicateBFS(node => {
      return node.link === payload;
    });

    if (item && item.parent) {
      currentlyOpened = this.getParents(tree, item);
    } else if (item) {
      currentlyOpened = [item];
    }

    patchState({
      currentlyOpened: currentlyOpened
    });
  }
}
