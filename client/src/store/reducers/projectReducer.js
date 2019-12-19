const initState = {
  projects: [
    { id: "1", title: "help me find peace", content: "blah blah blah" },
    { id: "2", title: "find that pokemon", content: "blah blah blah" },
    { id: "3", title: "hey hey hey", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
