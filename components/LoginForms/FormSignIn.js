import { Text } from 'react-native';
import GlassView from '../GlassView';

const FormSignIn = ({ style }) => {

    return (
        <GlassView style={{alignItems: 'center', justifyContent: 'center', ...style}} gradientProps={{
            colors: ['rgba(255, 255, 255, 0.6)', 'transparent'],
            start: { x: 0, y: 0 },
            end: { x: 0.75, y: 0.75 }
        }}>
        </GlassView>
    );

};

export default FormSignIn;