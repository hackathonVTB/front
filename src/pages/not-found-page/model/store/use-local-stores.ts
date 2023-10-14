import { createStoresContext } from '@/shared';
import { serviceSelecterStore } from './service-selecter.ts';

const store = { serviceSelecterStore };

const useLocalStore = createStoresContext(store);

export { useLocalStore };
