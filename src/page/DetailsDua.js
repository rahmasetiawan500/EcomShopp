import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Text, Content, View, Card, CardItem,Grid, Col, H3,Row } from 'native-base';
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

            <View>
                <View style={{height:190,flex:1, alignItems:"center"}}>
                <Image source={require('../images/red3.png')} />
                </View>
                <View style={{alignItems:"center"}}>
                <View style={{flex: 1, flexDirection: 'row', paddingTop:140}}>
                <Icon onPress={()=>{Actions.details()}} style={{fontSize:30, color:'#E43223' ,paddingLeft:5}} type='MaterialCommunityIcons' name='circle-slice-8' />
                <Icon onPress={()=>{Actions.detailssatu()}} style={{fontSize:30, color:'#C7A689' ,paddingLeft:5}} type='MaterialCommunityIcons' name='circle-slice-8' />
                <Icon style={{fontSize:30, color:'#846AB2' ,paddingLeft:5}} type='MaterialCommunityIcons' name='circle-slice-8' />
        
                </View>
                </View>
                <View  style={{alignItems:"center",paddingTop:10}}>
                    <Text style={{fontSize:24}}>
                    Beats Solo 3 Wireless
                    </Text>
                    <Text>
                    Rp. 350,000,00
                    </Text>
                </View>
            </View>

            <View style={{paddingTop:35}}>
            <Text style={{paddingLeft:20}}>
               With up to 40 hours of battery life, Beats Solo3 Wireless is 
                your perfect everyday headphone. Get the most out of 
                your music with an award-winning, emotionally charged 
                Beats listening experience.
               </Text>
               <Text style={{padding:20}} >
                Up To 40 Hours Of Battery Life
                Award-Winning Sound
                5 Minute Charge = 3 Hours of Playback
               </Text>
            </View>
                        
            
             
            <View style={{flex:1, alignItems:"center",paddingTop:80, paddingBottom:50}}>
             <Button onPress={()=>{Actions.checkouts()}} light style={{borderRadius:10, width:295, height:48}}><Text style={{paddingLeft:90, fontSize:20}}>Add To Cart</Text></Button>
             </View>
        {/* content barang */}
        </Content>
        
  
      </Container>
    );
  }
}