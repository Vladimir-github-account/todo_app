export const LOGIN_PATTERN = /(?!^\d)^\w{6,16}$/;
export const PASSWORD_PATTERN = /(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])^[a-zA-Z0-9_$%@?!#]{8,60}$/;
export const USER_NAME_PATTERN = /^[A-Z][a-z]{0,63}$/;

export const ACTIONS = {
  CREATE: Symbol( 'CREATE' ),
  READ: Symbol( 'READ' ),
  UPDATE: Symbol( 'UPDATE' ),
  DELETE: Symbol( 'DELETE' ),
};

