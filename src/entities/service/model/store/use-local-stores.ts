import { createStoresContext } from '@/shared';
import { serviceSelecterStore, objectForm } from './service-selecter.ts';

const store = { serviceSelecterStore, objectForm };

const useLocalStore = createStoresContext(store);

export { useLocalStore };
