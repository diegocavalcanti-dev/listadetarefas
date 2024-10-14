import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Cadastro from './components/Cadastro'
import ListaDeContatos from './containers/ListaDeContatos'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Lista de Contatos</h1>
        <Cadastro />
        <ListaDeContatos />
      </div>
    </Provider>
  )
}

export default App
