import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import * as S from './styled.js';

export default function Repositories() {
  const history = useHistory();
  const [renderRepositories, setRenderRepositories] = useState([]);


  useEffect(() => {
    let repoName = localStorage.getItem('repositoriesName');
    if(repoName !== null) {
      repoName = JSON.parse(repoName);
      setRenderRepositories(repoName);
      localStorage.clear();
    } else {
      history.push('/');
    }
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        { renderRepositories.map((repository, idx) => {
          return (
            <S.ListItem key={ idx }>{ `Repositório: ${repository}` }</S.ListItem>
          )
        }) }
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  )
}
