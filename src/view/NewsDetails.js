import React, { Component } from 'react';
import { Text, Image, View, ScrollView, StyleSheet } from 'react-native';
import { Constants } from '../common/Constants';
import { getFontFamily, getFormattedDate } from '../common/Utils';
let itemDetail;
let styles;

export default class NewsDetails extends Component {
  static navigationOptions = {
    title: 'Details',
    headerTitleStyle: { fontFamily: getFontFamily() }
  };

  constructor(props) {
    super(props);
    itemDetail = this.props.navigation.getParam(Constants.NEWS_ITEM_DETAIL, {});
  }

  onBackPress = () => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.title}>{itemDetail.title}</Text>

          <Text style={styles.date}>
            <Text style={styles.author}>{itemDetail.author || ''} </Text>
            {getFormattedDate(itemDetail.publishedAt)}
          </Text>
          <Image style={styles.image} source={{ uri: itemDetail.urlToImage }} />
          <Text style={styles.content}>{itemDetail.content}</Text>
        </ScrollView>
      </View>
    );
  }
}

styles = StyleSheet.create({
  navHeader: {
    height: 56,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    paddingBottom: 10,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    backgroundColor: 'red'
  },
  content: { fontSize: 16, marginTop: 10 },
  author: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  title: {
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: 'bold'
  },
  scroll: {
    margin: 16
  },
  image: {
    flex: 1,
    flexWrap: 'wrap',
    width: 500,
    height: 250,
    marginTop: 16
  },
  date: {
    fontSize: 14,
    marginTop: 16
  }
});
