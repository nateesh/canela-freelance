<script lang="ts">
  import type { LatLngExpression } from "leaflet";
  import Leaflet from "$lib/leaflet/Leaflet.svelte";
  import Marker from "$lib/leaflet/Marker.svelte";
  import Popup from "$lib/leaflet/Popup.svelte";

  const markerLocations: Array<LatLngExpression> = [
    [-27.465125, 152.9901072],
    [-27.4755125, 152.9850072],
    [-27.455125, 152.980072],
  ];

  const popupContent: Array<String> = [
    "ON THE WEB...",
    "IN REAL-TIME!",
    "VISUALISE YOUR DATA...",
  ];


  const averageLat =
    markerLocations.reduce(
      (acc, val) => acc + (val as [number, number])[0],
      0,
    ) / markerLocations.length;
    
  const averageLng =
    markerLocations.reduce(
      (acc, val) => acc + (val as [number, number])[1],
      0,
    ) / markerLocations.length;

  const initialView: LatLngExpression = [averageLat, averageLng];
</script>

<Leaflet view={initialView} zoom={12.5}>
  {#each markerLocations as location, index}
    <Marker latLng={location} width={40} height={40}>
      <!-- ShipBit Icon -->
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xml:space="preserve"
        fill="#000000"
        ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g><g id="SVGRepo_iconCarrier">
          <style type="text/css">
            .st0 {
              fill: #000000;
            }
          </style>
          <g>
            <path
              class="st0"
              d="M256,0C159.969,0,82.109,77.859,82.109,173.906c0,100.719,80.016,163.688,123.297,238.719 C246.813,484.406,246.781,512,256,512s9.188-27.594,50.594-99.375c43.297-75.031,123.297-138,123.297-238.719 C429.891,77.859,352.031,0,256,0z M256,240.406c-36.734,0-66.516-29.781-66.516-66.5c0-36.75,29.781-66.531,66.516-66.531 s66.516,29.781,66.516,66.531C322.516,210.625,292.734,240.406,256,240.406z"
            ></path>
          </g>
        </g></svg
      >

      <Popup>
        <strong class="text-lg">{popupContent[index]}</strong>
      </Popup>
    </Marker>
  {/each}
</Leaflet>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.background);
  }
</style>
