import { Text, TextMedium, TextBold } from "../component/common";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { COLORS, ICONS, IMAGES, SIZES } from "../constants";
import * as Location from "expo-location";

export const Home = ({ navigation }) => {
  const [area, setArea] = useState("waiting...");
  const [gpsData, setGpsData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const areaEncode = await Location.getCurrentPositionAsync({});
        const areaDetail = await Location.reverseGeocodeAsync(
          areaEncode.coords
        );
        const coords = {
          latitude: areaEncode?.coords.latitude,
          longitude: areaEncode?.coords.longitude,
        };
        setGpsData(coords);
        areaDetail.map((yourLocation) => {
          yourLocation.street
            ? setArea(yourLocation.street)
            : setArea(yourLocation.city);
        });
      } else {
        setArea("permission denied");
      }
    })();
    return () => {};
  }, []);

  const restaurantData = [
    // one
    {
      id: 1,
      name: "beans",
      categories: [1, 2],
      image: IMAGES.beans1,
      duration: "45mins-1hour",
      priceRating: "affordable",
      rating: 3.5,
      serviceWorker: "infinity kitchen",
      courier: {
        name: "Julie",
        gps: {
          latitude: 8.1406,
          longitude: 4.2311,
        },
      },
      menu: [
        {
          id: 1,
          name: "norwegian beans",
          price: 500,
          image: IMAGES.beans2,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 200,
        },
        {
          id: 2,
          name: "agoyin beans",
          price: 300,
          image: IMAGES.beans1,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 190,
        },
        {
          id: 3,
          name: "beans soup",
          price: 400,
          image: IMAGES.beans2,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 180,
        },
        // {
        //   id: 4,
        //   name: "",00
        //   price: "",
        //   image: "",
        //   description: "",
        //   calories: "",
        // },
        // {
        //   id: 5,
        //   name: "",
        //   price: "",
        //   image: "",
        //   description: "",
        //   calories: "",
        // },
      ],
    },

    // two

    {
      id: 2,
      name: "bread",
      categories: [2, 1],
      rating: 3.8,
      image: IMAGES.bread1,
      duration: "30mins-35mins",
      priceRating: "fair price",
      serviceWorker: "infinity kitchen",
      courier: {
        name: "amy",
        gps: {
          latitude: 8.1406,
          longitude: 4.2311,
        },
      },
      menu: [
        {
          id: 5,
          name: "buttered bread",
          price: 750,
          image: IMAGES.bread2,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 70,
        },
        {
          id: 6,
          name: "wheat bread",
          price: 600,
          image: IMAGES.bread3,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 85,
        },
        {
          id: 7,
          name: "chocolate bread",
          price: 1100,
          image: IMAGES.bread4,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 100,
        },
        {
          id: 8,
          name: "coconut bread",
          price: 899,
          image: IMAGES.bread1,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 103,
        },
        // {
        //   id: 9,
        //   name: "",
        //   price: "",
        //   image: "",
        //   description: "",
        //   calories: "",
        // },
      ],
    },

    // three

    {
      id: 3,
      name: "chicken",
      categories: [3, 4],
      image: IMAGES.chicken1,
      rating: 4.2,
      duration: "20mins-30min",
      priceRating: "expensive",
      serviceWorker: "infinity kitchen",
      courier: {
        name: "remy",
        gps: {
          latitude: 8.1083,
          longitude: 4.2495,
        },
      },
      menu: [
        {
          id: 10,
          name: "garnished chicken",
          price: 7000,
          image: IMAGES.chicken2,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 55,
        },
        {
          id: 11,
          name: "roasted chicken",
          price: 6500,
          image: IMAGES.chicken3,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 52,
        },
        {
          id: 12,
          name: "midly done chicken",
          price: 6000,
          image: IMAGES.chicken4,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 35,
        },
        {
          id: 13,
          name: "chicken lap",
          price: 2500,
          image: IMAGES.chicken1,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 25,
        },
        // {
        //   id: 14,
        //   name: "",
        //   price: "",
        //   image: "",
        //   description: "",
        //   calories: "",
        //   price: "",
        // },
      ],
    },

    // four

    {
      id: 4,
      name: "fish",
      rating: 4.7,
      serviceWorker: "infinity kitchen",
      categories: [4, 8],
      image: IMAGES.fish1,
      duration: "15-25mins",
      priceRating: "fair price",
      courier: {
        name: "jacob",
        gps: {
          latitude: 8.1166,
          longitude: 4.2295,
        },
      },
      menu: [
        {
          id: 15,
          name: "ganished fish",
          price: 2499,
          image: IMAGES.fish2,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 49,
        },
        {
          id: 16,
          name: "fried fish",
          price: 2199,
          image: IMAGES.fish3,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 69,
        },
        {
          id: 17,
          name: "smoked fish",
          price: 1599,
          image: IMAGES.fish4,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 40,
        },
        {
          id: 18,
          name: "midly done fish",
          price: 1099,
          image: IMAGES.fish1,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 55,
        },
        // {
        //   id: 19,
        //   name: "",
        //   price: "",
        //   image: "",
        //   description: "",
        //   calories: "",
        //   price: "",
        // },
      ],
    },

    // five

    {
      id: 5,
      name: "noodles",
      categories: [5, 8],
      rating: 4.8,
      image: IMAGES.noodles1,
      duration: "15mins-20mins",
      priceRating: "affordable",
      serviceWorker: "infinity kitchen",
      courier: {
        name: "henry",
        gps: {
          latitude: 8.117,
          longitude: 4.2385,
        },
      },
      menu: [
        {
          id: 20,
          name: "indomitable noodles",
          price: 999,
          image: IMAGES.noodles2,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 30,
        },
        {
          id: 21,
          name: "golden penny noodles",
          price: 799,
          image: IMAGES.noodles3,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 35,
        },
        {
          id: 22,
          name: "onions noodles",
          price: 699,
          image: IMAGES.noodles1,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 44,
        },
        // {
        //   id: 23,
        //   name: "",
        //   price: "",
        //   image: "",
        //   description: "",
        //   calories: "",
        //   price: "",
        // },
        // {
        //   id: 24,
        //   name: "",
        //   price: "",
        //   image: "",
        //   description: "",
        //   calories: "",
        //   price: "",
        // },
      ],
    },

    // six

    {
      id: 6,
      name: "potatoes",
      rating: 4.6,
      categories: [6],
      image: IMAGES.potatoes1,
      duration: "20mins-30mins",
      priceRating: "fair price",
      serviceWorker: "infinity kitchen",
      courier: {
        name: "jack",
        gps: {
          latitude: 8.1141,
          longitude: 4.2224,
        },
      },
      menu: [
        {
          id: 25,
          name: "fried potatoes",
          price: 499,
          image: IMAGES.potatoes2,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 60,
        },
        {
          id: 26,
          name: "potato porridge",
          price: 599,
          image: IMAGES.potatoes3,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 65,
        },
        {
          id: 27,
          name: "garnished potatoes",
          price: 799,
          image: IMAGES.potatoes1,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 55,
        },
        {
          id: 28,
          name: "irish potatoes",
          price: 689,
          image: IMAGES.potatoes2,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 45,
        },
        // {
        //   id: 29,
        //   name: "",
        //   price: "",
        //   image: "",
        //   description: "",
        //   calories: "",
        //   price: "",
        // },
      ],
    },
    // seven
    {
      id: 7,
      name: "Rice",
      categories: [7, 3],
      rating: 4.3,
      serviceWorker: "infinity kitchen",
      image: IMAGES.rice1,
      duration: "45mins-1hour",
      priceRating: "expensive",
      courier: {
        name: "danny",
        gps: {
          latitude: 8.1263,
          longitude: 4.2258,
        },
      },
      menu: [
        {
          id: 30,
          name: "fried rice",
          price: 2999,
          image: IMAGES.rice2,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 78,
        },
        {
          id: 31,
          name: "white rice",
          price: 1599,
          image: IMAGES.rice3,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 85,
        },
        {
          id: 32,
          name: "coconut rice",
          price: 1499,
          image: IMAGES.rice4,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 75,
        },
        {
          id: 33,
          name: "jollof rice",
          price: 2099,
          image: IMAGES.rice1,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 85,
        },
        // {
        //   id: 34,
        //   name: "",
        //   price: "",
        //   image: "",
        //   description: "",
        //   calories: "",
        //   price: "",
        // },
      ],
    },

    // eighth

    {
      id: 8,
      name: "spaghetti",
      categories: [8, 4],
      rating: 3.6,
      image: IMAGES.spag1,
      serviceWorker: "infinity kitchen",
      duration: "30mins-45mins",
      priceRating: "fair price",
      courier: {
        name: "amy",
        gps: {
          latitude: 8.1333,
          longitude: 4.2356,
        },
      },
      menu: [
        {
          id: 35,
          name: "stir fried spag",
          price: 2599,
          image: IMAGES.spag2,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 78,
        },
        {
          id: 36,
          name: "white spag & stew",
          price: 1599,
          image: IMAGES.spag3,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 85,
        },
        {
          id: 37,
          name: "red spag",
          price: 1099,
          image: IMAGES.spag4,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 75,
        },
        {
          id: 38,
          name: "jollof spag",
          price: 1999,
          image: IMAGES.spag1,
          description:
            "food delivery apps became obvious in the lives of today food consumers.",
          calories: 85,
        },
        // {
        //   id: 39,
        //   name: "",
        //   price: "",
        //   image: "",
        //   description: "",
        //   calories: "",
        //   price: "",
        // },
      ],
    },
  ];

  const category = [
    {
      name: "beans",
      id: 1,
      image: ICONS.redbeans,
    },
    {
      name: "bread",
      id: 2,
      image: ICONS.bread,
    },
    {
      name: "chicken",
      id: 3,
      image: ICONS.chickenleg,
    },
    {
      name: "fish",
      id: 4,
      image: ICONS.fish,
    },
    {
      name: "noodles",
      id: 5,
      image: ICONS.noodles,
    },
    {
      name: "potatoes",
      id: 6,
      image: ICONS.potato,
    },
    {
      name: "rice",
      id: 7,
      image: ICONS.rice,
    },
    {
      name: "spaghetti",
      id: 8,
      image: ICONS.pasta,
    },
  ];

  const [categories, setCategories] = useState({ category });
  const [restaurant, setRestaurant] = useState(restaurantData);

  const _handlePress = (item) => {
    const restaurantList = restaurantData.filter((a) =>
      a.categories.includes(item.id)
    );
    setRestaurant(restaurantList);
    setCategories(item);
  };

  const Header = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: SIZES.base,
            marginLeft: SIZES.font * 1.12,
            marginRight: SIZES.font * 1.12,
            alignItems: "center",
          }}
        >
          <Image source={ICONS.location} style={{ width: 25, height: 25 }} />
          <TextMedium
            ellipsizeMode="tail"
            textStyle={{
              color: COLORS.dark,
              backgroundColor: COLORS.gray2,
              // padding: SIZES.base,
              padding: SIZES.font,
              borderRadius: SIZES.font,
              textAlign: "center",
              width: "53%",
            }}
            text={area}
          />

          <Image
            source={ICONS.shoppingbasket}
            style={{ width: 22, height: 22 }}
          />
        </View>
      </View>
    );
  };

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => _handlePress(item)}
        activeOpacity={4}
        style={{
          backgroundColor:
            categories.id === item.id ? COLORS.orange : COLORS.gray2,
          height: 98,
          width: 60,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
          borderRadius: 30,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            height: 45,
            width: 45,
            borderRadius: 22,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 4,
          }}
        >
          <Image
            source={item.image}
            style={{ width: 28, height: 28, borderRadius: 12 }}
          />
        </View>
        <Text
          textStyle={{ fontSize: SIZES.body5, textTransform: "capitalize" }}
          text={item.name}
        />
      </TouchableOpacity>
    );
  };

  const TopCategory = () => {
    return (
      <View style={{ marginLeft: 15, marginTop: 15 }}>
        <TextBold textStyle={{ fontSize: SIZES.h2 }} text="Main" />
        <TextBold textStyle={{ fontSize: SIZES.h2 }} text="Categories" />
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={category}
            renderItem={_renderItem}
            contentContainerStyle={{
              marginVertical: 15,
              marginHorizontal: -15,
            }}
          />
        </View>
      </View>
    );
  };

  const _renderBody = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("OrderDelivery", {
            item,
            area,
            gpsData,
          })
        }
        style={{
          marginBottom: 40,
          overflow: "scroll",
        }}
        activeOpacity={0.7}
      >
        <View style={{ width: SIZES.width }}>
          <View>
            <Image
              source={item.image}
              style={{
                width: "97%",
                height: 210,
                resizeMode: "cover",
                borderRadius: SIZES.radius3 * 1.6,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: COLORS.white,
                borderTopRightRadius: SIZES.radius3 * 1.6,
                borderBottomLeftRadius: SIZES.radius3 * 1.6,
              }}
            >
              <TextBold
                textStyle={{
                  color: COLORS.dark,
                  padding: SIZES.padding1 * 1.61,
                }}
                text={item.duration}
              />
            </View>
          </View>
          <TextBold
            textStyle={{ textTransform: "capitalize", fontSize: SIZES.h4 }}
            text={`${item.name} Variety`}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 3,
            }}
          >
            <Image
              source={ICONS.star}
              style={{
                width: 15,
                height: 15,
                marginRight: 7,
              }}
            />
            <TextMedium textStyle={{ marginRight: 6 }} text={item.rating} />
            <TextMedium
              textStyle={{ marginRight: 6, textTransform: "capitalize" }}
              text={item.name}
            />
            <TextMedium
              textStyle={{ marginRight: 6, textTransform: "capitalize" }}
              text={item.serviceWorker}
            />
            {item.priceRating === "affordable" ? (
              <View style={{ flexDirection: "row" }}>
                <Text textStyle={{ color: COLORS.dark }} text="$" />
                <Text textStyle={{ color: COLORS.gray2 }} text="$" />
                <Text textStyle={{ color: COLORS.gray2 }} text="$" />
              </View>
            ) : item.priceRating === "fair price" ? (
              <View style={{ flexDirection: "row" }}>
                <Text textStyle={{ color: COLORS.dark }} text="$" />
                <Text textStyle={{ color: COLORS.dark }} text="$" />
                <Text textStyle={{ color: COLORS.gray2 }} text="$" />
              </View>
            ) : (
              <View style={{ flexDirection: "row" }}>
                <Text textStyle={{ color: COLORS.dark }} text="$" />
                <Text textStyle={{ color: COLORS.dark }} text="$" />
                <Text textStyle={{ color: COLORS.dark }} text="$" />
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const BodyContent = () => {
    return (
      <View style={{}}>
        <FlatList
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          data={restaurant}
          renderItem={_renderBody}
          contentContainerStyle={{
            marginVertical: 15,
            marginHorizontal: 7,
          }}
        />
        <View style={{ marginTop: -600 }} />
      </View>
    );
  };

  return (
    <View>
      {Header()}
      {TopCategory()}
      {BodyContent()}
    </View>
  );
};

const styles = StyleSheet.create({});
