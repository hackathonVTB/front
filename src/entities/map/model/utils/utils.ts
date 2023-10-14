import MapBrowserEvent from 'ol/MapBrowserEvent';
import { toLonLat, transform } from 'ol/proj';
import { Point, LineString } from 'ol/geom';
import { Polyline } from 'ol/format';

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

const polyReader = new Polyline();
const parseRoute = (routes: any[]): LineString | null => {
  if (routes && routes.length > 0) {
    const f = polyReader.readFeature(routes[0].geometry);
    f.getGeometry()?.transform('EPSG:4326', 'EPSG:3857');
    return f.getGeometry() as LineString;
  }
  return null;
};

export const buildRoute = async (start: Point, finish: Point) => {
  if (start === null || finish === null) return Promise.resolve(null);
  const startCoords = transform(
    start.getCoordinates(),
    'EPSG:3857',
    'EPSG:4326',
  );
  const finishCoords = transform(
    finish.getCoordinates(),
    'EPSG:3857',
    'EPSG:4326',
  );

  const URL =
    'https://router.project-osrm.org/route/v1/driving/' +
    `${startCoords[0]},${startCoords[1]};${finishCoords[0]},${finishCoords[1]}`;

  return fetch(URL)
    .then((r) => r.json())
    .then((data) => parseRoute(data.routes));
};
