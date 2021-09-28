export interface ChatUser {
    id: number;
    image?: string;
    name: string;
    message: string;
    time: string;
    status: string;
}

export interface ChatMessage {
    id?: number;
    image?: string;
    name?: string;
    message?: string;
    time?: string;
    align?: string;
    text?: string;
    status?: string;
}
