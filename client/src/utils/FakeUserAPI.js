const userProjectsArray = [
    {
        user_id: 1,
        projects: [2, 5]
    },
    {
        user_id: 3,
        projects: [4, 9, 11]
    },

];

export default {
   getUserProjects: function() {
       return userProjectsArray;
   }
}