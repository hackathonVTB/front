import { makeAutoObservable } from 'mobx';
import { SliderTabs, TSliderTab } from '../types/formTab';

class SliderTabsStore {
  sliderTabs: TSliderTab = SliderTabs.Menu;

  constructor() {
    makeAutoObservable(this);
  }

  setSliderTabs(tab: TSliderTab) {
    this.sliderTabs = tab;
  }
}

const sliderTabsStore = new SliderTabsStore();

export { sliderTabsStore };
