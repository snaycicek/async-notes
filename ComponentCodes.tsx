import React, {Component} from 'react';
import { TextInput, TouchableOpacity, Text} from 'react-native';
import ss from './StyleCodes';


export class TextBox extends Component<{processing:any, showText:any, inputValue:any}>{
    render(){
        return(
            <TextInput
              style={ss.txtinput}
              onChangeText={this.props.processing}
              placeholder={this.props.showText}
              value={this.props.inputValue}
            />
        )
    }
}

export class ButtonBox extends Component<{events:any, title:any}>{
    render(){
        return(
            <TouchableOpacity
              style={ss.buttonT}
              onPress={this.props.events}
            >
              <Text style={ss.txtbutton}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

