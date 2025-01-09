import dynamic from "next/dynamic";
import {AxiosRequestConfig} from "axios";
import {authRefreshTokenStorageKeyName, authTokenStorageKeyName} from "@/constant";
import Cookies from "js-cookie";

export const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

/**
 * isCORSVIolation:
 *
 * @param {XMLHttpRequest} request
 * @param {AxiosRequestConfig | undefined} config
 *
 * @returns {Boolean}
 */
export const isCORSViolation = (
    request: XMLHttpRequest,
    config?: AxiosRequestConfig
) => {
    const frontendURIHost = window.location.host;
    const backendBaseURL = new URL(
        config?.baseURL || config?.url || "https://x.yz"
    );
    const backendURIHost = backendBaseURL.host;
    const isCrossDomainRequest =
        backendURIHost !== "x.yz" && frontendURIHost !== backendURIHost;

    let hasAccessControlOnOrigin = false;
    const requestHasValidStatus = Boolean(
        request.status >= 200 && request.status <= 508
    );
    const contentType = request.getResponseHeader("Content-Type");

    if (isCrossDomainRequest) {
        let allowedOrigin = "";
        if (config?.withCredentials) {
            allowedOrigin =
                request.getResponseHeader("Access-Control-Allow-Origin") || "";
        }

        if (allowedOrigin.trim() === "*") {
            if (request.withCredentials) {
                return true;
            }
        } else {
            hasAccessControlOnOrigin = Boolean(
                allowedOrigin.trim() === backendBaseURL.origin.trim()
            );
        }
    }

    return (
        isCrossDomainRequest &&
        requestHasValidStatus &&
        !hasAccessControlOnOrigin &&
        contentType !== null
    );
};


/**
 * handleLogout:
 *
 * @returns {void}
 */
export const handleLogout = () => {
    Cookies.remove(authRefreshTokenStorageKeyName as string);
    Cookies.remove(authTokenStorageKeyName as string);
    return;
};
