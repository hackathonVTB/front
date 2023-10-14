import { sliderTabsStore } from './sliderTab.ts';
import { createStoresContext } from '@/shared';
const store = { sliderTabsStore };

const useLocalTabStore = createStoresContext(store);

export { useLocalTabStore };
