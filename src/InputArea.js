import * as React from "react";
import { Input, Button } from "semantic-ui-react";
import storage from "store";

function InputArea(props) {
  return (
    <React.Fragment>
      <Input
        type="text"
        placeholder="Todoを入力"
        className="add-input"
        value={props.inputText}
        onChange={event => {
          const value = event.target.value;

          props.updateInputText(value);
        }}
        action={{
          color: "pink",
          content: "追加",
          disabled: props.inputText === "",
          onClick: () => {
            const todo = {
              done: false,
              text: props.inputText
            };

            // 新規のtodoを追加したtodosを作成
            const todos = [...props.todos, todo];

            props.updateTodos(todos);
            props.updateInputText("");
          }
        }}
        size="large"
      />
      <Button
        size="small"
        className="delete-all"
        color="green"
        disabled={props.todos.length === 0}
        onClick={() => {
          const todos = props.todos.filter(todo => {
            return todo.done === false;
          });

          props.updateTodos(todos);
        }}
      >
        完了を一括で削除
      </Button>
    </React.Fragment>
  );
}

export default InputArea;
