import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { VideoView, useVideoPlayer } from "expo-video";
import { useVideos } from "../context/VideoContext";
export default function Upload() {
 const { addVideo } = useVideos();
 const [videoUri, setVideoUri] = useState<string | null>(null);

  const player = useVideoPlayer(videoUri ?? "", (player) => {
    player.loop = true;
    player.play();
  });

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["videos"],
      quality: 1,
    });

    if (!result.canceled) {
      setVideoUri(result.assets[0].uri);
    }
  };

  if (!videoUri) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={pickVideo}
          style={{
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Text>Select Video</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <VideoView
        player={player}
        style={{ flex: 1 }}
        allowsFullscreen
        allowsPictureInPicture
      />

      <TouchableOpacity
        onPress={() => {
  if (videoUri) {
    addVideo(videoUri);
    alert("Video Uploaded ✅");
  }
}}
 style={{
          position: "absolute",
          bottom: 100,
          alignSelf: "center",
          backgroundColor: "#ff0050",
          paddingHorizontal: 30,
          paddingVertical: 12,
          borderRadius: 25,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Upload Video
        </Text>
      </TouchableOpacity>
    </View>
  );
}
