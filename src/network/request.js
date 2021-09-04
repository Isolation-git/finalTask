import axios from 'axios';

export function request(config,success,failure) {
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:3456',
        timeout: 5000
    })
    instance(config)
        .then(res => {
            success(res);
        })
        .catch(err => {
            failure(err);
        })
}

export function listUsers(url,success,failure) {
    axios.get(url).then(res => {
        success(res);
    }).catch(err => {
        failure(err)
    })
}