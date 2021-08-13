import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled.js';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}/repos`);
      const { data } = response;
      const repoName = [];
      data.map((repository) => repoName.push(repository.name));
      
      localStorage.setItem('repositoriesName', JSON.stringify(repoName));
      setError(false);
      history.push('/repositories');
    } catch (err) {
      setError(true);
    }
  }

  return (
    <S.HomeContainer>
        <S.TitleH>Pesquise por um usuário do GitHub.</S.TitleH>
      <S.Content>
        <S.Input
          name="user"
          className="inputUser"
          placeholder="Usuário"
          value={ user }
          onChange={({ target: { value } }) => setUser(value) }
        />
        <S.Button
          type="button"
          onClick={ handleSearch }
        >
          Pesquisar
        </S.Button>
      </S.Content>
      { error ? <S.ErrorMsg>Usuário não encontrado. Tente novamente.</S.ErrorMsg> : '' }
        
    </S.HomeContainer>
  );
}
