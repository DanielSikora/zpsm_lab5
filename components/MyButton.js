/* eslint-disable */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MyButton = ({ button }) => {

    return(
        <TouchableOpacity style={[
            {backgroundColor: button.backgroundColor},
            {minWidth: button.minWidth} ]}
            onPress={button.onPress}
            disabled={button.disabled} >
            <Text style={[
                {color: button.color},
                {fontSize: button.fontSize},
                {textAlign: 'center'},
                {padding: button.padding},
                {borderWidth: 1},
                {borderColor: button.borderColor} ]} >
                {button.title}
            </Text>
        </TouchableOpacity>
    )
};

export default MyButton;
