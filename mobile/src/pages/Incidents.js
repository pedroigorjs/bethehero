import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NumberFormat } from 'intl'

import api from '../services/api'
import logo from '../assets/logo.png'

import styles from './incidents/styles'

const Incidents = () => {
  const navigation = useNavigation()
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)

  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  function navigateToDetails(incident) {
    navigation.navigate('Details', { incident })
  }


  async function loadIncidents() {
    if(loading) return

    if(total > 0 && incidents.length === total) return

    setLoading(true)

    const { headers, data } = await api.get('incidents', {
      params: { page }
    })

    setIncidents(old => [...old, ...data])
    setTotal(headers['x-total-count'])
    setPage(old => old + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo
e salve o dia.</Text>

      <FlatList 
        data={incidents}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={true}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incidentItem}>
            <View style={styles.incidentDetails}>
              <Text style={styles.incidentProperty}>Caso:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>
              <Text style={styles.incidentProperty}>Valor:</Text>
              <Text style={styles.incidentValue}>
                {NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL'
                })
                .format(incident.value)}
              </Text>
            </View>

            <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetails(incident)}>
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
