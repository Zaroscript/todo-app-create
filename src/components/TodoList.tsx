
interface TodoListProps {
    todos: string[];
}


const TodoList = ({todos}: TodoListProps) => {
  return (
    <div className="flex flex-col w-1/2">
        {
            todos.map((todo) => (
                <TodoItem todoText={todo} />
            ))
        }
    </div>
  )
}

export default TodoList