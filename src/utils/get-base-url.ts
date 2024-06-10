import { baseUrl } from "../constants/url";

export function getBaseUrl(url?: string): string {
    return url ? baseUrl + url : baseUrl;
}