import { View } from 'react-native';
import GradientBorder from './GradientBorder';
import { BlurView } from 'expo-blur';

const GlassView = ({
    intensity = 15,
    borderRadius = 0,
    tint = 'default',
    gradientProps,
    style,
    children
}) => {
    const fullSize = { flex: 1, justifyContent: 'center', alignItems: 'center' };
    const noBorder = { borderWidth: 0 };
    
    return (
        <View style={[{...style}, noBorder]}>
            <BlurView
                style={[{...style}, fullSize, noBorder, { borderRadius }]}
                intensity={intensity}
                tint={tint}
            >
                <GradientBorder
                    gradientProps={gradientProps}
                    style={{...style, width: '100%', height: '100%', position: 'absolute' }}
                >
                    {children}
                </GradientBorder>
            </BlurView>
        </View>
    );
};

export default GlassView;