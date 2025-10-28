import { StyleSheet } from 'react-native';

const ss = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#303036',
      //backgroundColor:'#3e3e28',
      padding:10,
    },
    
    txtinput:{
      backgroundColor:'#cccccc65',
      width:'100%',
      height:50,
      borderRadius:12,
      fontSize:18,
    },
  
    buttonView:{
      flexDirection:'row',
      marginBottom:7,
      justifyContent:'space-between',
    },
  
    buttonT:{
      width:'48%',
      height:40,
      backgroundColor:'pink',
      borderRadius:12,
      justifyContent:'center',
      alignItems:'center',
    },
  
    txtbutton:{
      fontSize:17,
      fontWeight:'bold',
      color:'#303036',
    },
    
    topArea:{
      flex:1,
    },
    
    bottomArea:{
      flex:5,
      //backgroundColor:'#cccccc65',
      backgroundColor:'#00000065',
      borderRadius:12,

    },
    text:{
      fontSize:23,
      color:'white',
    },

    mapList:{
      fontSize:20,
      color:'#ffff0090',
      fontWeight:'bold',
      marginRight:10,
      marginLeft:10
    },

    mapText:{
      fontSize:20,
      color:'white'
    },

    listView:{
      width:'95%',
      textDecorationStyle:'double',
      borderBottomWidth:2,
      //borderBottomColor:'#ffff0090',
      borderBottomColor:'#ffffff65',
      flexDirection:'row',
      margin:10,
      borderBottomEndRadius:5,
      borderBottomStartRadius:5,
      
      
    }
  });

  export default ss;