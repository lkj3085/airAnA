import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  useWindowDimensions,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import CustomMarker from "../../components/CustomMarker";

import places from "../../../assets/data/feed";

import PostCarouselItem from "../../components/PostCarouselItem/index";

const SearchResultMap = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatlist = useRef();
  const map = useRef();

  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({ index });

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={styles.container}>
      <MapView
        ref={map}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map((place) => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            coordinate={place.coordinate}
            price={place.newPrice}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{ position: "absolute", bottom: 10 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          decelerationRate="normal"
          snapToAlignment="center"
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
          key={places.id}
          ref={flatlist}
          data={places}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default SearchResultMap;
