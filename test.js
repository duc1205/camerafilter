import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class CameraFilter extends React.Component {
        camera = null;
        constructor(props) {
            super(props)
            this.state = {
                key: [],

            }

        }
        onPressButton1(key) {
            return 1
            console.log(key)
        };
        onPressButton2(key) {
            return 2
            console.log(key)
        };

        render() {

            const filters = () => {
               	switch (this.key) {
                    case 1:
                        return faces.map(face => < Glasses key = { face.faceID } face = { face } />)

                    case 2:
                        return faces.map(face => < Nose key = { face.faceID } face = { face } />)
					}
                }

              return (

        			<View>


           				 {filters()}

            			<Button
            				onPress={this.onPressButton1}
            				title="Press Me"
           				/>
            			<Button
            				onPress={this.onPressButton2}
            				title="Press Me"
            			/>


        			</View>



      );
    }
  }
