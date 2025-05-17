declare global {
    interface Window {
        supportAI: SupportAI;
    }
}

export type SupportAI = {
    version: string;
    enableAutoReply: () => never;
};

export { };