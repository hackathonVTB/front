import MapBrowserEvent from 'ol/MapBrowserEvent';
import { toLonLat } from 'ol/proj';

export const createExtent = (e: MapBrowserEvent<UIEvent>) => {
  const onePart = toLonLat([
    e.target.frameState_.extent[0],
    e.target.frameState_.extent[1],
  ]);
  const secPart = toLonLat([
    e.target.frameState_.extent[2],
    e.target.frameState_.extent[3],
  ]);

  return [...onePart, ...secPart];
};
