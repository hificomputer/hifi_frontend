'use client';

import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const postDefaultConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const usePost = (url, auth_required = true, config = postDefaultConfig) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);


    const perform_post = useCallback(async payload => {
        if (auth_required && config?.headers) {
            config.headers.Authtoken = `Token ${localStorage.getItem('hifi_user_t')}`
        }
        setLoading(true);
        try {
            let res = await axios.post(url, payload, config);
            setData(res.data);
            setSuccess(true);
            setError(null);
        } catch (error) {
            setSuccess(false);
            setError(error?.response?.data);
        } finally {
            setLoading(false);
        }
    })
    return { data, loading, success, error, perform_post };
}

export const useGet = (url, auth_required = true) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);


    const perform_get = useCallback(async (params = {}) => {
        let headers = {}
        if (auth_required) {
            headers.Authtoken = `Token ${localStorage.getItem('hifi_user_t')}`
        }
        setLoading(true);
        try {
            let res = await axios.get(url, {
                params, headers
            });
            setData(res.data);
            setSuccess(true);
            setError(null);
        } catch (error) {
            setSuccess(false);
            setError(error?.response?.data);
        } finally {
            setLoading(false);
        }
    })
    return { data, loading, success, error, perform_get };
}