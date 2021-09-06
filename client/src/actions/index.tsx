export const ADMIN_SESSION = 'ADMIN_SESSION';
export const USER_SESSION = 'USER_SESSION';

export function adminSession() {
  return function (dispatch: any) {
    dispatch({
      type: ADMIN_SESSION,
      payload: true,
    });
  };
}

export function userSession() {
  return function (dispatch: any) {
    dispatch({
      type: USER_SESSION,
      payload: true,
    });
  };
}
