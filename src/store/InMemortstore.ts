import { UserId , chat , Store } from "./store";
let globalchatid = 0;
export interface Room{
    roomId: string;
    chats: chat[];
}

export class InMemoryStore implements Store{
    private store: Map<string,Room>;
    constructor(){
        this.store = new Map<string,Room> ;
    }
    
    initroom(roomId: string){
        this.store.set(roomId,{
            roomId,
            chats:[]
        });
            

    }

    getchats(roomId: string, limit: number, offset: number){
        const room = this.store.get(roomId);
        if(!room)
            return []
        return room.chats.reverse().slice(0,offset).slice(-1*limit);

    }

    addchat(userId: UserId, message: string, name: string,  roomId: string){
        const room = this.store.get(roomId);
        if(!room)
            return []
        room.chats.push({
            Id : (globalchatid++).toString(),
            userId,
            name,
            message,
            upvote: []
        })
    }

    upvote(userId: UserId, roomId: string, chatId: string){
        const room = this.store.get(roomId);
        if(!room)
            return []
        const chat = room.chats.find(({Id}) => Id===roomId);

        if(chat){
            chat.upvote.push(userId)
        }
    }

}