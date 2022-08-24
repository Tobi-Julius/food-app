import { View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { COLORS, ICONS, SIZES } from "../constants";
import { Text } from "../component/common";

export const Restaurant = ({ route }) => {
  const [value, setValue] = useState({
    restaurant: null,
    streetName: "",
    fromLocation: null,
    toLocation: null,
    region: null,
  });

  useEffect(() => {
    let isSubcribe = true;

    const { item, area, gpsData } = route.params;
    const fromLoc = gpsData;
    const toLoc = item.courier.gps;
    const streetName = area;

    if (isSubcribe === true) {
      const region = {
        latitude: (fromLoc?.latitude + toLoc?.latitude) / 2,
        longitude: (fromLoc?.longitude + toLoc?.longitude) / 2,
        latitudeDelta: Math.abs(fromLoc?.latitude - toLoc?.latitude) * 2,
        longitudeDelta: Math.abs(fromLoc?.longitude - toLoc?.longitude) * 2,
      };
      setValue({
        ...value,
        streetName: streetName,
        restaurant: item,
        fromLocation: fromLoc,
        toLocation: toLoc,
        region: region,
      });
    }

    return () => (isSubcribe = false);
  }, []);

  const renderMap = () => {
    const DestinationMarker = () => {
      return (
        <Marker coordinate={value?.toLocation}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.white,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: COLORS.orange,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={ICONS.redpin}
                style={{ width: 25, height: 25, tintColor: COLORS.white }}
              />
            </View>
          </View>
        </Marker>
      );
    };

    const CarIcon = () => {
      return (
        <Marker
          anchor={{ x: 0.5, y: 0.5 }}
          coordinate={value.fromLocation}
          flat={true}
          // rotation
        >
          <Image
            source={ICONS.car}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </Marker>
      );
    };

    return (
      <View>
        <MapView
          style={{ height: SIZES.height, width: SIZES.width }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsBuildings={true}
          initialRegion={value?.region}
        >
          {DestinationMarker()}
          {CarIcon()}
        </MapView>
      </View>
    );
  };

  return value.fromLocation === null ||
    value.region === null ||
    value.toLocation === null ? (
    <Text text="Permission to Detect Location Denied" />
  ) : (
    <View style={{ flex: 1 }}>{renderMap()}</View>
  );
};
