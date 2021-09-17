import { Flex } from '@chakra-ui/react'
import { useFeed } from '../../hooks/useFeed'
import { Post } from './post'

export const Posts = () => {
    const { posts } = useFeed()

    return (
       <Flex
        flexDir='column-reverse'
       >
        {posts.map(post => {
            return (
                <Post
                  key={post.postId}
                  postId={post.postId}
                  avatar={post.author.avatar}
                  name={post.author.name}
                  content={post.content}
                  likesCounter={post.likeCount}
                  commentsCounter={post.commentsCount}
                  CommentsList={post.comments}
                  likeId={post.likeId} 
                />
            )
        })}
       </Flex>
    )
}