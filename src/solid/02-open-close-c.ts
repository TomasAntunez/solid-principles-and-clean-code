// import axios from 'axios';


export class HttpClient {

  async get( url: string ) {
    // const { data, status } = await axios.get( url );
    const response = await fetch( url );
    return {
      data   : response.json(),
      status : response.status
    };
  }

}
