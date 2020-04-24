import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Text, Content, View, Card, CardItem,Grid, Col, H3,Row } from 'native-base';
import { Image } from 'react-native';
import Footers from '../page/Footers';
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

            
        <View style={{flex: 1, flexDirection: 'column',padding:10}} >
           <View  style={{width: 153, height: 294, backgroundColor: '#F0EEEE',borderRadius:20}}>
            <Card transparent  >
            <CardItem style={{backgroundColor:'#F0EEEE',paddingLeft:110,borderRadius:20}}>
            <Icon  style={{color:'#000000'}} type='Feather' name='bookmark' />
            </CardItem>
            
                <CardItem  style={{backgroundColor:'#F0EEEE',borderRadius:20}}>
               <Col onPress={()=>{Actions.details()}}  style={{height:132, width: 132, flex:1}}>
               
                  <Image source={require('../images/beast1.png')}  style={{height:132, width: 132, flex:1}}/>
                  </Col>
                </CardItem>
                <CardItem style={{backgroundColor:'#F0EEEE'}}>
                    <View >
                    <Text onPress={()=>{Actions.details()}}  style={{fontSize:12,paddingLeft:8}}>
                    Beats Solo 3 Wireless
                    </Text>
                    <Text onPress={()=>{Actions.details()}}  style={{fontSize:12,paddingLeft:20, paddingTop:10}}>
                    Rp. 350,000,00
                    </Text>
                    </View>
                </CardItem> 
                
            </Card>
            </View>
        </View>

        <View style={{flex: 1, flexDirection: 'column',padding:10, paddingTop:40, paddingBottom: 0}}>
           <View style={{width: 153, height: 294, backgroundColor: '#F0EEEE',borderRadius:20}}>
           
            <Card transparent >
        <CardItem style={{backgroundColor:'#F0EEEE',paddingLeft:110,borderRadius:20}}>
            <Icon onPress={()=>{Actions.favorite()}} style={{color:'#000000'}} type='Feather' name='bookmark' />
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
             
            {/* barang bagian 2 */}
             
        <View style={{flex: 1, flexDirection: 'row',padding:10}}>

<View style={{flex: 1, flexDirection: 'column',padding:10}}>
   <View style={{width: 153, height: 324, backgroundColor: '#F0EEEE',borderRadius:20}}>
    <Card transparent >
    <CardItem style={{backgroundColor:'#F0EEEE',paddingLeft:110,borderRadius:20}}>
    <Icon style={{color:'#000000'}} type='Feather' name='bookmark' />
    </CardItem>
        <CardItem style={{backgroundColor:'#F0EEEE',borderRadius:20}}>
        
          <Image source={require('../images/329092_mobile-headphone-png.png')} style={{height:168, flex:1}}/>
        
        </CardItem>
        <CardItem style={{backgroundColor:'#F0EEEE'}}>
            <View>
            <Text style={{fontSize:12,paddingLeft:4}}>
            Monster Bass Wireless
            </Text>
            <Text style={{fontSize:12,paddingLeft:20, paddingTop:10}}>
            Rp. 350,000,00
            </Text>
            </View>
        </CardItem> 
        
    </Card>
    </View>
</View>

<View style={{flex: 1, flexDirection: 'column',padding:10, paddingTop:40, paddingBottom: 0}}>
   <View style={{width: 153, height: 254, backgroundColor: '#F0EEEE',borderRadius:20}}>
   
    <Card transparent >
<CardItem style={{backgroundColor:'#F0EEEE',paddingLeft:110,borderRadius:20}}>
    <Icon style={{color:'#000000'}} type='Feather' name='bookmark' />
    </CardItem>
        <CardItem style={{backgroundColor:'#F0EEEE',borderRadius:20}}>
        
          <Image source={require('../images/Headphone-PNG-image7-500x396.png')} style={{height:93,flex:1}}/>
        
        </CardItem>

        <CardItem style={{backgroundColor:'#F0EEEE',borderRadius:20}}>
            <View>
            <Text style={{fontSize:12,paddingLeft:8}}>
            The Mustang Sound
            </Text>
            <Text style={{fontSize:12,paddingLeft:20, paddingTop:10}}>
            Rp. 350,000,00
            </Text>
            </View>
            </CardItem>
        
    </Card>
    </View>
</View>
</View>

                  {/* x barang bagian 2 x */}
             
        {/* content barang */}
        </Content>
        <Footer>
        <Footers />
        </Footer>
  
      </Container>
    );
  }
}