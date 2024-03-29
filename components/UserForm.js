import { Pressable, Text, TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import GlassView from './GlassView';

export const FormUserInput = ({ value, secure, onChange, children }) => {
    return (
        <View style={{ gap: 10, width: '100%', alignItems: 'center' }}>
            <Text style={[styles.text, Foreground]}>
                {children}
            </Text>
            <TextInput
                style={[styles.input, Foreground]}
                secureTextEntry={secure}
                autoCapitalize='none'
                autoCorrect={false}
                value={value}
                onChangeText={newText => onChange(newText)}
            />
        </View>
    )
}

export const FormUserButton = ({ onPress, children, color }) => {
    const buttonBg = {backgroundColor: color}
    return (
        <Pressable onPress={() => onPress()}>
            <View style={[{...styles.button, ...buttonBg}, Foreground]}>
                <Text style={[styles.buttonText, Foreground]}>{children}</Text>
            </View>
        </Pressable>
    )
}

export const FormUserLink = ({ onPress, children }) => {
    return (
        <Pressable onPress={(onPress)} style={Foreground}>
            <Text style={[styles.linkText, Foreground]}>{children}</Text>
        </Pressable>
    )
}

export const UserForm = ({ children, height }) => {

    // FIXME: blur currently breaks navigation
    isBlurBroken = true;

    return (
        <GlassView
            style={{justifyContent: 'center', alignItems: 'center', ...styles.form, height, Foreground}}
            gradientProps={{
                colors: ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.0)'],
                start: { x: 0, y: 0 },
                end: { x: 0.75, y: 1 }
            }}
            intensity={isBlurBroken ? 0 : 12}
            >
            {children}
        </GlassView>
    );
};

const Foreground = { zIndex: 10 }

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