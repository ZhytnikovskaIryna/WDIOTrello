declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PASSWORDTRELLO: string;
        USERTRELLO: string;

      }
    }
  }
  export {}