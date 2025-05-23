import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapWithClusters"), {
  ssr: false,
});

export { MapComponent };
