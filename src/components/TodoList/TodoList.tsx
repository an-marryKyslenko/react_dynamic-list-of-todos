import React from 'react';
import { Todo } from '../../types/Todo';
import classNames from 'classnames';

type Props = {
  todos: Todo[];
  onSelect: (todo: Todo) => void;
  selectedTodo: Todo | null;
};
export const TodoList: React.FC<Props> = React.memo(
  ({ todos, onSelect, selectedTodo }) => (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map(todo => (
          <tr
            key={todo.id}
            data-cy="todo"
            className={
              selectedTodo?.id === todo.id ? 'has-background-info-light' : ''
            }
          >
            <td className="is-vcentered">{todo.id}</td>
            <td className="is-vcentered">
              {todo.completed && (
                <span className="icon">
                  <i data-cy="iconCompleted" className="fas fa-check" />
                </span>
              )}
            </td>
            <td className="is-vcentered is-expanded">
              <p
                className={
                  todo.completed ? 'has-text-success' : 'has-text-danger'
                }
              >
                {todo.title}
              </p>
            </td>
            <td className="has-text-right is-vcentered">
              <button
                data-cy="selectButton"
                className="button"
                type="button"
                onClick={() => onSelect(todo)}
              >
                <span className="icon">
                  {/* <i className="far fa-eye" /> */}
                  <i
                    className={classNames('far', {
                      'fa-eye': selectedTodo?.id !== todo.id,
                      'fa-eye-slash': selectedTodo?.id === todo.id,
                    })}
                  />
                </span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
);

TodoList.displayName = 'TodoList';
