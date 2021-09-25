import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";


type CommentaryProps = {
    commentaryLikeId: string | undefined;
    commentaryLikeCount: number;
    commentaryId: string;
    name: string;
    avatar: string;
    commentary: string;
    commentaryPublicationTime: string;
}

type PostProps = {
    postId: string;
    author: {
        name: string;
        avatar: string;
        spec: string;
    };
    content: string;
    publicationTime: string;
    likeCount: number;
    likeId: string | undefined;
    commentsCount: number;
    comments: CommentaryProps[];
}

type FirebasePosts = Record<number, {
    postId: string;
    spec: string;
    name: string;
    avatar: string;
    content: string;
    publicationTime: string;
    likes: Record <string, {
       authorId: string; 
    }>;
    comments: Record<number , {
        commentaryId: string;
        name: string;
        avatar: string;
        commentary: string;
        commentaryPublicationTime: string;
        likes: Record <string, {
            authorId: string; 
        }>;
    }>
}>


export function useFeed() {
    const { user } = useAuth();
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const postsRef = database.ref(`posts`);

        postsRef.on('value', feed => {

            const databasePosts = feed.val();
            const FirebasePosts: FirebasePosts = databasePosts ?? {};

            const parsedPosts = Object.entries(FirebasePosts).map(([key, value]) => {
                

                return {
                    postId: key,
                    content: value.content,
                    publicationTime: value.publicationTime,
                    author: { name: value.name, avatar: value.avatar, spec: value.spec},
                    likeCount: Object.values(value.likes ?? {}).length,
                    likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
                    commentsCount: Object.values(value.comments ?? {}).length,
                    comments: Object.entries(value.comments ?? {}).map(([key, comment]) => {
                        return {    
                            commentaryId: key,
                            avatar: comment.avatar,
                            commentary: comment.commentary,
                            commentaryPublicationTime: comment.commentaryPublicationTime,
                            name: comment.name,
                            commentaryLikeCount: Object.values(comment.likes ?? {}).length,
                            commentaryLikeId: Object.entries(comment.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0]
                        }
                    })
                }
            });
            
            setPosts(parsedPosts);
        });

        return () => {
            postsRef.off('value'); 
        }
    }, [ user?.id ]);

    return {posts}
}