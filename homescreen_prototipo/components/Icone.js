import { StyleSheet, View, Image } from 'react-native';

const Icone = props => {
    return(
        <View style={[styles.ball, {width: props.size, height: props.size}]}>
            <Image style={{flex: 1, transform: [{scale: '75%'}]}} source={{uri: 'https://cdn-icons-png.flaticon.com/512/620/620851.png'}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    ball: {
        width: 100,
        height: 100,
        borderRadius: 200,
        backgroundColor: '#eee',
        overflow: 'hidden',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,

        elevation: 5,
    },
});

export default Icone;