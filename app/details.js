import { Link } from "expo-router";
import { Pressable, ScrollView } from "react-native";
import { Text } from "react-native";
import { HomeIcon } from "../components/Icons";


export default function Details() {
    return (
        <ScrollView>
            <Link asChild href="/" >
                <Pressable>
                    <Text className="text-white mt-24">
                        <HomeIcon />
                        Go back
                    </Text>
                </Pressable>
            </Link>

            <Text className="text-white font-bold mt-4 text-4xl text-center">
                Product details screen
            </Text>

            <Text className="text-white">
                This is the product details screen. It is a simple screen that displays the details of a product.
            </Text>
        </ScrollView>
    )
}