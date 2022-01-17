import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import CustomMapMarker from "./CustomMapMarker";
import { LatLngTuple } from "leaflet";
import randomColor from "randomcolor";
import type { Guess, LobbyPlayer } from "../backend/model";
import { TARGET_MARKER_COLOR } from "../Utils/theme";

type resultType = {
  guess?: Guess | null;
  lobbyPlayer?: LobbyPlayer | null;
};

export default function MapWithResults({ target, results }: { target: LatLngTuple; results: resultType[] }) {
  return (
    <MapContainer center={[0, 0]} style={{ width: "100%", height: "100%" }} zoom={2}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <CustomMapMarker position={target} color={TARGET_MARKER_COLOR} tooltip={"Target"} />
      {results
        .filter(r => r?.guess?.latitude !== null)
        .map(r => {
          const pos: LatLngTuple = [r?.guess?.latitude ?? 0, r?.guess?.longitude ?? 0];
          return [
            <CustomMapMarker
              key={r.lobbyPlayer?.player?.id}
              position={pos}
              color={randomColor({
                luminosity: "dark",
                seed: r?.lobbyPlayer?.player?.id
              })}
              tooltip={r?.lobbyPlayer?.player?.name ?? undefined}
            />,
            <Polyline key={pos.toString() + target.toString()} positions={[pos, target]} />
          ];
        })}
    </MapContainer>
  );
}
