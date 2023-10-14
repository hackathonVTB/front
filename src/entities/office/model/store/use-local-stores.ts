import { officesStore } from './offices.ts';
import { createStoresContext } from '@/shared';
const store = { officesStore };

const useLocalOfficeStore = createStoresContext(store);

export { useLocalOfficeStore };
