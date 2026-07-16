import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { getPendingleaves } from "../../../api/admin.api";
import LeaveCard from "./components/LeaveCard";

const LeaveRequestsScreen = () => {
  const [leaves, setLeaves] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadLeaves = async () => {
    try {
      setLoading(true);
      const response = await getPendingleaves();
      setLeaves(response.leaves || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeaves();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={leaves}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }: any) => (
          <LeaveCard leave={item} />
        )}
        refreshing={loading}
        onRefresh={loadLeaves}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          leaves.length === 0
            ? styles.emptyContainer
            : styles.listContainer
        }
        ListHeaderComponent={
          leaves.length > 0 ? (
            <View style={styles.header}>
              <Text style={styles.heading}>
                Leave Requests
              </Text>

              <Text style={styles.subHeading}>
                Review and manage faculty leave requests.
              </Text>
            </View>
          ) : null
        }
        ListEmptyComponent={
          !loading ? (
            <View style={styles.emptyView}>
              <Text style={styles.emptyIcon}>
                📭
              </Text>

              <Text style={styles.emptyTitle}>
                No Leave Requests
              </Text>

              <Text style={styles.emptySubTitle}>
                There are currently no pending leave requests.
              </Text>
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default LeaveRequestsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  listContainer: {
    paddingBottom: 20,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },

  subHeading: {
    marginTop: 6,
    color: "#6B7280",
    fontSize: 15,
  },

  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  emptyView: {
    alignItems: "center",
  },

  emptyIcon: {
    fontSize: 70,
    marginBottom: 18,
  },

  emptyTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  emptySubTitle: {
    marginTop: 10,
    color: "#6B7280",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 24,
  },
});