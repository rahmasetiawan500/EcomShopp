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
            
           

             {/* content barang */}

            <View style={{flex: 1, flexDirection: 'row',paddingTop:60}}>
                
                <View style={{height:190,flex:1, alignItems:"flex-start",padding:15}}>
                <Image source={require('../images/red1m.png')} />
                </View>

                <View style={{padding:20}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={{fontSize:24}}>
                    Beats Solo 3 Wireless
                    </Text>
                    <Text style={{fontSize:14}}>
                    Rp. 350,000,00
                    </Text>

                    <View style={{flex: 1, flexDirection: 'row',paddingTop:10}}>
                    <Icon style={{ fontSize:24, color:'#000000',paddingTop:10}} type='Feather' name='plus' />
                    <Text style={{fontSize:24 ,paddingTop:10, marginLeft:25}}>
                    1
                    </Text>
                    <Icon style={{ fontSize:24, color:'#000000',paddingTop:10, marginLeft:25}} type='Feather' name='minus' />
                    </View>
                </View>
                </View>

            </View>

            <View style={{flex:1, alignItems:'center',paddingTop:50}}>
            <Text style={{fontSize:24}}>
            PAYMENT
               </Text> 
            </View>

           
                <View style={{paddingTop:30}}>
            <ListItem selected={true} >
            <Left>
           
              <Text style={{paddingLeft:15}}><Icon style={{ fontSize:20, color:'#000000'}} type='FontAwesome5' name='money-bill-wave-alt' /></Text>
              <Text style={{paddingLeft:80}}>Cash on delivery</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={true}
              />
            </Right>
          </ListItem>
          </View>

          <View>
          <ListItem selected={false}>
            <Left>
            <Text style={{paddingLeft:15}}><Icon style={{ fontSize:20, color:'#000000'}} type='FontAwesome5' name='credit-card' /></Text>
              <Text style={{paddingLeft:80}}>Credit Card</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
            </Right>
          </ListItem>
          </View>
            
                        
            
             
            <View style={{flex:1, alignItems:"center",paddingTop:80, paddingBottom:50}}>
             <Button onPress={()=>{Actions.thanks()}}  light style={{borderRadius:10, width:295, height:48}}><Text style={{paddingLeft:90, fontSize:20}}>CHECK OUT</Text></Button>
             </View>
        {/* content barang */}
        </Content>
        
  
      </Container>
    );
  }
}