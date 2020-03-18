export const FETCH_POST = "FETCH_POST";
export const FETCH_TODO = "FETCH_TODO";
export const FETCH_USER = "FETCH_USER";

interface CounterState {
  counter: number;
  posts: PostAPIResponse;
  todos: TodoAPIResponse;
  users: UserAPIResponse;
}

const initialState: CounterState = {
  counter: 0,
  posts: {
    loading: false,
    error: null,
    data: []
  },
  todos: {
    loading: false,
    error: null,
    data: []
  },
  users: {
    loading: false,
    error: null,
    data: []
  }
};

export default function counterReducer(
  state: CounterState = initialState,
  action: any
) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, posts: { ...state.posts, loading: true } };
    case `${FETCH_POST}_SUCCESS`:
      return {
        ...state,
        posts: { ...state.posts, loading: false, data: action.data }
      };
    case `${FETCH_POST}_FAIL`:
      return {
        ...state,
        posts: { ...state.posts, loading: false, error: "Server Error" }
      };
    case FETCH_TODO:
      return { ...state, todos: { ...state.todos, loading: true } };
    case `${FETCH_TODO}_SUCCESS`:
      return {
        ...state,
        todos: { ...state.todos, loading: false, data: action.data }
      };
    case `${FETCH_TODO}_FAIL`:
      return {
        ...state,
        todos: { ...state.todos, loading: false, error: "Server Error" }
      };

    case FETCH_USER:
      return { ...state, users: { ...state.users, loading: true } };
    case `${FETCH_USER}_SUCCESS`:
      return {
        ...state,
        users: { ...state.users, loading: false, data: action.data }
      };
    case `${FETCH_USER}_FAIL`:
      return {
        ...state,
        users: { ...state.users, loading: false, error: "Server Error" }
      };
    default:
      return state;
  }
}

export function requestPosts(urlPath: string) {
  return {
    type: FETCH_POST,
    urlPath
  };
}

export function requestTodos(urlPath: string) {
  return {
    type: FETCH_TODO,
    urlPath
  };
}

export function requestUsers(urlPath: string) {
  return {
    type: FETCH_USER,
    urlPath
  };
}

export interface APIRequest {
  type: string;
  urlPath: string;
}

interface APIResponse {
  loading: boolean;
  error: null | string;
  data: any;
}

interface PostAPIResponse extends APIResponse {
  data: Post[];
}

interface TodoAPIResponse extends APIResponse {
  data: Todo[];
}

interface UserAPIResponse extends APIResponse {
  data: User[];
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
