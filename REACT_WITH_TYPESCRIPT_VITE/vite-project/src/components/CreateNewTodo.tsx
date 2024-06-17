import { Button, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";

type Props = {
    newTodoString:string;
    onNewTodoChange:(e: ChangeEvent<HTMLInputElement>) => void;
    onAddingBtnClick: () => void; 
}

export const CreateNewTodo = ({
    newTodoString,
    onNewTodoChange,
    onAddingBtnClick    
}: Props) => {
  return (
    <div>
      {" "}
      <TextField
        size="small"
        value={newTodoString}
        onChange={onNewTodoChange}
      ></TextField>
      {/* <Button variant="contained">Thêm</Button> */}
      <Button variant="contained" onClick={onAddingBtnClick}>
        Add
      </Button>
    </div>
  );
};
