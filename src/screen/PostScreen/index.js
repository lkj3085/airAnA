import React from "react";
import { View, Text } from "react-native";
import PostDetail from "../../components/PostDetail/index";
import places from "../../../assets/data/feed";
import { useRoute } from "@react-navigation/native";

const post = places[1];

const PostScreen = (props) => {
  const route = useRoute();

  const post = places.find((place) => place.id === route.params.postId);

  return (
    <View style={{ backgroundColor: "white" }}>
      <PostDetail post={post} />
    </View>
  );
};

export default PostScreen;
