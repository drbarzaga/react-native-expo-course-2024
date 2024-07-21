import { View, Text } from "react-native";
import { formatCurrency } from "../lib/utils";

export function Price({ price }) {
    const getColor = () => {
        if (price < 100) {
            return 'text-green-500';
        }
        if (price < 500) {
            return 'text-yellow-500';
        }
        return 'text-red-500'
    }

    return (
        <Text className={`text-lg font-bold ${getColor()}`}>
            {formatCurrency(price)}
        </Text>
    )
}