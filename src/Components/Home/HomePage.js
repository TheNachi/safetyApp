import React, { Component } from 'react';
import { Container, Body, Right, Button, Icon, Title, Tab, Tabs, ScrollableTab,
  Content, Footer, FooterTab
} from 'native-base';
import { View, Text } from 'react-native';
import Header from '../Common/Header';

class HomePage extends Component {

  render() {
    return (
        <Container>
          <Header />
          <Content>
            <Text>HOME PAGE</Text>
          </Content>
          <Footer>
            <FooterTab>
              <Button active>
                <Icon type='MaterialIcons' name='home' />
              </Button>
              <Button>
                <Icon type='MaterialIcons' name='notifications-none' />
              </Button>
              <Button>
                <Icon type='FontAwesome' name='plus-square' />
              </Button>
              <Button>
                <Icon type='FontAwesome' name='heart-o' />
              </Button>
              <Button>
                <Icon type='MaterialIcons' name='perm-identity' />
              </Button>
            </FooterTab>
          </Footer>
        </Container>
    );  
  }
}

export default HomePage;
