import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#f0f0f5',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  incidentDetails: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },

  incidentDetailsHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  incidentDetailsBox: {
    marginBottom: 15,
  },

  incidentProperty: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#41414d',
    textTransform: 'uppercase',
  },

  incidentValue: {
    color: '#737380',
  },

  contact: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },

  contactTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#13131A',
  },

  contactText: {
    fontSize: 15, 
    color: '#737380',
    marginTop: 15,
  },

  contactButtons: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },

  contactButton: {
    width: '48%',
    height: 50,
    backgroundColor: '#e02041',
    borderRadius: 8,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
})