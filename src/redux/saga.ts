import { call, put, takeLatest, all } from "redux-saga/effects";
import { FETCH_TODO, FETCH_POST, APIRequest } from "./counterReducer";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function getAPI(action: APIRequest) {
  return await axios({
    method: "get",
    url: `${BASE_URL}${action.urlPath}`,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

function* getTasks(action: any) {
  try {
    const data = yield call(getAPI, action);
    yield put({ type: `${action.type}_SUCCESS`, data: data.data });
  } catch (err) {
    yield put({ type: `${action.type}_FAIL`, err: err.message });
  }
}

export default function* sagas() {
  yield all([
    takeLatest(FETCH_TODO, getTasks),
    takeLatest(FETCH_POST, getTasks)
  ]);
}
