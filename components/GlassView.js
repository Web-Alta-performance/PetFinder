import { Platform, View } from 'react-native';
import GradientBorder from './GradientBorder';
import { BlurView } from 'expo-blur';

const GlassView = ({ gradientProps, style, children }, props) => {
    const intensity = props.intensity ? props.intensity : 10;
    const borderRadius = style.borderRadius ? style.borderRadius : 0;
    const fullSize = { flex: 1, justifyContent: 'center', alignItems: 'center' };
    const noBorder = { borderWidth: 0 };
    const tint = props.tint ? props.tint : 'systemChromeMaterialLight'
    
    return (
        <View style={[{...style}, noBorder]}>
            <BlurView
                experimentalBlurMethod={ Platform.OS === 'android' ? 'dimezisBlurView' : 'none' }
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