import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";

import { add, minus, asyncAdd } from "../../actions/counter";

import "./index.less";

// @connect(
//   ({ counter }) => ({
//     counter,
//   }),
//   (dispatch) => ({
//     add() {
//       dispatch(add());
//     },
//     dec() {
//       dispatch(minus());
//     },
//     asyncAdd() {
//       dispatch(asyncAdd());
//     },
//   })
// )

const Index = () => {
  return <text>123444</text>;
};
// class Index extends Component {
//   onLaunch(options) {
//     console.log("options :>> ", 888);
//   }
//   componentWillReceiveProps(nextProps) {
//     console.log(999)
//     console.log(this.props, nextProps);
//   }

//   componentWillUnmount() {}

//   componentDidShow() {
//     console.log(123)
//   }

//   componentDidHide() {}

//   render() {
//     return (
//       <View className="index">
//         <Button className="add_btn" onClick={this.props.add}>
//           +
//         </Button>
//         <Button className="dec_btn" onClick={this.props.dec}>
//           -
//         </Button>
//         <Button className="dec_btn" onClick={this.props.asyncAdd}>
//           async
//         </Button>
//         <View>
//           <Text>{this.props.counter.num}</Text>
//         </View>
//         <View>
//           <Text>Hello, World</Text>
//         </View>
//       </View>
//     );
//   }
// }

export default Index;
