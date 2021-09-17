import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";


type CommentaryProps = {
    name: string;
    avatar: string;
    commentary: string;
}

type PostProps = {
    postId: string;
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    likeCount: number;
    likeId: string | undefined;
    commentsCount: number;
    comments: CommentaryProps[] ;
}

type FirebasePosts = Record<number, {
    postId: string;
    name: string;
    avatar: string;
    content: string;
    likes: Record <string, {
       authorId: string; 
    }>;
    comments: Record<number , {
        name: string;
        avatar: string;
        commentary: string;
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
                    author: { name: value.name, avatar: value.avatar},
                    likeCount: Object.values(value.likes ?? {}).length,
                    likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
                    commentsCount: Object.values(value.comments ?? {}).length,
                    comments: Object.values(value.comments ?? {})
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