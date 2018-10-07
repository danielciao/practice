export const REQUEST_TODO_LIST = "todo/REQUEST_LIST";
export const RECEIVE_TODO_LIST = "todo/RECEIVE_LIST";
export const TODO_LIST_HELLO = "todo/HELLO_LIST";

export const getTodoList = () => dispatch => {
  dispatch({ type: REQUEST_TODO_LIST });

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data =>
      dispatch({ type: RECEIVE_TODO_LIST, payload: { data, error: false } })
    )
    .catch(error => {
      dispatch({ type: RECEIVE_TODO_LIST, payload: { error, data: false } });
      console.error(error);
    });
};

export const sayHello = () => {
  return { type: TODO_LIST_HELLO };
};
