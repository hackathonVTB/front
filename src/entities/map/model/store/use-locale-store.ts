import { createStoresContext } from '@/shared';
import * as stores from './geoObj';

const store = { ...stores };

const useLocalGeoStore = createStoresContext(store);

export { useLocalGeoStore };
