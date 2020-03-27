import React from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import logo from '../assets/logo.png'

import styles from './incidents/styles'

const Incidents = () => {
  const navigation = useNavigation()

  function navigateToDetails() {
    navigation.navigate('Details')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo
e salve o dia.</Text>

      <FlatList 
        data={[1, 2, 3]}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incidentItem}>
            <View style={styles.incidentDetails}>
              <Text style={styles.incidentProperty}>Caso:</Text>
              <Text style={styles.incidentValue}>Cadelinha Atropelada 1</Text>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>APAE Cotia</Text>
              <Text style={styles.incidentProperty}>Valor:</Text>
              <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetails}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={24} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

export default Incidents
