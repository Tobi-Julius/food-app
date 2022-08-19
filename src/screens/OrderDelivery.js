import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { ICONS, SIZES, COLORS } from "../constants";
import React, { useState } from "react";
import { Text, TextMedium, TextBold } from "../component/common";

export const OrderDelivery = ({ navigation, route }) => {
  const { item } = route.params;
  const [orderCount, setorderCount] = useState(0);

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
            }}
            text={item.serviceWorker}
          />

          <Image source={ICONS.list} style={{ width: 22, height: 22 }} />
        </View>
      </View>
    );
  };

  const _renderItem = ({ item, index }) => {
    const handleText = (text) => {
      const regexPattern = /^[0-9]*$/;
      return regexPattern.test(text);
    };

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
                marginBottom: 16,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.white,
                  borderTopLeftRadius: SIZES.radius3 * 1.85,
                  borderBottomLeftRadius: SIZES.radius3 * 1.85,
                  maxWidth: 50,
                  width: 50,
                }}
              >
                <TextBold
                  textStyle={{
                    fontSize: SIZES.h2,
                    padding: SIZES.padding2,
                  }}
                  text="-"
                />
              </TouchableOpacity>
              <TextInput
                onChangeText={(text) => handleText(text)}
                keyboardType="numeric"
                value={orderCount}
                style={{
                  borderWidth: 1,
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.white,
                  width: 50,
                  maxWidth: 50,
                }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.white,
                  borderTopRightRadius: SIZES.radius3 * 1.85,
                  borderBottomRightRadius: SIZES.radius3 * 1.85,
                  width: 50,
                  maxWidth: 50,
                }}
                activeOpacity={0.8}
              >
                <TextBold
                  textStyle={{
                    fontSize: SIZES.h2,
                    padding: SIZES.padding2 * 1.15,
                    textAlign: "center",
                  }}
                  text="+"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const TopRender = () => {
    return (
      <View>
        <FlatList
          horizontal={true}
          data={item.menu}
          renderItem={_renderItem}
          contentContainerStyle={{
            // marginHorizontal: 10,
            marginVertical: 10,
          }}
        />
      </View>
    );
  };

  return (
    <View>
      {Header()}
      {TopRender()}
    </View>
  );
};

const styles = StyleSheet.create({});
