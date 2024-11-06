import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useEffect, useRef, useState } from "react";
import { useMapsComponentStyles } from "./maps-component-styles";

export const MapsComponent = () => {

    //AUX
    const classes = useMapsComponentStyles();

    //STATES E REFS
    const [map, setMap] = useState<google.maps.Map>();
    const ref = useRef<HTMLDivElement>();

    //LATITUDE E LONGITUDE
    const lat = -23.58395482285206;
    const lng = -46.573360517037955;

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center: { lat: lat, lng: lng },
                zoom: 15,
            }));
        }
    }, [lat, lng, map,]);

    useEffect(() => {
        const marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
        });

        let markers = [marker];

        new MarkerClusterer({ map: map, markers: markers });
    }, [lat, lng, map]);

    return (
        <>
            <div
                ref={ref as any}
                className={classes.root}
            >
            </div>
        </>
    );
}