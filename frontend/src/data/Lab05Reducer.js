export default function Lab05Reducer(state, action) {
  switch (action.type) {
    case "user": {
      const sorted = [...state];

      if (action.sort === "asc") {
        sorted.sort((a, b) => a.user.name.localeCompare(b.user.name));
      } else if (action.sort === "desc") {
        sorted.sort((a, b) => b.user.name.localeCompare(a.user.name));
      } else if (action.sort === "nat") {
        sorted.sort((a, b) => a.post.id - b.post.id);
      }

      return sorted;
    }

    case "title": {
      const sorted = [...state];

      if (action.sort === "asc") {
        sorted.sort((a, b) => a.post.title.localeCompare(b.post.title));
      } else if (action.sort === "desc") {
        sorted.sort((a, b) => b.post.title.localeCompare(a.post.title));
      } else if (action.sort === "nat") {
        sorted.sort((a, b) => a.post.id - b.post.id);
      }

      return sorted;
    }

    case "commentCount": {
      const sorted = [...state];

      if (action.sort === "asc") {
        sorted.sort((a, b) => a.comments.length - b.comments.length);
      } else if (action.sort === "desc") {
        sorted.sort((a, b) => b.comments.length - a.comments.length);
      } else if (action.sort === "nat") {
        sorted.sort((a, b) => a.post.id - b.post.id);
      }

      return sorted;
    }
    case "init":
      return action.init;
      
    default:
      return state;
  }
}
