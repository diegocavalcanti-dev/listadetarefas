import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editarContato } from '../../store/reducers/contatos'
import { Contato } from '../../models/Contato'
import { Container } from './styles'

interface EditarContatoProps {
  contato: Contato
  onClose: () => void
}

const EditarContato: React.FC<EditarContatoProps> = ({ contato, onClose }) => {
  const [nome, setNome] = useState(contato.nome)
  const [email, setEmail] = useState(contato.email)
  const [telefone, setTelefone] = useState(contato.telefone)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const contatoAtualizado: Contato = {
      id: contato.id,
      nome,
      email,
      telefone
    }
    dispatch(editarContato(contatoAtualizado))
    onClose()
  }

  return (
    <Container>
      <h2>Editar Contato</h2>
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
        <button type="submit">Salvar</button>
      </form>
    </Container>
  )
}

export default EditarContato
