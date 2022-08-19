import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated,
} from "react-native";
import { ICONS, SIZES, COLORS } from "../constants";
import React, { useState } from "react";
import { Text, TextMedium, TextBold, Button } from "../component/common";

export const OrderDelivery = ({ navigation, route }) => {
  const { item } = route.params;
  const [orderItems, setOrderItems] = useState([]);

  const handlePress = (action, id, price) => {
    const orderList = orderItems.slice();
    const item = orderList.filter((a) => a.id === id);
    if (action === "+") {
      if (item.length > 0) {
        const newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          id: id,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }
      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0].qty > 0) {
          const newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }
      setOrderItems(orderList);
    }
  };

  const handleText = (id) => {
    const orderItem = orderItems.filter((a) => a.id === id);
    if (orderItem.length > 0) {
      return orderItem[0].qty;
    } else {
      return 0;
    }
  };

  const qtyCalc = () => {
    if (orderItems.length > 0) {
      return orderItems.map((a) => a.qty).reduce((a, b) => a + b, 0);
    } else {
      return "no";
    }
  };

  const priceCalc = () => {
    if (orderItems.length > 0) {
      return orderItems.map((a) => a.price).reduce((a, b) => a + b, 0);
    } else {
      return 0;
    }
  };

  const scrollX = new Animated.Value(0);

  const Header = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: SIZES.base,
            marginLeft: SIZES.font,
            marginRight: SIZES.font,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={7}
            onPress={() => navigation.goBack()}
          >
            <Image source={ICONS.back} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
          <TextMedium
            ellipsizeMode="tail"
            textStyle={{
              color: COLORS.dark,
              backgroundColor: COLORS.gray2,
              padding: SIZES.base,
              padding: SIZES.font,
              borderRadius: SIZES.font,
              textAlign: "center",
              width: "53%",
              textTransform: "capitalize",
            }}
            text={item.serviceWorker}
          />

          <Image source={ICONS.list} style={{ width: 22, height: 22 }} />
        </View>
      </View>
    );
  };

  const [value, setValue] = useState(192);

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Image
              source={item.image}
              style={{
                width: SIZES.width,
                height: SIZES.height * 0.4,
                resizeMode: "cover",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                borderRadius: SIZES.radius3 * 1.7,
                bottom: 2,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.white,
                  borderTopLeftRadius: SIZES.radius3 * 1.85,
                  borderBottomLeftRadius: SIZES.radius3 * 1.85,
                  maxWidth: 47,
                  width: 47,
                }}
                onPress={() => handlePress("-", item.id, item.price)}
              >
                <TextBold
                  textStyle={{
                    fontSize: SIZES.h5,
                    padding: SIZES.padding2,
                    marginLeft: 4,
                  }}
                  text="-"
                />
              </TouchableOpacity>
              <Text
                text={handleText(item.id)}
                textStyle={{
                  fontSize: SIZES.h5,
                  padding: SIZES.padding2,
                  textAlign: "center",
                  backgroundColor: COLORS.white,
                }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.white,
                  borderTopRightRadius: SIZES.radius3 * 1.85,
                  borderBottomRightRadius: SIZES.radius3 * 1.85,
                  width: 47,
                  maxWidth: 47,
                }}
                onPress={() => handlePress("+", item.id, item.price)}
              >
                <TextBold
                  textStyle={{
                    fontSize: SIZES.h5,
                    padding: SIZES.padding2,
                    textAlign: "center",
                    marginRight: 4,
                  }}
                  text="+"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{ alignItems: "center", marginTop: SIZES.padding2 * 1.4 }}
          >
            <TextBold
              textStyle={{
                textTransform: "capitalize",
                fontSize: SIZES.h3,
                letterSpacing: 1,
              }}
              text={`${item.name} - #${item.price}`}
            />
            <Text
              textStyle={{
                textTransform: "capitalize",
                fontSize: 12,
                marginTop: 13,
                letterSpacing: 1,
                width: 300,
                textAlign: "center",
              }}
              text={item.description}
            />
            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                alignItems: "center",
              }}
            >
              <Image
                source={ICONS.fire}
                style={{ width: 15, height: 15, marginRight: 12 }}
              />
              <TextBold
                style={{ color: COLORS.gray2, fontSize: SIZES.h2 }}
                text={`${item.calories} cal`}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const TopRender = () => {
    return (
      <View>
        <Animated.FlatList
          keyExtractor={(item) => item.id}
          pagingEnabled
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          horizontal={true}
          data={item.menu}
          renderItem={_renderItem}
          contentContainerStyle={{
            marginVertical: 15,
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
      </View>
    );
  };

  const CircleIndicator = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        {item?.menu.map((each, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
            extrapolate: "clamp",
          });
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.gray2, COLORS.orange, COLORS.gray2],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={index}
              opacity={opacity}
              style={{
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor,
                borderRadius: SIZES.radius,
                marginLeft: 5,
              }}
            />
          );
        })}
      </View>
    );
  };

  const Footer = () => {
    return (
      <View
        style={{
          flex: 1,
          height: SIZES.height * 0.26,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius1 * 3,
          width: "100%",
          marginTop: 60,
          padding: 20,
          alignSelf: "flex-end",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <TextBold
            textStyle={{ fontSize: SIZES.h3 }}
            text={` ${qtyCalc()} item(s) in the cart`}
          />
          <TextBold
            textStyle={{ fontSize: SIZES.h3 }}
            text={`#${priceCalc()}`}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={ICONS.location}
              style={{ width: 15, height: 15, marginRight: 10 }}
            />
            <TextMedium
              textStyle={{ fontSize: SIZES.h4 }}
              text="Arowomole, Ogbomoso"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={ICONS.mastercard}
              style={{ width: 15, height: 15, marginRight: 10 }}
            />
            <TextMedium textStyle={{ fontSize: SIZES.h4 }} text="****7917" />
          </View>
        </View>
        <Button
          btnText="Order"
          containerStyle={{
            backgroundColor: COLORS.orange,
            alignItems: "center",
            borderRadius: SIZES.radius3 * 1.5,
            marginTop: 30,
          }}
          btnTextStyle={{
            color: COLORS.white,
            padding: SIZES.padding2,
            fontSize: SIZES.h2,
            fontWeight: "bold",
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {Header()}
      {TopRender()}
      {CircleIndicator()}
      {Footer()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
