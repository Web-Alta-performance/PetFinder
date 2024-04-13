import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

const GradientBorderView = ({
    borderWidth,
    borderRadius,
    gradientProps,
    style,
    children
}
) => {
    let padding = style.padding ?? 0;
    padding += borderWidth ?? style.borderWidth ?? 0;

    if (!gradientProps) gradientProps = { colors: ['transparent', 'transparent'] };
    if (!style) style = {}

    return (
        <View style={[{ ...style }, { borderWidth: 0, borderRadius: 0, padding, backgroundColor: 'transparent' }]}>
            {children}
            <MaskedView
                maskElement={(
                    <View
                        pointerEvents='none'
                        style={[
                            { borderWidth, borderRadius },
                            { ...style },
                            StyleSheet.absoluteFill,
                        ]}
                    />
                )}
                style={[StyleSheet.absoluteFill]}
            >
                <LinearGradient
                    pointerEvents='none'
                    style={[StyleSheet.absoluteFill]}
                    {...gradientProps}
                />
            </MaskedView>
        </View>
    );
};

export default GradientBorderView;