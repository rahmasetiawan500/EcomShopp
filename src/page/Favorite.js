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
            <View style={{flex: 1, flexDirection: 'row', padding:10}}>
            <Body>
            <Text style={{color:'#000000',fontSize:24,marginRight:50}}>Ecomshop</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{color:'#000000'}} type='Feather' name='search' />
            </Button>
          </Right>
          {/* x bagian headers x */}

          {/* pilih kategori barang */}
            </View>
            <View style={{flex: 1, flexDirection: 'row',paddingLeft:15}}>
              <Button transparent style={{backgroundColor: 'white'}}>
                  <Text style={{color:'#000000',fontSize:12}}>Headphone</Text>
              </Button>
              <Button transparent style={{backgroundColor: 'white'}}>
                  <Text style={{color:'#888484',fontSize:12}}>Camera</Text>
              </Button>
              <Button transparent style={{backgroundColor: 'white'}}>
                  <Text style={{color:'#888484',fontSize:12}}>Laptop</Text>
              </Button>
              <Button transparent style={{backgroundColor: 'white'}}>
                  <Text style={{color:'#888484',fontSize:12}}>Television</Text>
              </Button>
            </View>
            {/* x pilih kategori barang x */}

             {/* content barang */}


            {/* barang bagian 1 */}
                        
             <View style={{flex: 1, flexDirection: 'row',padding:10}}>

            

        <View style={{flex: 1, flexDirection: 'column',padding:10, paddingTop:40, paddingBottom: 0}}>
           <View style={{width: 153, height: 294, backgroundColor: '#F0EEEE',borderRadius:20}}>
           
            <Card transparent >
        <CardItem style={{backgroundColor:'#F0EEEE',paddingLeft:110,borderRadius:20}}>
            <Icon onPress={()=>{Actions.home()}} style={{color:'red'}} type='FontAwesome' name='bookmark' />
            </CardItem>
                <CardItem style={{backgroundColor:'#F0EEEE',borderRadius:20}}>
                
                  <Image source={require('../images/headphones_PNG7655.png')} style={{height:148, flex:1}}/>
                
                </CardItem>

                <CardItem style={{backgroundColor:'#F0EEEE',borderRadius:20}}>
                    <View>
                    <Text style={{fontSize:12,paddingLeft:8}}>
                    Ferari Sound Wireless
                    </Text>
                    <Text style={{fontSize:12,paddingLeft:20, paddingTop:10}}>
                    Rp. 650,000,00
                    </Text>
                    </View>
                    </CardItem>
                
            </Card>
            </View>
        </View>
        </View>
            {/* x barang bagian 1 x */}
             
             
        {/* content barang */}
        </Content>
        <Footer >
          <FooterTab style={{backgroundColor:"white"}}>
            <Button onPress={()=>{Actions.home()}} >
            <Icon  style={{color:'#CCCCCC'}} type='Feather' name='home' />
            </Button>
            <Button>
            <Icon style={{color:'#000000'}} type='Feather' name='bookmark' />
            </Button>
            <Button onPress={()=>{Actions.accounts()}} >
            <Icon style={{color:'#CCCCCC'}} type='MaterialIcons' name='person-outline' />
            </Button>
            <Button onPress={()=>{Actions.checkouts()}}>
            <Icon style={{color:'#CCCCCC'}} type='Feather' name='shopping-cart' />
            </Button>
          </FooterTab>
        </Footer>
  
      </Container>
    );
  }
}