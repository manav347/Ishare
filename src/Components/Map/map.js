import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '350px',
    height: '250px',
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                // width='100%'
                // height='100%'
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            >
                <Marker position={{ lat: 48.00, lng: -122.00 }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDmVJbVb-btouc090vTNlprAfs-3A-hD24')
})(MapContainer)

// import React from "react";
// import GoogleMapReact from "google-map-react";

// // implementation of this function is needed for codesandbox example to work
// // you can remove it otherwise
// const distanceToMouse = (pt, mp) => {
//     if (pt && mp) {
//         // return distance between the marker and mouse pointer
//         return Math.sqrt(
//             (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
//         );
//     }
// };

// const points = [
//     { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 }
// ];

// export default function MapContainer() {
//     return (
//         <div className="App">
//             <GoogleMapReact
//                 bootstrapURLKeys={{
//                     // remove the key if you want to fork
//                     key: "AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo",
//                     language: "en",
//                     region: "US"
//                 }}
//                 defaultCenter={{ lat: 51.506, lng: -0.169 }}
//                 defaultZoom={15}
//                 distanceToMouse={distanceToMouse}
//             >
//                 {points.map(({ lat, lng, id, title }) => {
//                     return (
//                         <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
//                     );
//                 })}
//             </GoogleMapReact>
//         </div>
//     );
// }




// const MyMarker = ({ text, tooltip }) => (
//     <div className="circle">
//         <span className="circleText" title={tooltip}>
//             {text}
//         </span>
//     </div>
// );
