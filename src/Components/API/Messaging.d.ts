export declare const fetchUsers: () => Promise<any>;
export declare const fetchConversations: () => Promise<any>;
export declare const handleCreateConversation: (userId: any) => Promise<any>;
export declare const createMessage: (text: any, conversationId: any) => Promise<any>;
export declare const getConversationMessages: (conversationId: any) => Promise<any>;
export declare const getConversationsProfiles: () => Promise<any>;
export declare const setTyping: (receiverId: any, conversationId: any, isTyping: any) => Promise<void>;
