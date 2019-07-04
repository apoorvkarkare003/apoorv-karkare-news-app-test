import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { TYPE_SAGA_LIST } from '../actions/Types';
import { Constants } from '../common/Constants';
import { getFontFamily } from '../common/Utils';

let styles;

class Headlines extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: { backgroundColor: 'black' },
    headerTitleStyle: { fontFamily: getFontFamily(), color: 'white' }
  };

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.newsList}
          keyExtractor={(item, index) => `key${index}`}
          renderItem={({ item }) => this.showItem(item)}
          ListHeaderComponent={
            <Text style={styles.listheader}>Your Daily Read</Text>
          }
        />
      </View>
    );
  }

  showDetail = item => {
    this.props.navigation.navigate(Constants.SCREEN_NAME_DETAILS, {
      [Constants.NEWS_ITEM_DETAIL]: item
    });
  };

  showItem = item => {
    return (
      <TouchableOpacity onPress={() => this.showDetail(item)}>
        <View style={styles.itemContainer}>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.desc}>{item.author}</Text>
          </View>
          <Image style={styles.image} source={{ uri: item.urlToImage }} />
        </View>
      </TouchableOpacity>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getNews: () => dispatch({ type: TYPE_SAGA_LIST })
  };
};

const mapStateToProps = state => {
  return {
    newsList: state.news.newsList
  };
};

styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: { width: 80, height: 80, marginStart: 10 },
  desc: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 14,
    opacity: 0.5,
    marginTop: 10,
    fontWeight: 'bold'
  },
  listheader: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 16,
    borderBottomWidth: 1,
    paddingBottom: 16,
    borderColor: '#00000050'
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Headlines);
