declare module "steamidconverter" {
    export const BASE_NUM: bigint;
    export const REGEX_STEAMID64: RegExp;
    export const REGEX_STEAMID: RegExp;
    export const REGEX_STEAMID3: RegExp;
    export function toSteamID64(steamid: string): bigint | false;
    export function toSteamID(steamid64: string): string | false;
    export function toSteamID3(steamid: string): string | false;
    export function fromSteamID3(steamid3: string): string;
    export function isSteamID(id: string): boolean;
    export function isSteamID64(id: string): boolean;
    export function isSteamID3(id: string): boolean;
    export function profileURL(steamid64: string): string;
}

/**
 * Original module: https://github.com/kingdragox99/steamid-converter
 * NPM: steamidconverter
 * Author: Horse M.D.
 * Type declarations by obfuscatedgenerated
 */