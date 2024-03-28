import { Pressable, Text, TextInput, View } from 'react-native';
import GlassView from './GlassView';

export const FormUserInput = ({value, secure, onChange, children, style}, props) => {
    return (
        <View style={{ gap: 10, width: '100%', alignItems: 'center' }}>
            <Text style={style.text}>
                {children}
            </Text>
            <TextInput
                style={style.input}
                secureTextEntry={secure}
                autoCapitalize='none'
                autoCorrect={false}
                value={value}
                onChangeText={newText => onChange(newText)}
            />
        </View>
    )
}

export const FormUserButton = ({onPress, style, children, color}, props) => {
    const buttonBg = {backgroundColor: color}
    return (
        <Pressable onPress={() => onPress()}>
            <View style={{...style.button, ...buttonBg}}>
                <Text style={style.buttonText}>{children}</Text>
            </View>
        </Pressable>
    )
}

export const FormUserLink = ({onPress, style, children}, props) => {
    return (
        <Pressable onPress={onPress} style={style.link}>
            <Text style={style.linkText}>{children}</Text>
        </Pressable>
    )
}

export const UserForm = ({ style, children, height }) => {

    return (
        <GlassView
            style={{justifyContent: 'center', alignItems: 'center', ...style, height}}
            tint={'systemThickMaterialLight'}
            gradientProps={{
                colors: ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.0)'],
                start: { x: 0, y: 0 },
                end: { x: 0.75, y: 1 }
            }}
            >
            {children}
        </GlassView>
    );
};