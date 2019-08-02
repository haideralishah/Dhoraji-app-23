import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
// import * as Permissions from 'expo-permissions';
import { Camera, Permissions } from 'expo';

export default class CameraExample extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => {
                        this.camera = ref;
                    }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity style={{
                                flex: 0.1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }} onPress={
                                async () => {
                                    if (this.camera) {
                                        let photo = await this.camera.takePictureAsync();
                                        console.log(photo)
                                    }
                                }
                            }>
                                <Text style={{
                                    color: "red",
                                    fontSize: 20
                                }}>
                                    Take Picture.
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}