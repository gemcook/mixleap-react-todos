import * as React from "react";
import { Input, Checkbox, Button } from "semantic-ui-react";
import storage from "store";
import classNames from "classnames";

function Lists(props) {
  return (
    <React.Fragment>
      {props.todos.length === 0 ? (
        <p className="no-message">Todoがありません</p>
      ) : (
        <ul>
          {props.todos.map((todo, i) => {
            return (
              <li key={`${todo}-${i}`}>
                <span
                  className="w__text"
                  onClick={() => {
                    // doneの状態を変更したtodosを作成
                    const todos = props.todos.map((todo, index) => {
                      if (i === index) {
                        return {
                          done: !todo.done,
                          text: todo.text
                        };
                      }
                      return todo;
                    });

                    props.updateTodos(todos);
                  }}
                >
                  <Checkbox checked={todo.done} />
                  <span
                    className={classNames({
                      text: true,
                      done: todo.done
                    })}
                  >
                    {todo.text}
                  </span>
                </span>
                <span
                  className="remove"
                  onClick={() => {
                    // ×ボタンを押したtodoを削除したtodosを作成
                    const todos = props.todos.filter((todo, index) => {
                      return i !== index;
                    });

                    props.updateTodos(todos);
                  }}
                >
                  ×
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
}

export default Lists;
