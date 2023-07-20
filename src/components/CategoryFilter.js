import React, { useState } from "react";

function CategoryFilter({ categories, tasks, setFilteredTasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterTasks(category);
  };

  const filterTasks = (category) => {
    if (category === "All") {
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((task) => task.category === category);
      setFilteredTasks(filteredTasks);
    }
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;








// import React, { useState } from "react";

// function CategoryFilter({ categories, tasks, setFilteredTasks }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     filterTasks(category);
//   };

//   const filterTasks = (category) => {
//     if (category === "All") {
//       setFilteredTasks(tasks);
//     } else {
//       const filteredTasks = tasks.filter((task) => task.category === category);
//       setFilteredTasks(filteredTasks);
//     }
//   };

//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//       {categories.map((category) => (
//         <button
//           key={category}
//           onClick={() => handleCategoryClick(category)}
//           className={selectedCategory === category ? "selected" : ""}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default CategoryFilter;