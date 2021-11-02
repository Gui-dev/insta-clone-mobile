import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, Content, Input, ButtonSend } from './style'

type AddCommentProps = {
  postId: string
  onComment: (postId: string, comment: string) => Promise<void>
}

export const AddComment = ({ postId, onComment }: AddCommentProps) => {
  const [comment, setComment] = useState('')

  const handleAddComment = async () => {
    await onComment(postId, comment)
    setComment('')
  }

  return (
    <Container>
      <Content>
        <Input
          placeholder="Pode comentar..."
          value={ comment }
          onChangeText={ setComment }
        />
        <ButtonSend onPress={ handleAddComment }>
          <Feather name="send" size={24} color="#FFF"/>
        </ButtonSend>
      </Content>
    </Container>
  )
}
