import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        maxWidth: 450,
        borderRadius: 20,
        
        padding: 20,
        gap: 25,

        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 15,
        marginTop: 5,
    },
    optionsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    }
});

export default styles;