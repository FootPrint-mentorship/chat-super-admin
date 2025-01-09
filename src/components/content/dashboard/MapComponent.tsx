import {MapContainer, TileLayer, CircleMarker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {LatLngExpression} from "leaflet";
import Highcharts from 'highcharts/highmaps'
import HighchartsReact from 'highcharts-react-official'


interface Location {
    id: number;
    name: string;
    lat: number;
    lng: number;
}

const locations: Location[] = [
    {id: 1, name: "Project A", lat: -1.2921, lng: 36.8219},
    {id: 2, name: "Project B", lat: 6.5244, lng: 3.3792},
    {id: 3, name: "Project C", lat: 40.7128, lng: -74.006},
    {id: 4, name: "Project D", lat: -33.8688, lng: 151.2093},
];


// Set center (e.g., the center of your locations)
const center: LatLngExpression = [0, 0];


const MapComponent = ({topology}: {topology: any}        ) => {



    console.log(topology)


    const options =
        {
            chart: {
                map: topology,
                height: 500,
                backgroundColor: '#EFEFEF',
            },

            // colorAxis: {
            //     min: 0,
            //     stops: [
            //         [0, '#FFFFFF'],
            //         [0.5, '#FFCC00'],
            //         [1, '#FF0000']
            //         ]
            // },
            title: {
                text: '',
                align: 'left'
            },

            credits: {
                href: 'https://data.worldbank.org',
                mapText: ' Data source: The World Bank'
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            mapView: {
                projection: {
                    name: 'EqualEarth',
                },
            },
            data: {
                csv: '',
                seriesMapping: [{
                    code: 1,
                    value: 2
                }]
            },

            tooltip: {
                valueDecimals: 1,
                valueSuffix: ' years'
            },
            series: [
                {
                    mapData: topology,
                    name: 'Countries',
                    type: 'map',
                    joinBy: ['iso-a2', 'code'],
                    borderColor: '#cccccc',
                    borderWidth: 1,
                    color: {
                        pattern: {
                            path: {
                                d: 'M 0 0 L 10 10 M 10 0 L 0 10',
                                strokeWidth: 1,
                            },
                            width: 10,
                            height: 10,
                        },
                    },

                    nullColor: '#f7f7f7',

                    dataLabels: {
                        enabled: false,
                        format: '{point.name}',

                        style: {
                            fontWeight: 'normal'
                        }
                    }
                },
                {
                    type: 'mappoint',
                    name: 'Cities',
                    dataLabels: {
                        enabled: false,
                        format: '{point.id}'
                    },
                    marker: {
                        radius: 4,
                        fillColor: '#50b432',
                    },
                    tooltip: {
                        useHTML: true,
                        // pointFormat: '{point.name}',
                        pointFormat: `<div style="text-align: left;">  <strong>{point.name}</strong><br>
<span>📍 {point.lat}, {point.lon}</span>
    </div>
  `,
                    },
                    data: [
                        { name: 'USA', lat: 37.7749, lon: -122.4194 },
                        { name: 'France', lat: 48.8566, lon: 2.3522 },
                        { name: 'Nigeria', lat: 9.082, lon: 8.6753 },
                    ],
                }
            ]
        }


    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            constructorType={'mapChart'}

        />
        // <MapContainer
        //     center={center} // Set map center
        //     zoom={2} // Set an appropriate zoom level
        //     style={{ height: "500px", width: "100%" }}
        // >
        //     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution={undefined} />
        //     {locations.map((loc) => (
        //         <CircleMarker
        //             key={loc.id}
        //             center={[loc.lat, loc.lng] as LatLngExpression}
        //             radius={10}
        //             fillOpacity={0.5}
        //             color="green"
        //             fillColor="lime"
        //         >
        //             <Popup>
        //                 <strong>{loc.name}</strong>
        //             </Popup>
        //         </CircleMarker>
        //     ))}
        // </MapContainer>
    );
};

export default MapComponent;
