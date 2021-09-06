export interface action {
  type: string;
  payload: any;
}

export interface rootState {
  adminSession: boolean;
  userSession: boolean;
}
