import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type likesProps = {
    likeId: string;
    name: string;
    avatar: string;
    authorId: string;
}[];

type firebaseLikesProps = Record<string, {
    name: string;
    avatar: string;
    authorId: string;
}>

export function useGetLikes( path: string ) {
    const [likes, setLikes] = useState<likesProps>([]);

    useEffect(() => {
        const likesRef = database.ref(path);

        likesRef.on('value', likes => {
            const databaseLikes = likes.val();
            const firebaseLikes: firebaseLikesProps = databaseLikes ?? {};

            const parsedLikes = Object.entries(firebaseLikes).map(([key, value]) => {
                return {
                    authorId: value.authorId,
                    name: value.name,
                    avatar: value.avatar,
                    likeId: key
                }
            });

            setLikes(parsedLikes);
        });

        return () => {
            likesRef.off('value'); 
        }

    }, [path]);

    return { likes }
}