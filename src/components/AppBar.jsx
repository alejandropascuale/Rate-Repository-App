import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import theme from '../theme'
import Constants from 'expo-constants'
import StyledText from './StyledText.jsx'
/* import { useRoute } from '@react-navigation/native'; */

const AppBarTab = ({ children, to }) => {
    
    /* const route = useRoute();
    const active = route.name === to
    
    const textStyles = [
        styles.text,
        active && styles.active
    ] */
    
    return (
        <Link to={to} style={{ paddingHorizontal: 8 }}>
            <StyledText fontWeight='bold' style={styles.text}>
                {children}
            </StyledText>
        </Link>
    )
}

export default function AppBar() {
  return (
    <View style={styles.container}>
        <ScrollView horizontal style={styles.scroll}>
            <AppBarTab to={{ screen: 'Sign in'  }}>
                Sign in
            </AppBarTab>
            <AppBarTab to={{ screen: 'Register'  }}>
                Register
            </AppBarTab>
            <AppBarTab to={{ screen: 'Repositories'  }}>
                Repositories
            </AppBarTab>
            <AppBarTab to={{ screen: 'Account'  }}>
                Account
            </AppBarTab>
            <AppBarTab to={{ screen: 'Information'  }}>
                Information
            </AppBarTab>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.AppBar.primary,
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
    },
    text: {
        color: theme.AppBar.primaryText,
        paddingHorizontal: 10
    },
    scroll: {
        paddingHorizontal: 10,
        paddingBottom: 15,
    },
    active: {
        color: theme.AppBar.primaryText
    }
})