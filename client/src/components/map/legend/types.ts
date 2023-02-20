import { PropsWithChildren } from 'react';

import { DraggableAttributes } from '@dnd-kit/core';
import { SyntheticListeners } from '@dnd-kit/core/dist/hooks/utilities';

import { IconProps } from 'components/icon/types';

type Sortable = {
  enabled: boolean;
  handle?: boolean;
  handleIcon?: React.ReactNode;
};

type OnChangeOrder = (id: string[]) => void;
type OnChangeOpacity = (opacity: number, settings: Settings) => void;
type OnChangeVisibility = (visibility: boolean, settings: Settings) => void;
type OnChangeExpand = (expand: boolean, settings: Settings) => void;

export type Settings = {
  opacity: number;
  visibility: boolean;
  expand: boolean;
};

export type SettingsManager = {
  opacity: boolean;
  visibility: boolean;
  expand: boolean;
  info?: boolean;
};

export type LegendItemEvents = {
  onChangeOpacity?: OnChangeOpacity;
  onChangeVisibility?: OnChangeVisibility;
  onChangeExpand?: OnChangeExpand;
};
/*
 * Legend
 */
export interface LegendProps extends PropsWithChildren {
  className?: string;
  maxHeight: string | number;
  sortable?: Sortable;
  onChangeOrder?: OnChangeOrder;
}

export interface LegendItemProps extends PropsWithChildren, LegendItemEvents {
  id: string;
  name: string;
  className?: string;
  // sortable
  sortable?: Sortable;
  listeners?: SyntheticListeners;
  attributes?: DraggableAttributes;

  // settings
  settings?: Settings;
  settingsManager?: SettingsManager;
}

export interface LegendItemToolbarProps extends LegendItemEvents {
  className?: string;
  // settings
  settings?: Settings;
  settingsManager?: SettingsManager;
}

export interface LegendItemButtonProps {
  icon: IconProps['icon'];
  selected?: boolean;
  className?: string;
}

/*
 * Sortable
 */
export interface SortableListProps extends PropsWithChildren {
  className?: string;
  sortable: Sortable;
  onChangeOrder: OnChangeOrder;
}

export interface SortableItemProps extends PropsWithChildren {
  id: string;
  sortable: Sortable;
}
