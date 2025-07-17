import { Link } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const ListHeader = () => {
  return (
    <View style={[styles.headerContainer]}>
      <View style={[styles.headerTop]}>
        <View style={[styles.headerLeft]}>
          <View style={[styles.avatarContainer]}>
            <Image
              source={require("../../assets/images/logo.jpg")}
              style={styles.avatarImage}
            />
            <Text style={[styles.avatarText]}>Sandro's Electronics</Text>
          </View>
        </View>
        <View style={[styles.headerRight]}>
          <Link style={styles.cartContainer} href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <View>
                  <FontAwesome
                    name="shopping-cart"
                    size={25}
                    color="gray"
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                  <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>1</Text>
                  </View>
                </View>
              )}
            </Pressable>
          </Link>
          <TouchableOpacity
            style={styles.signOutButton}>
              
              <FontAwesome name='sign-out' size={25} color='red' />
            </TouchableOpacity>
        
        </View>
      </View>
      <View style={[styles.heroContainer]}>
        <Image
          source={require('../../assets/images/hero.png')}
          style={styles.heroImage}
        />
      </View>
      <View style={[styles.categoriesContainer]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    gap: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // Allow left side to take available space
    minWidth: 0, // Prevent overflow issues
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // Allow container to expand
    minWidth: 0,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  avatarText: {
    fontSize: 16,
    color: "black",
    flex: 1,
    flexWrap: "wrap",
    minWidth: 0,
  },
  cartContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 40,
  },
  heroContainer: {
    width: "100%",
    height: 200,
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  categoriesContainer: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  category: {
    width: 100,
    alignItems: "center",
    marginBottom: 16,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  categoryText: {},
  badgeContainer: {
    position: "absolute",
    top: -5,
    right: 10,
    backgroundColor: "#1BC464",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  signOutButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 40,
  },
});
