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
        defaultValue=""
        action={{
          color: "pink",
          content: "追加"
        }}
        size="large"
      />
      <Button size="small" className="delete-all" color="green">
        完了を一括で削除
      </Button>
    </React.Fragment>
  );
}

export default InputArea;
