import { View, Text, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { useVideos } from "../context/VideoContext";

const { height } = Dimensions.get("window");

function VideoItem({ uri }: { uri: string }) {
  const player = useVideoPlayer(uri, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View style={{ height, backgroundColor: "#000" }}>
      <VideoView
        player={player}
        style={{ flex: 1 }}
        allowsFullscreen={false}
      />

      <View
        style={{
          position: "absolute",
          left: 15,
          bottom: 100,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          @clipx_user
        </Text>

        <Text style={{ color: "#fff", marginTop: 6 }}>
          Uploaded on ClipX 🚀
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          right: 10,
          bottom: 120,
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={{ marginBottom: 20 }}>
          <Ionicons name="person-circle" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 20 }}>
          <Ionicons name="heart" size={35} color="white" />
          <Text style={{ color: "white" }}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 20 }}>
          <Ionicons name="chatbubble" size={35} color="white" />
          <Text style={{ color: "white" }}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="share-social" size={35} color="white" />
          <Text style={{ color: "white" }}>0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Home() {
  const { videos } = useVideos();

  if (videos.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>
          No Videos Yet
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={videos}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <VideoItem uri={item} />}
      keyExtractor={(_, index) => index.toString()}
    />
  );
}
