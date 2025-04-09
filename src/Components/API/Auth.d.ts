export declare const registerUser: (email: string, phone: string, password: string, passwordConfirmation: string) => Promise<void>;
export declare const authenticateUser: (email: string) => Promise<void>;
export declare const resetPassword: (token: string, email: string, password: string, passwordConfirmation: string) => Promise<void>;
export declare const forgotPassword: (email: string) => Promise<void>;
