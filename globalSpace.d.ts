declare global {
    namespace NodeJS {
        interface ProcessEnv {
            telegramToken: string;
        }
    }
}

export {};