import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { TYPE_SAGA_LIST } from '../actions/Types';
import { Constants } from '../common/Constants';

let styles;

class Headlines extends Component {
  static navigationOptions = {
    title: 'Home'
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

            <Text style={styles.desc}>{item.description}</Text>
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
    fontSize: 28,
    fontWeight: 'bold'
  },
  image: { width: 50, height: 50 },
  desc: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 16,
    fontWeight: 'normal'
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Headlines);
