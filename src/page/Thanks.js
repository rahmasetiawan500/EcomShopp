import React, { Component } from 'react';
import { Container, Left, Right, Button, Icon, Text, Content, View, ListItem, Radio, Body} from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Home extends Component {
  render() {
    return (
      <Container>
       
        {/* header dibikin naik */}
        {/* bagian headers */}
        <Content>
            <View style={{flex: 1, flexDirection: 'row', paddingTop:20}}>
          <Left>
            <Button transparent onPress={()=>{Actions.home()}} >
              <Icon style={{fontSize:30, color:'#000000'}} type='Feather' name='arrow-left' />
            </Button>
          </Left>
          </View>
          {/* x bagian headers x */}
          <View style={{paddingTop:60}}>
          <View style={{height:270.27,flex:1, alignItems:"center",paddingTop:30}}>
                <Image source={require('../images/Group.png')} />
                </View>
                <View  style={{alignItems:"center",paddingTop:10}}>
                    <Text style={{fontSize:24}}>
                    Terima Kasih

                    </Text>
                    <Text>
                    Barangmu Selesai di Proses
                    </Text>
                </View>
          </View>
          

          
        </Content>
        
  
      </Container>
    );
  }
}