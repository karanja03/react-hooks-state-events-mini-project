import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        tasks={TASKS}
        setFilteredTasks={setFilteredTasks}
      />
      <NewTaskForm categories={CATEGORIES}/>
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;



// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";

// function App() {
//   const [filteredTasks, setFilteredTasks] = useState(TASKS);

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter
//         categories={CATEGORIES}
//         tasks={TASKS}
//         setFilteredTasks={setFilteredTasks}
//       />
//       <NewTaskForm />
//       <TaskList tasks={filteredTasks} />
//     </div>
//   );
// }

// export default App;