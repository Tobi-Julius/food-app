import { Text } from "../component/common";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { COLORS, IMAGES, SIZES } from "../constants";
export const Home = () => {
  const [number, setNumber] = useState("");
  const [categories, setCategories] = useState(category);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [restaurant, setRestaurant] = useState(restaurantData);

  const restaurantData = [
    // one

    {
      id: 1,
      name: "beans",
      categories: [1, 2],
      image: IMAGES.beans1,
      duration: "45mins-1hour",
      priceRating: "affordable",
      serviceWorker: "infinity kitchen",
      courier: {
        name: "Julie",
        location: "lagos",
      },
      menu: [
        {
          id: 1,
          name: "norwegian beans",
          price: "500",
          image: IMAGES.beans2,
          description: "food gives us energy",
          calories: 200,
        },
        {
          id: 2,
          name: "agoyin beans",
          price: "300",
          image: IMAGES.beans1,
          description: "food gives us energy",
          calories: 190,
        },
        {
          id: 3,
          name: "beans soup",
          price: 400,
          image: IMAGES.beans2,
          description: "food gives us energy",
          calories: 180,
        },
        // {
        //   id: 4,
        //   name: "",
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
      image: IMAGES.bread1,
      duration: "30mins-35mins",
      priceRating: "fair price",
      serviceWorker: "infinity kitchen",
      courier: {
        name: "amy",
        location: "ilorin",
      },
      menu: [
        {
          id: 5,
          name: "buttered bread",
          price: "750",
          image: IMAGES.bread2,
          description: "food gives us energy",
          calories: 70,
        },
        {
          id: 6,
          name: "wheat bread",
          price: 600,
          image: IMAGES.bread3,
          description: "food gives us energy",
          calories: 85,
        },
        {
          id: 7,
          name: "chocolate bread",
          price: 1100,
          image: IMAGES.bread4,
          description: "food gives us energy",
          calories: 100,
        },
        {
          id: 8,
          name: "coconut bread",
          price: "899",
          image: IMAGES.bread1,
          description: "food gives us energy",
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
      duration: "20mins-30min",
      priceRating: "expensive",
      serviceWorker: "infinity kitchen",
      courier: {
        name: "remy",
        location: "Takie",
      },
      menu: [
        {
          id: 10,
          name: "garnished chicken",
          price: "7000",
          image: IMAGES.chicken2,
          description: "food gives us energy",
          calories: 55,
        },
        {
          id: 11,
          name: "roasted chicken",
          price: "6500",
          image: IMAGES.chicken3,
          description: "food gives us energy",
          calories: 52,
        },
        {
          id: 12,
          name: "midly done chicken",
          price: 6000,
          image: IMAGES.chicken4,
          description: "food gives us energy",
          calories: 35,
        },
        {
          id: 13,
          name: "chicken lap",
          price: 2500,
          image: IMAGES.chicken1,
          description: "food gives us energy",
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
      serviceWorker: "infinity kitchen",
      categories: [4, 8],
      image: IMAGES.fish1,
      duration: "15-25mins",
      priceRating: "fair price",
      courier: {
        name: "jacob",
        location: "stadium area",
      },
      menu: [
        {
          id: 15,
          name: "ganished fish",
          price: 2499,
          image: IMAGES.fish2,
          description: "food gives us energy",
          calories: 49,
        },
        {
          id: 16,
          name: "fried fish",
          price: 2199,
          image: IMAGES.fish3,
          description: "food gives us energy",
          calories: 69,
        },
        {
          id: 17,
          name: "smoked fish",
          price: "1599",
          image: IMAGES.fish4,
          description: "food gives us energy",
          calories: 40,
        },
        {
          id: 18,
          name: "midly done fish",
          price: 1099,
          image: IMAGES.fish1,
          description: "food gives us energy",
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
      image: IMAGES.noodles1,
      duration: "15mins-20mins",
      priceRating: "affordable",
      serviceWorker: "infinity kitchen",
      courier: {
        name: "henry",
        location: "sun-sun",
      },
      menu: [
        {
          id: 20,
          name: "indomitable noodles",
          price: "999",
          image: IMAGES.noodles2,
          description: "food gives us energy",
          calories: 30,
        },
        {
          id: 21,
          name: "golden penny noodles",
          price: 799,
          image: IMAGES.noodles3,
          description: "food gives us energy",
          calories: 35,
        },
        {
          id: 22,
          name: "onions noodles",
          price: "699",
          image: IMAGES.noodles1,
          description: "food gives us energy",
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
      categories: [6],
      image: IMAGES.potatoes1,
      duration: "20mins-30mins",
      priceRating: "fair price",
      serviceWorker: "infinity kitchen",
      courier: {
        name: "jack",
        location: "arowomole",
      },
      menu: [
        {
          id: 25,
          name: "fried potatoes",
          price: "499",
          image: IMAGES.potatoes2,
          description: "food gives us energy",
          calories: 60,
        },
        {
          id: 26,
          name: "potato porridge",
          price: 599,
          image: IMAGES.potatoes3,
          description: "food gives us energy",
          calories: 65,
        },
        {
          id: 27,
          name: "garnished potatoes",
          price: "799",
          image: IMAGES.potatoes1,
          description: "food gives us energy",
          calories: 55,
        },
        {
          id: 28,
          name: "irish potatoes",
          price: "689",
          image: IMAGES.potatoes2,
          description: "food gives us energy",
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
      serviceWorker: "infinity kitchen",
      image: IMAGES.rice1,
      duration: "45mins-1hour",
      priceRating: "expensive",
      courier: {
        name: "danny",
        location: "south coast",
      },
      menu: [
        {
          id: 30,
          name: "fried rice",
          price: "2999",
          image: IMAGES.rice2,
          description: "food gives us energy",
          calories: 78,
        },
        {
          id: 31,
          name: "white rice",
          price: 1599,
          image: IMAGES.rice3,
          description: "food gives us energy",
          calories: 85,
        },
        {
          id: 32,
          name: "coconut rice",
          price: "1499",
          image: IMAGES.rice4,
          description: "food gives us energy",
          calories: 75,
        },
        {
          id: 33,
          name: "jollof rice",
          price: "2099",
          image: IMAGES.rice1,
          description: "food gives us energy",
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
      image: IMAGES.spag1,
      serviceWorker: "infinity kitchen",
      duration: "30mins-45mins",
      priceRating: "fair price",
      courier: {
        name: "amy",
        location: "north coast",
      },
      menu: [
        {
          id: 35,
          name: "stir fried spag",
          price: "2599",
          image: IMAGES.spag2,
          description: "food gives us energy",
          calories: 78,
        },
        {
          id: 36,
          name: "white spag & stew",
          price: 1599,
          image: IMAGES.spag3,
          description: "food gives us energy",
          calories: 85,
        },
        {
          id: 37,
          name: "red spag",
          price: "1099",
          image: IMAGES.spag4,
          description: "food gives us energy",
          calories: 75,
        },
        {
          id: 38,
          name: "jollof spag",
          price: "1999",
          image: IMAGES.spag1,
          description: "food gives us energy",
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
      image: IMAGES.beans1,
    },
    {
      name: "bread",
      id: 2,
      image: IMAGES.bread1,
    },
    {
      name: "chicken",
      id: 3,
      image: IMAGES.chicken1,
    },
    {
      name: "fish",
      id: 4,
      image: IMAGES.fish1,
    },
    {
      name: "noodles",
      id: 5,
      image: IMAGES.noodles1,
    },
    {
      name: "potatoes",
      id: 6,
      image: IMAGES.potatoes1,
    },
    {
      name: "rice",
      id: 7,
      image: IMAGES.rice1,
    },
    {
      name: "spaghetti",
      id: 8,
      image: IMAGES.spag1,
    },
  ];

//   const Header = () => {
//     return (
//       <View>
//  </View>
//     );
//   };

//   const TopCategory = () => {
//     return (
// <View></View>
//     );
//   };


//     return (
// <View></View>
//     )
//   };

  return (
    <View>
      {/* {Header()}
      {TopCategory()} */}
    </View>
  );
};

const styles = StyleSheet.create({});
