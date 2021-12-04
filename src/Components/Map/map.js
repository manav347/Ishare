// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// const mapStyles = {
//     width: '350px',
//     height: '250px',
// };

// export class MapContainer extends Component {
//     render() {
//         return (
//             <Map
//                 google={this.props.google}
//                 zoom={8}
//                 style={mapStyles}
//                 // width='100%'
//                 // height='100%'
//                 initialCenter={{ lat: 47.444, lng: -122.176 }}
//             >
//                 <Marker position={{ lat: 48.00, lng: -122.00 }} />
//             </Map>
//         );
//     }
// }

// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyDmVJbVb-btouc090vTNlprAfs-3A-hD24')
// })(MapContainer)


import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from "styled-components";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <DIV>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDmVJbVb-btouc090vTNlprAfs-3A-hD24' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </DIV>
        );
    }
}

export default MapContainer;


const DIV = styled.div`
width: 350px;
height: 250px;
@media (max-width: 480px) {
  width:100%;
  height: 20vh;
}
`;