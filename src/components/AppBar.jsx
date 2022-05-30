import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import theme from '../theme'
import Constants from 'expo-constants'
import StyledText from './StyledText.jsx'
/* import { useLocation } from 'react-router-dom' */

const AppBarTab = ({ children, to }) => {
    /* const { pathname } = useLocation()
    const active = pathname == to */
    
    const textStyles = [
        styles.text,
        /* active && styles.active */
    ]
    
    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

export default function AppBar() {
  return (
    <View style={styles.container}>
        <ScrollView horizontal>
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
            {/* <Link active to={{ screen: 'Repositories' }} fontWeight='bold'>
                Repositories
            </Link>
            <Link to={{ screen: 'Sign in' }} fontWeight='bold'>
                Sign In
            </Link>
            <Link to={{ screen: 'Register' }} fontWeight='bold'>
                Register
            </Link>
            <Link to={{ screen: 'Account' }} fontWeight='bold'>
                My Account
            </Link>
            <Link to={{ screen: 'Account' }} fontWeight='bold'>
                Share
            </Link>
            <Link to={{ screen: 'Account' }} fontWeight='bold'>
                Help
            </Link> */}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.AppBar.primary,
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        paddingLeft: 10,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    text: {
        color: theme.AppBar.secondaryText,
        paddingHorizontal: 10,
        fontSize: 16
    },
    active: {
        color: theme.AppBar.primaryText
    }
})