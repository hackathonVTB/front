import { createStoresContext } from '@/shared';
import { atmStore } from './atms.ts';

const store = { atmStore };

const useLocalAtmStore = createStoresContext(store);

export { useLocalAtmStore };
