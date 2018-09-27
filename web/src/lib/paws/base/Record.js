import FetchAble from './FetchAble'

class Record extends FetchAble {
    
    all() {
        return this._fetch({
            method: 'GET',
            url: this.url,
            auth: true,
        });
    }
}
export default Record;