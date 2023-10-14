import { Point, Geometry, Polygon } from 'ol/geom';
import { Geolocation as OLGeoLoc } from 'ol';
import { Coordinate } from 'ol/coordinate';
import 'ol/ol.css';

import { RLayerVector, RFeature, RGeolocation, RStyle, useOL } from 'rlayers';
import { useLocalGeoStore } from '@/entities/map/model/store';
import { useCallback } from 'react';

const Geoloc = () => {
  const { geoStore } = useLocalGeoStore();

  const { map } = useOL();

  return (
    <>
      <RGeolocation
        tracking={true}
        trackingOptions={{ enableHighAccuracy: true }}
        onChange={useCallback(
          (e: any) => {
            const geoloc = e.target as OLGeoLoc;
            geoStore.setGeoPos(
              new Point(geoloc.getPosition() as Coordinate),
              geoloc.getAccuracyGeometry() as Geometry,
            );

            map.getView().fit(geoloc.getAccuracyGeometry() as Polygon, {
              duration: 250,
              maxZoom: 15,
            });
          },
          [map],
        )}
      />
      <RLayerVector zIndex={10}>
        <RStyle.RStyle>
          <RStyle.RStroke
            color={'#007bff'}
            width={3}
          />
        </RStyle.RStyle>
        <RFeature geometry={geoStore.pos}></RFeature>
        <RFeature geometry={geoStore.accuracy}></RFeature>
      </RLayerVector>
    </>
  );
};

export default Geoloc;
