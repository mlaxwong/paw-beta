import Record from './../base/Record';

class Field extends Record {
    constructor(config) {
        super(config);
        this.url = '/fields';
    }
}
export default Field;