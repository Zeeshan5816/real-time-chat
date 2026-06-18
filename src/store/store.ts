export type UserId = string ;

export interface chat{
    Id:string,
    userId: UserId;
    name: string;
    message: string;
    upvote: UserId[];
}


export abstract class Store{
    constructor(){

    }
    
    initroom(roomId:string){

    }

    getchats(room: string, limit: number, offset: number){
        
    }

    addchat(userId: UserId, message: string, name: string, room: string){

    }

    upvote(userId: string, roomId: string, chatId: string){

    }

}