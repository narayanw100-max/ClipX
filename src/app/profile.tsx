import { View, Text, Image } from "react-native";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        paddingTop: 60,
      }}
    >
      <Image
        source={{
          uri: "https://i.pravatar.cc/200",
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
      />

      <Text
        style={{
          color: "#fff",
          fontSize: 22,
          fontWeight: "bold",
          marginTop: 15,
        }}
      >
        @clipx_user
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 25,
          gap: 30,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#fff", fontSize: 18 }}>0</Text>
          <Text style={{ color: "#aaa" }}>Following</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#fff", fontSize: 18 }}>0</Text>
          <Text style={{ color: "#aaa" }}>Followers</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#fff", fontSize: 18 }}>0</Text>
          <Text style={{ color: "#aaa" }}>Likes</Text>
        </View>
      </View>

      <Text
        style={{
          color: "#fff",
          marginTop: 40,
          fontSize: 18,
        }}
      >
        No Videos Yet
      </Text>
    </View>
  );
}
