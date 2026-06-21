import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { useVideos } from "../context/VideoContext";

export default function Home() {
  const { videos } = useVideos();

  const firstVideo = videos.length > 0 ? videos[0] : null;

  const player = useVideoPlayer(firstVideo ?? "", (player) => {
    player.loop = true;
    player.play();
  });

  if (!firstVideo) {
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
    <View style={{ flex: 1, backgroundColor: "#000" }}>
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
