import { StyleSheet, useWindowDimensions, View, Image, Text } from 'react-native';
import ForgotPasswordForm from '../../components/LoginForms/ForgotPasswordForm';

const ForgotPassword = ({ navigation }) => {

    const { height } = useWindowDimensions();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../../assets/forgotPasswordBackground.jpg')}
                style={[styles.background, { height }]}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', gap: 30, }}>
                <ForgotPasswordForm navigation={navigation} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
});

export default ForgotPassword;