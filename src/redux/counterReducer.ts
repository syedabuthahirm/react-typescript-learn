export const FETCH_POST = "FETCH_POST";
export const FETCH_TODO = "FETCH_TODO";

interface CounterState {
  counter: number;
  posts: PostAPIResponse;
  todos: TodoAPIResponse;
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
