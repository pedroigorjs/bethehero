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
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#13131A',
    marginTop: 50,
    marginBottom: 15,
  },

  description: {
    fontSize: 20,
    color: '#737380',
  },

  incidentDetails: {
    marginTop: 30,    
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },

  incidentDetailsHeader: {
    flexDirection: 'row',
  },

  incidentProperty: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#41414d',
    textTransform: 'uppercase',
  },

  incidentValue: {
    color: '#737380',
    marginBottom: 20,
  },

  detailsButton: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f5',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#e02041',
    fontWeight: 'bold',
    fontSize: 15,
  },
})