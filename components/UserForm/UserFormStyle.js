import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        width: '95%',
        height: 350,
        maxWidth: 450,
        borderRadius: 15,
        borderWidth: 2,

        justifyContent: 'center',
        gap: 20,
    },

    // text
    text: {
        color: 'white',
        fontFamily: 'Quicksand-Bold',
        fontSize: 17,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Quicksand-Bold',
        fontSize: 15,
        fontSize: 23,
    },
    linkText: {
        color: 'white',
        fontFamily: 'Quicksand-Bold',
        fontSize: 17,
    },

    // ui
    input: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 15,

        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        height: 40,
        paddingHorizontal: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 15,

        paddingHorizontal: 24,
        paddingTop: 10,
        paddingBottom: 12,

        borderRadius: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
});

export { styles };