import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';

const Map: React.FC = () => {
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        // Initialize the map only if it hasn't been initialized
        if (!mapRef.current) {
            const map = L.map('map', {
                center: [9.082, 8.6753], // Centered on Nigeria
                zoom: 6,
            });

            // Store the map instance in the ref
            mapRef.current = map;

            // Add OpenStreetMap tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            // Heatmap data ([latitude, longitude, intensity])
            const heatmapData: [number, number, number][] = [
                [9.082, 8.6753, 0.8], // Nigeria
                [6.5244, 3.3792, 0.5], // Lagos
                [10.8231, 106.6297, 0.7], // Sample point
            ];

            // Add heatmap layer
            (L as any).heatLayer(heatmapData, {
                radius: 25,
                blur: 15,
                maxZoom: 17,
                gradient: {
                    0.1: 'blue',
                    0.5: 'lime',
                    1.0: 'red',
                },
            }).addTo(map);

            // Add markers (optional)
            const markers: { lat: number; lon: number; name: string }[] = [
                { lat: 9.082, lon: 8.6753, name: 'Point 1' },
                { lat: 6.5244, lon: 3.3792, name: 'Point 2' },
            ];

            markers.forEach((marker) => {
                L.circleMarker([marker.lat, marker.lon], {
                    radius: 8,
                    fillColor: '#FF0000',
                    color: '#000',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8,
                })
                    .bindPopup(marker.name)
                    .addTo(map);
            });
        }

        // Cleanup function to destroy the map when the component unmounts
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <div
            id="map"
            style={{
                height: '600px',
                width: '100%',
            }}
        ></div>
    );
};

export default Map;
