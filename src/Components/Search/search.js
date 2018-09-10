import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

class Search extends Component {
    render() {
      const { goBack } = this.props.navigation
        return (
          <Container>
            <Header searchBar rounded >
              <Button transparent onPress={() => goBack(null)} title="Go back from this HomeScreen" style={{ flex: 1 }} >
                <Text>X</Text>
              </Button>
              <Item style={{ flex: 6 }}>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
              </Item>
              <Button transparent style={{ flex: 2 }}>
                <Text>Go</Text>
              </Button>
            </Header>
          </Container>
        );
      }
}

const styles = {
    viewStyle: {
        backgroundColor: 'red',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
    }
}

export default Search;
