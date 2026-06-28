export const InCompleteTodos = (props) => {
  const {todos,onclickComplete,onClickDelete} = props;
  return (
    <div className='container incomplete'>
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo, index)=>  (
            <li key={todo}>
              <div className='list-row'>
                <p>{todo}</p>
                <button onClick={() => onclickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}