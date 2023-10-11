import { StyleSheet } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import Router from './src/routes/Router'

export default function App() {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  )
}

const styles = StyleSheet.create({})