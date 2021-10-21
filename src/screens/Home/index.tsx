import React from 'react'

import { Post } from './../../components/Post'

import { Container } from './style'

export const Home = () => {
  const posts = [
    {
      id: 'iqwhdiqwnfdiwqen',
      imageUrl: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/10/the-batman-1.webp',
      user: {
        email: 'gui@email.com',
        name: 'gui.ts'
      },
      comments: [
        {
          nickname: 'Bruce Wayne',
          comments: ['Meu comentário']
        }
      ]
    },
    {
      id: 'djsnfjdsnbjfnbonbo',
      imageUrl: 'https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/30005/show/piramides-de-teotihuacan.jpg',
      user: {
        email: 'gui@email.com',
        name: 'gui.ts'
      },
      comments: [
        {
          nickname: 'Clark Kent',
          comments: ['Outro Comentário']
        }
      ]
    }
  ]

  return (
    <Container>
      <Post posts={ posts }/>
    </Container>
  )
}
