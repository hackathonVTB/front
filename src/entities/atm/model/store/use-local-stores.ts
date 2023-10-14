import { createStoresContext } from '@/shared';
import { atmStore } from './atms.ts';

const store = { atmStore };

const useLocalStore = createStoresContext(store);

export { useLocalStore };
