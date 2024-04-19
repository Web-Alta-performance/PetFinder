import { Text, View } from "react-native";

const RandomScreen = ({ route }) => {
    const { text } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>O texto que você inseriu foi:</Text>
            <Text>{text ?? 'você não inseriu nenhum texto'}</Text>
        </View>
    );
};

export { RandomScreen };