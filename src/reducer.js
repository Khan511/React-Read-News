import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };

    case SET_STORIES:
      return {
        ...state,
        loading: false,
        stories: action.payload.stories,
        nbPages: action.payload.nbPages,
      };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };

    case HANDLE_PAGE:
      if (action.payload === "INC") {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          state.page = -1;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === "DEC") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }

        return { ...state, page: prevPage };
      }

    case REMOVE_STORY:
      return {
        ...state,
        stories: state.stories.filter(
          (story) => story.objectID !== action.payload
        ),
      };

    default:
      throw new Error(`No matching "${action.type}" action type.`);
  }
};
export default reducer;
