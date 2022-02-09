export const CHANGE_HOME_PAGE = "redux-start/page/CHANGE_HOME_PAGE";
export const CHANGE_NEWS_PAGE = "redux-start/page/CHANGE_NEWS_PAGE";
export const CHANGE_SHOW_PAGE = "redux-start/page/CHANGE_SHOW_PAGE";
export const CHANGE_ASK_PAGE = "redux-start/page/CHANGE_ASK_PAGE";
export const CHANGE_JOBS_PAGE = "redux-start/page/CHANGE_JOBS_PAGE";

// 액션 생성 함수
export function changeHomePage() {
  return {
    type: CHANGE_HOME_PAGE,
  };
}
export function changeNewsPage() {
  return {
    type: CHANGE_NEWS_PAGE,
  };
}
export function changeShowPage() {
  return {
    type: CHANGE_SHOW_PAGE,
  };
}
export function changeAskPage() {
  return {
    type: CHANGE_ASK_PAGE,
  };
}
export function changeJobsPage() {
  return {
    type: CHANGE_JOBS_PAGE,
  };
}

const initialState = {
  page: "HOME",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_HOME_PAGE:
      return {
        page: "HOME",
      };

    case CHANGE_NEWS_PAGE:
      return {
        page: "NEWS",
      };

    case CHANGE_SHOW_PAGE:
      return {
        page: "SHOW",
      };

    case CHANGE_ASK_PAGE:
      return {
        page: "ASK",
      };

    case CHANGE_JOBS_PAGE:
      return {
        page: "JOBS",
      };

    default:
      return state;
  }
}
