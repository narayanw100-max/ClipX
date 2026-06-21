import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
} from "expo-router/ui";
import { Text, StyleSheet } from "react-native";

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot />

      <TabList style={styles.tabList}>
        <TabTrigger name="index" href="/">
          <Text style={styles.text}>Home</Text>
        </TabTrigger>

        <TabTrigger name="upload" href="/upload">
          <Text style={styles.text}>Upload</Text>
        </TabTrigger>

        <TabTrigger name="profile" href="/profile">
          <Text style={styles.text}>Profile</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabList: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
  },
});
