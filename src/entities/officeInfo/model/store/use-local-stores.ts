import * as stores from './officeInfo';
import { createStoresContext } from '@/shared';

const store = { ...stores };

const useLocalOfficeInfoStore = createStoresContext(store);

export { useLocalOfficeInfoStore };
