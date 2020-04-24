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
                <Image source={require('../images/account.png')} />
                </View>
                <View style={{alignItems:"center"}}>
                <View style={{flex: 1, flexDirection: 'row', padding:10}}>
                <Icon style={{fontSize:30, color:'#F8E700',paddingLeft:5}} type='FontAwesome' name='star' />
                <Icon style={{fontSize:30, color:'#F8E700',paddingLeft:5}} type='FontAwesome' name='star' />
                <Icon style={{fontSize:30, color:'#F8E700',paddingLeft:5}} type='FontAwesome' name='star' />
                <Icon style={{fontSize:30, color:'#F8E700',paddingLeft:5}} type='FontAwesome' name='star' />
                <Icon style={{fontSize:30, color:'#F8E700',paddingLeft:5}} type='FontAwesome' name='star' />
                </View>
                </View>
                <View  style={{alignItems:"center"}}>
                    <Text style={{fontSize:24}}>
                    Rahma Setiawan
                    </Text>
                    <Text>
                    17160103
                    </Text>
                </View>
            </View>

            <View style={{paddingTop:20}}>
                <View style={{flex: 1, flexDirection: 'row', padding:10}}>
                <Icon style={{fontSize:30,paddingLeft:5}} type='FontAwesome5' name='truck-moving' />
                <Text style={{fontSize:20,paddingLeft:200}}>Barangku ></Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', padding:10}}>
                <Icon style={{fontSize:35,paddingLeft:5}} type='MaterialIcons' name='payment' />
                <Text style={{fontSize:20,paddingLeft:194}}>EcomPay   > </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', padding:10}}>
                <Icon style={{fontSize:30,paddingLeft:5}} type='FontAwesome5' name='coins' />
                <Text style={{fontSize:20,paddingLeft:190}}>Koin Ecom   ></Text>
              
                </View>
            </View>
                        
            
             
          
             
        {/* content barang */}
        </Content>
        <Footer >
          <FooterTab style={{backgroundColor:"white"}}>
            <Button onPress={()=>{Actions.home()}} >
            <Icon  style={{color:'#CCCCCC'}} type='Feather' name='home' />
            </Button>
            <Button onPress={()=>{Actions.favorite()}}>
            <Icon style={{color:'#CCCCCC'}} type='Feather' name='bookmark' />
            </Button>
            <Button >
            <Icon style={{color:'#000000'}} type='MaterialIcons' name='person-outline' />
            </Button>
            <Button  onPress={()=>{Actions.checkouts()}}>
            <Icon style={{color:'#CCCCCC'}} type='Feather' name='shopping-cart' />
            </Button>
          </FooterTab>
        </Footer>
  
      </Container>
    );
  }
}