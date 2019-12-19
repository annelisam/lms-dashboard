export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirebase().firestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: 'Annie',
        authorLastName: 'Moody',
        authorId: 333,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      }).catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      })

  }
};

export default createProject;