export default function reducer(state = { tareas: [] }, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tareas:[...state.tareas, action.tarea]  };
    default:
      return state;
  }
}

export function addTask(tarea) {
  return {
    type: 'ADD_TASK',
    tarea: tarea
  };
}