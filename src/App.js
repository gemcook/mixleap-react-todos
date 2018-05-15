import React, { Component } from "react";
import { Input, Checkbox, Button } from "semantic-ui-react";
import storage from "store";
import classNames from "classnames";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // ローカルストレージの初期読み込み
    const todos = storage.get("todos");

    this.state = {
      todos: todos || [],
      inputText: ""
    };
  }

  render() {
    return (
      <div className="a__todos">
        <div className="b__title">
          <h1>Mix Leap React Todos</h1>
        </div>
        <div className="b__add-input">
          <Input
            type="text"
            placeholder="Todoを入力"
            className="add-input"
            value={this.state.inputText}
            onChange={e => {
              const value = e.target.value;

              // Stateに保存
              this.setState({
                inputText: value
              });
            }}
            action={{
              color: "pink",
              content: "追加",
              disabled: this.state.inputText === "",
              onClick: () => {
                const todo = {
                  done: false,
                  text: this.state.inputText
                };

                // 新規のtodoを追加したtodosを作成
                const todos = [...this.state.todos, todo];

                // ローカルストレージに保存
                storage.set("todos", todos);

                // Stateに保存
                this.setState({
                  todos,
                  inputText: ""
                });
              }
            }}
            size="large"
          />
          <Button
            size="small"
            className="delete-all"
            color="green"
            disabled={this.state.todos.length === 0}
            onClick={() => {
              const todos = this.state.todos.filter(todo => {
                return todo.done === false;
              });

              // ローカルストレージに保存
              storage.set("todos", todos);

              // Stateに保存
              this.setState({
                todos
              });
            }}
          >
            完了を一括で削除
          </Button>
        </div>
        <div className="b__lists">
          {this.state.todos.length === 0 ? (
            <p className="no-message">Todoがありません</p>
          ) : (
            <ul>
              {this.state.todos.map((todo, i) => {
                return (
                  <li key={`${todo}-${i}`}>
                    <span
                      className="w__text"
                      onClick={() => {
                        // doneの状態を変更したtodosを作成
                        const todos = this.state.todos.map((todo, index) => {
                          if (i === index) {
                            return {
                              done: !todo.done,
                              text: todo.text
                            };
                          }
                          return todo;
                        });

                        // ローカルストレージに保存
                        storage.set("todos", todos);

                        // Stateに保存
                        this.setState({
                          todos
                        });
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
                        const todos = this.state.todos.filter((todo, index) => {
                          return i !== index;
                        });

                        // ローカルストレージに保存
                        storage.set("todos", todos);

                        // Stateに保存
                        this.setState({
                          todos
                        });
                      }}
                    >
                      ×
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
