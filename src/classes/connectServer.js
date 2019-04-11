import axios from 'axios';

export default class ConnectServer {
  constructor() {
    this.url = 'http://localhost:5000/';
    console.log('URL:' + this.url);
  }

  async getEcoTips() {
    let requestUrl = this.url + 'api/getTips';
    const res = await axios.get(requestUrl);
    let {data} = await res;
    if (data) {
      if (data.status === 'SUCCEED') return data.value;
      else return data;
    }
    const error = {error: 'res.data is undefined'};
    throw error;
  }
  getPictureUrl(path) {
    let requestUrl = this.url + 'api/getPicture/' + path;
    return requestUrl;
  }
}
