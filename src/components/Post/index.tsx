import React from 'react'
import { FlatList } from 'react-native'
import Toast from 'react-native-toast-message'

import { Author } from './Author'
import { Comments } from './Comments'
import { AddComment } from './AddComment'
import { usePost } from '../../hooks/usePost'

import { LoadPage } from '../LoadPage'
import { Container, InfoContainer, Info, Content, Image } from './style'

export const Post = () => {
  const { addComment, loading, posts } = usePost()

  const handleAddComment = async (comment: string, postId: string) => {
    if (comment === '') {
      Toast.show({
        type: 'info',
        text1: 'Oooops',
        text2: 'Você precisa escrever um comentário primeiro'
      })
      return
    }
    await addComment(comment, postId)
  }

  if (loading) {
    return <LoadPage />
  }

  if (posts.length < 1) {
    return (
      <InfoContainer>
        <Info>
          Você ainda não tem nenhum foto {'\n'}
          Que tal compartilhar uma agora
        </Info>
      </InfoContainer>
    )
  }

  return (
    <Container>
      { posts.length > 0 && (
        <FlatList
          data={posts}
          keyExtractor={ item => `${item.id}` }
          renderItem={({ item: post }) => {
            return (
              <Content key={ String(`${post.id}`) }>
                <Image source={{ uri: post.imageUrl ? post.imageUrl : '' }}/>
                <Author user={ { name: post?.nickname, email: post?.email } }/>
                <Comments comments={ post.comments }/>
                {/* @ts-ignore */}
                <AddComment postId={ post.id } onComment={ handleAddComment }/>
              </Content>
            )
          }}
        />
      ) }
    </Container>
  )
}
