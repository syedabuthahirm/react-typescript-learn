import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./redux/rootReducer";
import { requestPosts, requestTodos } from "./redux/counterReducer";

function Counter(props: any) {
  const counter = useSelector((store: AppState) => store.counter);
  console.log(counter.todos, counter.posts);
  const dispatch = useDispatch();
  let id = 2;
  useEffect(() => {
    dispatch(requestPosts("/posts"));
    dispatch(requestTodos("/todos"));
    dispatch(requestTodos(`/users/${id}`));
  }, []);
  return <div></div>;
}

export default Counter;
