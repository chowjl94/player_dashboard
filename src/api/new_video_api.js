// import axios from "axios";
import httpClient from "./httpclient";
// import {httpClient} from '../api/httpclient2.js'

const getMatchById = (match_id) => {
    // debugger;
    return httpClient.get(`http://127.0.0.1:8000/api/matches/?match_id=${match_id}`)
    // .then(res => (console.log("here!", res)))
    ;
}

export {getMatchById};