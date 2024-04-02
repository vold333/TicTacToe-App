import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name}: IconsProps) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle" size={38} color="red"/>
        case 'cross':
            return <Icon name="times" size={38} color="gold"/>
        case 'star':
            return <Icon name="star" size={38} color="blue"/>
        case 'heart':
            return <Icon name="heart" size={38} color="pink"/>
        default:
            return <Icon name="question" size={38} color="black"/>
    }
}

const styles = StyleSheet.create({})

export default Icons
