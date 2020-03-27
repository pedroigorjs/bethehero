import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import logo from '../assets/logo.png'

import styles from './details/styles'

const Details = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        
        <TouchableOpacity onPress={() => {}}>
          <Feather name="arrow-left" size={24} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incidentDetails}>
        <View style={styles.incidentDetailsHeader}>
          <Text style={styles.incidentProperty}>Caso:</Text>
          <Text style={styles.incidentValue}>Cadelinha Atropelada 1</Text>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAE Cotia</Text>
        </View>
        <Text style={styles.incidentProperty}>Descrição:</Text>
        <Text style={styles.incidentValue}>Descrição do caso 1</Text>
        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>
    </View>
  )
}

export default Details
