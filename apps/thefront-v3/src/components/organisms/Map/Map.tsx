import React from "react"
import clsx from "clsx"
import dynamic from "next/dynamic"
import { makeStyles } from "@material-ui/core/styles"
// import markerIcon2x from "./leaflet-assets/marker-icon-2x.png"
// import markerIcon from "./leaflet-assets/marker-icon.png"
// import markerShadow from "./leaflet-assets/marker-shadow.png"
// import { ReactMap, TileLayer, Marker } from "leaflet"

// const L = dynamic(() => import("leaflet"), { ssr: false })

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%"
  }
}))

/**
 * Component to display the map
 *
 * @param {Object} props
 */
const Map = ({
  zoom = 10,
  center = [0, 0],
  pins,
  className,
  ...rest
}: MapProps): JSX.Element | null => {
  const classes = useStyles()

  React.useEffect(() => {
    // delete L.Icon.Default.prototype._getIconUrl
    // L.Icon.Default.mergeOptions({
    //   iconRetinaUrl: markerIcon2x,
    //   iconUrl: markerIcon,
    //   shadowUrl: markerShadow
    // })
  })

  if (typeof window === "undefined") {
    return null
  }

  return null

  // return (
  // <ReactMap
  //   zoom={zoom}
  //   center={center}
  //   className={clsx("map", classes.root, className)}
  //   {...rest}
  // >
  //   <TileLayer
  //     className="map__tile-layer"
  //     detectRetina={true}
  //     attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //   />
  //   {pins &&
  //     pins.length &&
  //     pins.map((item, i) => (
  //       <Marker
  //         className="map__marker"
  //         position={[item.location.y, item.location.x]}
  //         key={i}
  //       />
  //     ))}
  // </ReactMap>
  // )
}

export default Map
