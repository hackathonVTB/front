import { officesStore } from './offices.ts';
import { createStoresContext } from '@/shared';
const store = { officesStore };

const useLocalStore = createStoresContext(store);

export { useLocalStore };
