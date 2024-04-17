import { getLocales } from 'expo-localization';


const getContentTable = () => {
    const lang = getLocales()[0].languageCode;
    const content = {
        aboutPetFinder: 'Petfinder is an app that aims to ease the adoption of dogs, cats and other pets that need a new home.',
        developedBy: 'Developed by',
        homeScreen: 'Home',
        settingsScreen: 'Settings',
        chatsScreen: 'Chats',
        accountScreen: 'Account',
        supportScreen: 'Support',

        // Authentication
        signInLabel: 'Sign In',
        forgotPasswordLabel: 'Forgot password',
        createAccountLabel: 'Create an account here',
        loginButton: 'Login',
        createAccountButton: 'Create account',
        forgotPasswordButton: 'Change password',
        passwordLabel: 'Password',
        confirmPasswordLabel: 'Confirm password',
        newPasswordLabel: 'New password',
        userNameLabel: 'Username'
    };

    switch (lang) {
        case 'pt':
            content.aboutPetFinder = 'Petfinder é um aplicativo que visa facilitar e democratizar a adoção de cães, gatos, e outros pets que necessitam de um novo lar.';
            content.developedBy = 'Desenvolvido por';
            content.homeScreen = 'Início';
            content.settingsScreen = 'Configurações';
            content.chatsScreen = 'Conversas';
            content.accountScreen = 'Conta';
            content.supportScreen = 'Suporte';

            // Authentication
            content.signInLabel = 'Fazer login';
            content.forgotPasswordLabel = 'Esqueci a senha';
            content.createAccountLabel = 'Crie uma conta aqui';
            content.loginButton = 'Entrar';
            content.createAccountButton = 'Criar conta';
            content.forgotPasswordButton = 'Alterar senha';
            content.passwordLabel = 'Senha';
            content.confirmPasswordLabel = 'Confirmar senha';
            content.newPasswordLabel = 'Nova senha';
            content.userNameLabel = 'Nome de usuário';
            break;
    }

    return content;
};

export const contentTable = getContentTable();