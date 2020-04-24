import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Text, Content, View, Card, CardItem,Grid, Col, H3,Row } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Footers extends Component {
  render() {
    return (
      <Container>
        <Footer >
          <FooterTab style={{backgroundColor:"white"}}>
            <Button >
            <Icon  style={{color:'#000000'}} type='Feather' name='home' />
            </Button>
            <Button onPress={()=>{Actions.favorite()}}>
            <Icon style={{color:'#CCCCCC'}} type='Feather' name='bookmark' />
            </Button>
            <Button onPress={()=>{Actions.accounts()}}>
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