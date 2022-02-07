import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import '../styles/index.css'
import { store } from '../state/store';
import { Header } from '../components/header';
import Layout from '../components/Layout'
import HomePage from './HomePage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  
  <Provider store={store}>
   
      <Header />
      <HomePage />
      <Component {...pageProps} />
      <Layout>
    </Layout>
  </Provider>
  )
}

export default MyApp