import { LatLng } from 'leaflet';
import { Marker, useMapEvents } from 'react-leaflet';

/*
 * Adds a marker to a map
 * */
export default function AddMarker({ marker, setMarker }: { marker: LatLng; setMarker: (arg0: LatLng) => void }) {
  useMapEvents({
    click(event) {
      setMarker(event.latlng);
    },
  });
  return marker ? <Marker position={marker} /> : null;
}
