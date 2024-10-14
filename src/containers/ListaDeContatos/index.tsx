import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/reducers'
import { removerContato } from '../../store/reducers/contatos'
import EditarContato from '../../components/EditarCadastro'
import { Container } from './styles'
import { Contato } from '../../models/Contato'

const ListaDeContatos: React.FC = () => {
  const contatos = useSelector((state: RootState) => state.contatos.contatos)
  const dispatch = useDispatch()
  const [contatoParaEditar, setContatoParaEditar] = useState<Contato | null>(
    null
  )

  const handleEdit = (contato: Contato) => {
    setContatoParaEditar(contato)
  }

  const handleCloseEdit = () => {
    setContatoParaEditar(null)
  }

  return (
    <Container>
      <h2>Lista de Contatos</h2>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.id}>
            {contato.nome} - {contato.email} - {contato.telefone}
            <button onClick={() => handleEdit(contato)}>Editar</button>
            <button onClick={() => dispatch(removerContato(contato.id))}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      {contatoParaEditar && (
        <EditarContato contato={contatoParaEditar} onClose={handleCloseEdit} />
      )}
    </Container>
  )
}

export default ListaDeContatos
