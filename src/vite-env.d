/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_PUBLIC_TOKEN_MARVEL: string
    readonly VITE_PRIVATE_TOKEN_MARVEL: string

}

interface ImportMeta {
    readonly env: ImportMetaEnv
}