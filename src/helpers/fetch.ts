import { baseUrl } from '../constants/misc';

export const fetchWithoutToken = async <T>(
    endpoint: string,
    data?: T,
    method = 'GET'
) => {
    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        const resp = await fetch(url);
        return await resp.json();
    } else {
        const resp = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return await resp.json();
    }
};

export const fetchWithToken = async <T>(
    endpoint: string,
    data?: T,
    method = 'GET'
) => {
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    if (method === 'GET') {
        const resp = await fetch(url, {
            method,
            headers: {
                'x-token': token,
            },
        });
        return await resp.json();
    } else {
        const resp = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'x-token': token,
            },
            body: JSON.stringify(data),
        });
        return await resp.json();
    }
};
