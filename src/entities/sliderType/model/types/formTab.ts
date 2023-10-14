export enum SliderTabs {
  Closest = 'closest',
  FormTime = 'formTime',
  Menu = 'Menu',
}

export type TSliderTab =
  | SliderTabs.Closest
  | SliderTabs.FormTime
  | SliderTabs.Menu;
