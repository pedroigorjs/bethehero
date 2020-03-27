import React from 'react'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import { NumberFormat } from 'intl'

import logo from '../assets/logo.png'

import styles from './details/styles'

const Details = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const incident = route.params.incident

  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}.`
  const phone = `55${incident.whatsapp}`

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do Caso: Cadelinha atropelada',
      recipients: [incident.email],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${phone}&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incidentDetails}>
        <View style={styles.incidentDetailsHeader}>
          <View style={styles.incidentDetailsGroup}>
            <View style={styles.incidentDetailsBox}>
              <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Caso:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>
            </View>
            <View style={styles.incidentDetailsBox}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>
            </View>
          </View>

          <View style={styles.incidentDetailsGroup}>
            <View style={styles.incidentDetailsBox}>
              <Text style={styles.incidentProperty}>Cidade:</Text>
              <Text style={styles.incidentValue}>{incident.city}</Text>
            </View>
            <View style={styles.incidentDetailsBox}>
              <Text style={styles.incidentProperty}>UF:</Text>
              <Text style={styles.incidentValue}>{incident.uf}</Text>
            </View>
          </View>
        </View>

        <View style={styles.incidentDetailsBox}>
          <Text style={styles.incidentProperty}>Descrição:</Text>
          <Text style={styles.incidentValue}>{incident.description}</Text>
        </View>
        <View style={styles.incidentDetailsBox}>
          <Text style={styles.incidentProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>{NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
        </View>
      </View>

      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Salve o dia!</Text>
        <Text style={styles.contactTitle}>Seja o herói desse caso.</Text>
        <Text style={styles.contactText}>Entre em contato.</Text>

        <View style={styles.contactButtons}>
          <TouchableOpacity style={styles.contactButton} onPress={sendWhatsapp}>
            <Text style={styles.contactButtonText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton} onPress={sendMail}>
            <Text style={styles.contactButtonText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Details
