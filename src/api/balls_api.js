import axios from "axios";
import {httpClient, baseUrl} from '../api/httpclient2.js'

const SUBMIT_VIDEO_EVENTS_ = "/api/events/mapping/submit";
const GET_JOIN_ = "/api/events/mapping"
const PAGE_SIZE = 10;

const getEventType = async function (page) {
  return httpClient.get(`/api/events/video-event-types/?page=${page}`);
};

const getEventTypes = async function (pageNo) {
  const response = await getEventType(pageNo);
  const results = response.data.results;
  try {
    if (response.data.results.length < PAGE_SIZE) {
      const temp = results.slice(0, response.data.results.length);
      return temp;
    } else {
      return results.concat(await getEventTypes(pageNo+1));
    }
  } catch (err) {
  } 
}

const submitVideoEvents = async function (match_id = -1, video_id = -1, video_events = [], deletedEvents = []) {
  return httpClient.post(SUBMIT_VIDEO_EVENTS_, JSON.stringify({
          match_id: match_id,
          video_id: video_id,
          video_events: video_events,
          to_delete: deletedEvents,
        })
  );
}

const getBallEventJoin = async function (match_id, is_mapped) {
  const response = httpClient.get(GET_JOIN_+ `/${match_id}/${is_mapped ? 1 : 0}`);
  // console.log("getBallEventJoin: ", response);
  return response;
}

export {submitVideoEvents, getEventTypes, getBallEventJoin, baseUrl};