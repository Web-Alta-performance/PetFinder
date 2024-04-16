import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './UserFormStyle';
import GlassView from './GlassView';
import { forwardRef } from 'react';

export const FormUserInput = forwardRef(({ value, secure, onChange, children, onSubmitEditing }, ref) => {
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
                onSubmitEditing={onSubmitEditing}
                returnKeyType={'next'}
                ref={ref}
            />
        </View>
    )
});

export const FormUserButton = ({ onPress, children, color }) => {
    const buttonBg = { backgroundColor: color }
    return (
        <Pressable style={Foreground} onPress={() => onPress()}>
            <View style={[{ ...styles.button, ...buttonBg }, Foreground]}>
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
            style={{ justifyContent: 'center', alignItems: 'center', ...styles.form, height, Foreground }}
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