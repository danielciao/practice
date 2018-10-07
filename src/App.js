import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getTodoList, sayHello } from "./redux/actions/todo";

import ActiveComponent from "./components/ActiveComponent";
import Display from "./components/Display";
import { TodoList, TodoItem } from "./components/Todo";
import withActiveState from "./hoc/withActiveState";

const ActiveDisplay = withActiveState(Display)(true);

class App extends Component {
  state = {
    todoList: []
  };

  componentDidMount() {
    const { handleGetTodoList } = this.props;

    handleGetTodoList();
  }

  render() {
    const { todo, handleGreeting } = this.props;
    const { requesting, data, error } = todo;

    return (
      <Fragment>
        <ActiveComponent>
          {({ active, handleToggleActive }) => (
            <div>
              <h1>Currently I am {active ? "active" : "not active"}</h1>
              <button onClick={handleToggleActive}>Toggle Active</button>
              <button onClick={handleGreeting}>Say Hello!</button>
            </div>
          )}
        </ActiveComponent>
        <ActiveDisplay />
        <Fragment>
          {requesting && <div>Loading list...</div>}
          {!requesting && error && <div>Error! {JSON.stringify(error)}</div>}
          {!requesting &&
            data &&
            data
              .reduce((result, current) => {
                if (result.indexOf(current.userId) === -1) {
                  result.push(current.userId);
                }
                return result;
              }, [])
              .map(userId => {
                const list = data.filter(data => (data.userId = userId));

                return (
                  <Fragment key={userId}>
                    <h2>User {userId}</h2>
                    <TodoList>
                      {list.map(item => (
                        <TodoItem key={`${userId}-${item.id}`} {...item} />
                      ))}
                    </TodoList>
                  </Fragment>
                );
              })}
        </Fragment>
      </Fragment>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    handleGetTodoList() {
      dispatch(getTodoList());
    },
    handleGreeting() {
      dispatch(sayHello());
    }
  })
)(App);
