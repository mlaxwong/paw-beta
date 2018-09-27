'use strict';

import Field from './resources/Field';

const resources = {
    Field,
}

const handler = {
    get (target, prop, receiver) {
        if (prop in target) return target[prop];
        if (prop in resources) {
            if (!(prop in target._resource)) {
                target._resource[prop] = new resources[prop]({
                    baseUrl: target.url,
                    token: target.token,
                    auth: target.auth,
                });
            }
            return target._resource[prop];
        };
    }
}

class Paws {
    constructor({
        token = null,
        url = null,
        auth = null,
    } = {}) { 
        this._resource = [];
        this.token = token;
        this.url = url;
        this.auth = auth;
        return new Proxy(this, handler); 
    }
}

export default Paws;