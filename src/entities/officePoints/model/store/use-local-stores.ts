import * as stores from './officePoints';
import { createStoresContext } from '@/shared';

const store = { ...stores };

const useLocalPointsStore = createStoresContext(store);

export { useLocalPointsStore };
