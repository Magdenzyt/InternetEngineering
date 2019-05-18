import fetch from 'isomorphic-fetch';

export function createLoginPost(data) {
    return fetch('http://localhost:8080/user/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}