import { View, Text, Button } from "react-native-web"
export default function TaskDetailsComponent({item}){
    return <View>
        <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
        </View>
        <View>
            
        </View>

    </View>
}