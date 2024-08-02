export type GetParams = {
  userId?: string;
};

export interface CurrentUser {
  id: string;
  name: string;
  avatar: string;
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  email: string;
  company?: string;
  location?: string;
  status?: string;
  source?: string;
  access?: string;
}

export interface Metadata {
  duration: string;
  participants: number;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  metadata?: Metadata;
}

export interface CallRecording {
  duration: string;
}

export interface Conversation {
  id: string;
  contactId: string;
  messages: Message[];
  callRecording?: CallRecording;
  aiSummary?: string;
}

export interface Data {
  currentUser: CurrentUser;
  contacts: Contact[];
  conversations: Conversation[];
  team: CurrentUser[];
}
