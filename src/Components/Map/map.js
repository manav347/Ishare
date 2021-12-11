// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// const mapStyles = {
//     width: '350px',
//     height: '250px',
// };

// export class MapContainer extends Component {

//     static defaultProps = {
//         center: {
//             lat: 59.95,
//             lng: 30.33
//         },
//         zoom: 11,

//         a: "a",

//         z: "0",
//         lat: "0",
//         log: "0"
//     };
//     render() {


//         const { cord } = this.props;
//         if (cord !== null) {
//             if (cord[0]) {

//                 this.a = cord[0];
//                 console.log(this.a)
//                 this.a.split(",")
//                 this.z = this.a.split(",")
//                 console.log(this.a)
//                 this.lat = this.z[0]
//                 this.log = this.z[1]
//                 console.log(this.lat)
//                 console.log(this.log)
//             }
//         }

//         return (
//             <Map
//                 google={this.props.google}
//                 zoom={8}
//                 style={mapStyles}
//                 // width='100%'
//                 // height='100%'
//                 initialCenter={{ lat: this.lat, lng: this.log }}
//             >
//                 <Marker position={{ lat: this.lat, lng: this.log }} />
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

const AnyReactComponent = ({ text }) => <div style={{ color: "#ff0000", fontSize: "20px", fontWeight: "500" }}>{text}</div>;

class MapContainer extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11,

        a: "a",

        z: "0",
        lat: "",
        log: ""
    };

    render() {
        const { cord } = this.props;
        if (cord !== null) {
            console.log(cord)
            if (cord[0]) {

                this.a = cord[0];
                console.log(this.a)
                this.a.split(",")
                this.z = this.a.split(",")
                console.log(this.a)
                this.lat = this.z[0]
                this.log = this.z[1]
                console.log(this.lat)
                console.log(this.log)
            }
        }
        return (
            // Important! Always set the container height explicitly
            <DIV>
                {
                    this.lat && this.log &&
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDmVJbVb-btouc090vTNlprAfs-3A-hD24' }}
                        // defaultCenter={{ lat: 29.32, lng: 79.50 }}
                        center={{
                            lat:
                                Math.round(this.lat * 100) / 100,
                            lng:
                                Math.round(this.log * 100) / 100

                        }}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent

                            lat={this.lat}
                            lng={this.log}

                            // lat={59.955413}
                            // lng={30.337844}
                            text="SOS"
                        />
                    </GoogleMapReact>
                }
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