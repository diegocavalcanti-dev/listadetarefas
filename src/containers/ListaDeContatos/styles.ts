// src/containers/ListaDeContatos/styles.ts
import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px;
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color:rgb(207, 48, 64);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
  }
`
