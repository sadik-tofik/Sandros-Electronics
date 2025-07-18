import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
function TabBarIcon(props: {
    name:React.ComponentProps<typeof FontAwesome>['name']
    color: string;
}){
    return <FontAwesome size={24} style ={{ color: '#1BC464'}}{...props} />;
}


const TabsLayout = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <Tabs screenOptions={{
                tabBarActiveTintColor: "#1BC464",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: {
                    fontSize: 14,
                    marginBottom: 10, // Adjust this value to align text vertically
                },
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 5,
                    marginBottom: 10,
                    height: 60, // Added fixed height
                },
                headerShown: false,
            }}>
                <Tabs.Screen name="index" options={{
                    title: 'shop',
                    tabBarIcon(props){
                        return <TabBarIcon {...props} name = 'shopping-cart'/>;
                    },
                }} />
                <Tabs.Screen name="orders" options={{
                    title: 'Orders',
                    tabBarIcon(props){
                        return <TabBarIcon {...props} name = 'book'/>;
                    },
                }}  />
            </Tabs>
        </SafeAreaView>
    );
};

export default TabsLayout;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});