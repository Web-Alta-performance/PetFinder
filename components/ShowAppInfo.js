import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const team = [
    {
        name: 'Carlos Ramalho',
        function: 'Líder',
    },
    {
        name: 'Márcio Sobel',
        function: 'Designer, dev full-stack',
    },
    {
        name: 'Gustavo Portella',
        function: 'Designer',
    },
    {
        name: 'Rafael Antônio Mendes',
        function: 'Tester',
    },
    {
        name: 'José Gabriel de Oliveira Lino',
        function: 'Tester',
    },
    {
        name: 'Laryssa Rayanne Souza Martins',
        function: 'Tester',
    },
    {
        name: 'Rafael Ferreira dos Anjos',
        function: 'Tester'
    },
    {
        name: 'Débora Vitória',
        function: 'Supporter'
    },
    {
        name: 'Diego Rodrigues',
        function: 'Supporter'
    },
    {
        name: 'Eric Mendonça',
        function: 'Supporter',
    },
    {
        name: 'Jessica Nascimento',
        function: 'Supporter',
    },
    {
        name: 'João Guilherme Caetano',
        function: 'Supporter',
    },
    {
        name: 'João Victor Mendonça',
        function: 'Supporter',
    },
]

const ShowAppInfo = ({ visible, onPress }) => {
    return (
        <Modal
            animationType='slide'
            transparent
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.mainView}>
                    <Text style={styles.title}>PETFINDER</Text>
                    <Text style={styles.subtitle}>
                        Criado por:
                    </Text>
                    {team.map((p, i) => (
                        <Text
                            key={i}
                            style={[styles.text, { marginLeft: 20 }]}
                        >
                            {`${i + 1}. ${p.name} (${p.function})`}
                        </Text>
                    ))}
                    <Pressable onPress={onPress}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Fechar</Text>
                        </View>
                    </Pressable>
                </View>
            </View>

        </Modal>
    );
}

export { ShowAppInfo };

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    mainView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        fontFamily: 'Quicksand-Bold',
        alignSelf: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontFamily: 'Quicksand-Bold'
    },
    text: {
        fontFamily: 'Quicksand-Medium'
    },
    button: {
        backgroundColor: '#101010',
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Quicksand',
        color: 'white',
    }
});