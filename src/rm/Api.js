import React from 'react';
import { useAuth } from '../util/AuthContext';

export const useApi = () => {
    const auth = useAuth();

    const API_BASE = "https://makerapi-production.up.railway.app"

    const getPopularCollections = async () => {
        const resp = await fetch(`${API_BASE}/collections/trending`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth.token()}`,
            },
        })
        const res = await resp.json()
        if (resp.status !== 200) {
            return [[], new Error(`could not fetch collections: [${resp.status}] ${JSON.stringify(res)}`)]
        }
        /*const collections = [];
        for (let i = 0; i < 10; i++) {
            collections.push({ id: i, name: `Intersting collection ${i}`, description: `Even more intersting description ${i}` },)
        }
        return [collections, null];*/
    };

    const getPopularLevels = async () => {
        const resp = await fetch(`${API_BASE}/levels/trending`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth.token()}`,
            },
        })
        const res = await resp.json()
        if (resp.status !== 200) {
            return [[], new Error(`could not fetch collections: [${resp.status}] ${JSON.stringify(res)}`)]
        }
        /*const collections = [];
        for (let i = 0; i < 10; i++) {
            collections.push({ id: i, name: `Intersting level ${i}`, description: `Even more intersting description ${i}`, difficulty: 4 },)
        }
        return [collections, null];*/
    };

    const getDraft = async (id) => {
        const resp = await fetch(`${API_BASE}/drafts/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth.token()}`,
            },
        })
        const res = await resp.json();
        if (resp.status !== 200) {
            return [{}, new Error(`invalid response: [${resp.status}] ${JSON.stringify(res)}`)]
        }
        return [res.draft, null]
    }

    const deleteDraft = async (id) => {
        const resp = await fetch(`${API_BASE}/drafts/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${auth.token()}`,
            },
        })
        const res = await resp.json();
        if (resp.status !== 200) {
            return new Error(`invalid response: [${resp.status}] ${JSON.stringify(res)}`)
        }
        return null
    }

    const getLevel = async (id) => {
        const resp = await fetch(`${API_BASE}/levels/info/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth.token()}`,
            },
        })
        const res = await resp.json();
        if (resp.status !== 200) {
            return [{}, new Error(`invalid response: [${resp.status}] ${JSON.stringify(res)}`)]
        }
        return [res.level, null]
        //return [{ id: id, name: `Intersting level ${id}`, description: `Even more intersting description ${id}`, difficulty: 4, created: new Date(), user: { name: 'Dummy User', uid: 1 } }, null]
    }

    const deleteLevel = async (id) => {
        const resp = await fetch(`${API_BASE}/levels/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${auth.token()}`,
            },
        })
        const res = await resp.json();
        if (resp.status !== 200) {
            return new Error(`invalid response: [${resp.status}] ${JSON.stringify(res)}`)
        }
        return null
    }

    const getUser = async (id) => {
        if (id === 0) id = auth.user.id;
        const resp = await fetch(`${API_BASE}/u/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth.token()}`,
            },
        })
        const res = await resp.json();
        if (resp.status !== 200) {
            return [{}, new Error(`invalid response: [${resp.status}] ${JSON.stringify(res)}`)]
        }
        return [res.user, null]
    }

    const getUserDrafts = async () => {
        const resp = await fetch(`${API_BASE}/drafts/u`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth.token()}`,
            },
        })
        const res = await resp.json();
        if (resp.status !== 200) {
            return [{}, new Error(`invalid response: [${resp.status}] ${JSON.stringify(res)}`)]
        }
        return [res.drafts, null]
    }

    const getUserLevels = async (id) => {
        if (id === 0) id = auth.user.uid;
        const resp = await fetch(`${API_BASE}/levels/u/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth.token()}`,
            },
        })
        const res = await resp.json();
        if (resp.status !== 200) {
            return [{}, new Error(`invalid response: [${resp.status}] ${JSON.stringify(res)}`)]
        }
        return [res.levels, null]
        //return getPopularLevels()
    }

    return {
        getPopularCollections,
        getPopularLevels,
        getDraft,
        deleteDraft,
        getLevel,
        deleteLevel,
        getUser,
        getUserDrafts,
        getUserLevels,
    }
};