import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-native';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  View
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: (Platform.OS === 'ios') ? 10 : 0,
    paddingLeft: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignItems: 'flex-start'
  },
  backButton: {
    marginTop: 10
  },
  backButtonText: {
    fontSize: 14
  },
  titleText: {
    fontFamily: 'Karla-Regular',
    fontSize: 18
  }
});

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let leftText = this.props.leftText ? this.props.leftText : "‹ Back";
    let titleText = this.props.titleText;

    return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={this.props.onBackPress}>
            <Text style={styles.backButtonText}>{leftText}</Text>
        </TouchableOpacity>
        {titleText &&
          <Text style={styles.titleText}>{titleText}</Text>
        }
      </View>
    )
  }
}