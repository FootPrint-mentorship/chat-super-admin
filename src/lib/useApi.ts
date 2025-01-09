import { useState, useEffect } from 'react';

// Define the types for the data returned by the API
type UseApiProps<T> = {
    apiFunction: () => Promise<T>;
    params?: any;
};

// Custom Hook to handle API requests
export const useApi = <T>({ apiFunction, params }: UseApiProps<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await apiFunction();
                setData(result);
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiFunction, params]);

    return { data, loading, error };
};
