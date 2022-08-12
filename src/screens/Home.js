import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Text } from "../component/common";
import React, { useState } from "react";
import { COLORS, SIZES } from "../constants/Theme";

export const Home = () => {
  const [number, setNumber] = useState("");
  const [restaurant, setRestaurant] = useState(restaurantData);

  const restaurantData = [
    // one

    {
      id: 1,
      name: "",
      categories: [1, 7],
      image: "",
      duration: "",
      priceRting: "",
      courier: {
        name: "",
        location: "",
      },
      menu: [
        {
          id: 1,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 2,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 3,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 4,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 5,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
      ],
    },

    // two

    {
      id: 2,
      name: "",
      categories: [2, 4],
      image: "",
      duration: "",
      priceRting: "",
      courier: {
        name: "",
        location: "",
      },
      menu: [
        {
          id: 5,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 6,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 7,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 8,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 9,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
      ],
    },

    // three

    {
      id: 3,
      name: "",
      categories: [5, 6],
      image: "",
      duration: "",
      priceRting: "",
      courier: {
        name: "",
        location: "",
      },
      menu: [
        {
          id: 10,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 11,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 12,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 13,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 14,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
      ],
    },

    // four

    {
      id: 4,
      name: "",
      categories: [1, 3],
      image: "",
      duration: "",
      priceRting: "",
      courier: {
        name: "",
        location: "",
      },
      menu: [
        {
          id: 15,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 16,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 17,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 18,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 19,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
      ],
    },

    // five

    {
      id: 5,
      name: "",
      categories: [2, 5],
      image: "",
      duration: "",
      priceRting: "",
      courier: {
        name: "",
        location: "",
      },
      menu: [
        {
          id: 20,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 21,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 22,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 23,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
        {
          id: 24,
          name: "",
          price: "",
          image: "",
          description: "",
          calories: "",
          price: "",
        },
      ],
    },
  ];

  const category = [
    {
      name: "Yam",
      id: 1,
      image: "",
    },
    {
      name: "Potatoes",
      id: 2,
      image: "",
    },
    {
      name: "Rice",
      id: 3,
      image: "",
    },
    {
      name: "Beans",
      id: 4,
      image: "",
    },
    {
      name: "Spag",
      id: 5,
      image: "",
    },
    {
      name: "Noodles",
      id: 6,
      image: "",
    },
    {
      name: "Marcaroni",
      id: 7,
      image: "",
    },
  ];

  const Header = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 50,
            marginTop: 9,
          }}
        >
          <View
            style={{
              flex: 1,
              paddingLeft: 15,
              justifyContent: "center",
            }}
          >
            <Text text="Account" color={COLORS.base1} />
          </View>
          <View
            style={{
              flex: 2.5,
              backgroundColor: "darkgray",
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text text="Location" color={COLORS.base1} />
          </View>
          <View
            style={{
              flex: 1,
              paddingRight: 15,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Text text="Cart" color={COLORS.base1} />
          </View>
        </View>
        <Text
          text="Main"
          textStyle={{
            marginLeft: 10,
            fontSize: SIZES.h1,
            fontWeight: "bold",
          }}
        />
        <Text
          text="Categories"
          textStyle={{
            marginLeft: 10,
            fontSize: SIZES.h1,
            fontWeight: "bold",
          }}
        />
      </View>
    );
  };

  const TopCategory = () => {
    return (
      <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        data={category}
        renderItem={renderItem}
        contentContainerStyle={{
          marginLeft: 5,
          marginRight: 10,
          marginTop: 20,
        }}
      />
    );
  };

  const renderItem = ({ item }) => {
    const handlePress = (item) => {
      const restaurantList = restaurantData.filter((a) =>
        a.categories.includes(item.id)
      );
      console.warn(restaurantList);
      setNumber(item);
    };

    return (
      <TouchableOpacity
        onPress={() => handlePress(item)}
        key={item.id}
        activeOpacity={5}
        style={{
          marginLeft: 12,
          backgroundColor: number.id === item.id ? "darkgray" : "orange",
          height: 90,
          width: 65,
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: SIZES.radius,
        }}
      >
        <Text text={item.name} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {Header()}
      {TopCategory()}
    </View>
  );
};

const styles = StyleSheet.create({});
