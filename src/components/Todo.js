import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  display: table;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #999;
`;
const ListRow = styled.div`
  display: table-row;
`;
const ListHeader = styled.span`
  width: 20%;
  display: table-cell;
`;
const ListData = styled.span`
  display: table-cell;
`;

export const TodoList = styled.ol`
  padding: 0;
  width: 100%;
  list-style: none;
`;

export function TodoItem(props) {
  const { id, title, completed } = props;

  return (
    <ListItem>
      <ListRow>
        <ListHeader>Id</ListHeader>
        <ListData>{id}</ListData>
      </ListRow>
      <ListRow>
        <ListHeader>Title</ListHeader>
        <ListData>{title}</ListData>
      </ListRow>
      <ListRow>
        <ListHeader>Completed</ListHeader>
        <ListData>{completed ? "Yes" : "No"}</ListData>
      </ListRow>
    </ListItem>
  );
}
