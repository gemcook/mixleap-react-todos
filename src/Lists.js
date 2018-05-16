import * as React from "react";
import { Input, Checkbox, Button } from "semantic-ui-react";
import storage from "store";
import classNames from "classnames";

function Lists(props) {
  const todos = [
    {
      done: true,
      text: "ご飯を食べる"
    },
    {
      done: false,
      text: "勉強する"
    }
  ];
  return (
    <React.Fragment>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={`${todo}-${i}`}>
              <span className="w__text">
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
              <span className="remove">×</span>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default Lists;
