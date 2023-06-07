export default interface IRoom {
  room: string;
  roomId?: string;
  imageUrl?: string;
}
export interface IMessage {
  id: string;
  socketId: string;
  text: string;
}
