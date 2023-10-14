import { createStoresContext } from '@/shared';
import * as stores from './store';

const store = { ...stores };

const useTogleLocalStore = createStoresContext(store);

export { useTogleLocalStore };
