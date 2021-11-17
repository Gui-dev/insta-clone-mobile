import React from 'react'

import { Container, Content, Nickname, Comment } from './style'

type CommentAttributes = {
  nickname: string | undefined
  comment: string | undefined
}

type CommentsProps = {
  comments: CommentAttributes[]
}

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <Container>
      { comments && comments.length > 0 && comments.map((comment, index) => {
        return (
          <Content key={ String(index) }>
            <Nickname>{comment.nickname}: </Nickname>
            <Comment>{comment.comment}</Comment>
          </Content>
        )
      }) }
    </Container>
  )
}
