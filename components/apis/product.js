import fetch from 'isomorphic-fetch'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function getProduct(query) {
    if (query.id) {
        return fetch(`${publicRuntimeConfig.API_URL}/api/products/${query.id}`, {
            method: 'get',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}