import { Pressable, Text, TextInput, View } from 'react-native';
import GlassView from './GlassView';

const FormUserInput = ({value, secure, onChange, children, style}, props) => {
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

const FormUserButton = ({onPress, style, children, color}, props) => {
    const buttonBg = {backgroundColor: color}
    return (
        <Pressable onPress={onPress}>
            <View style={{...style.button, ...buttonBg}}>
                <Text style={style.buttonText}>{children}</Text>
            </View>
        </Pressable>
    )
}

const UserForm = ({ style, children }) => {

    return (
        <GlassView
            style={{justifyContent: 'center', alignItems: 'center', ...style}}
            gradientProps={{
                colors: ['rgba(255, 255, 255, 0.6)', 'transparent'],
                start: { x: 0, y: 0 },
                end: { x: 0.35, y: 1.1 }
            }}
            >
            {children}
        </GlassView>
    );
};


export { UserForm, FormUserInput, FormUserButton };