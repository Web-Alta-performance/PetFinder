import { View } from 'react-native';
import GradientBorder from './GradientBorder';
import { BlurView } from 'expo-blur';

const GlassView = ({ gradientProps, style, tint, ...props }) => {
    const intensity = props.intensity ?? 10;
    const noBorder = { borderWidth: 0 };
    
    return (
        <View style={[{...style}, noBorder]}>
            <BlurView experimentalBlurMethod='dimezisBlurView' style={[{...style}, noBorder]} intensity={intensity} tint={tint}>
                <GradientBorder
                    gradientProps={gradientProps}
                    style={{...style, position: 'absolute'}}
                >
                    {props.children}
                </GradientBorder>
            </BlurView>
        </View>
    );
};

export default GlassView;