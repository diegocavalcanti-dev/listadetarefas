import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionarContato } from '../../store/reducers/contatos'
import { Contato } from '../../models/Contato'
import { Container } from './styles'

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const novoContato: Contato = {
      id: Date.now().toString(),
      nome,
      email,
      telefone
    }
    dispatch(adicionarContato(novoContato))
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <Container>
      <h2>Cadastrar Contato</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <button type="submit">Adicionar</button>
      </form>
    </Container>
  )
}

export default Cadastro
