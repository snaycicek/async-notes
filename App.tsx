import React, {Component} from 'react';
import {Text, View, Alert, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextBox, ButtonBox} from './ComponentCodes';
import ss from './StyleCodes';

const x = 'key0';

export default class App extends Component{

  state={
    inp:'',
    list:[],
  }

  saveList = ()=>{
   let hold:any = {inp:this.state.inp}
   let arrayx:any = this.state.list;
   arrayx.push(hold)
   AsyncStorage.setItem(x, JSON.stringify(arrayx))
   this.setState({inp:'', list: arrayx})
  }

  showList = async ()=> {
    let temp:any = await AsyncStorage.getItem(x)

    if(temp == null){
      Alert.alert('Listeniz Bos','Ana ekrandaki Kaydet butonu ile listeye yeni öge ekleyebilirsiniz.')
    }
    else Alert.alert('Kayitli Liste', temp)
  }

  componentDidMount = async ()=> {
    let values:any = await AsyncStorage.getItem(x);
    let valueParse = JSON.parse(values);

    if(values != null){
      this.setState({list: valueParse})
    }
  }

  render(){
    return(
      <View style={ss.container}>
        <View style={ss.topArea}>
          <View style={{marginBottom:7}}>
            <TextBox
              processing={(txt:any)=>this.setState({inp: txt})}
              showText=' Yapilacaklar'
              inputValue={this.state.inp}
            />
          </View>

          <View style={ss.buttonView}>
            <ButtonBox
              events={this.saveList}
              title='Kaydet'
            />

            <ButtonBox
              events={this.showList}
              title='Listeyi Görüntüle'
            />
          </View>
        </View>

        
        <View style={ss.bottomArea}>
          <ScrollView showsVerticalScrollIndicator={true}>
          {
            this.state.list.map((item:any, index) => (
              
              <View key={index} style={ss.listView}>
                <Text style={ss.mapList}>{index+1}</Text>
                <Text style={ss.mapText}>{item.inp}</Text>
              </View>
            ))
          }
          </ScrollView>
        </View>   

      </View>
    )
  }
}
