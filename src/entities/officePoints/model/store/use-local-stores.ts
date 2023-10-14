import * as stores from './officePoints';
import { createStoresContext } from '@/shared';

const store = { ...stores };

const useLocalStore = createStoresContext(store);

export { useLocalStore };
