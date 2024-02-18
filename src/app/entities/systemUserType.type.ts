/* ••[1]••••••••••••••••••••••••• systemUserType.type.ts •••••••••••••••••••••••••••••• */

export enum SystemUserTypeE {
  adminUser = 'adminUser',
  regularUser = 'regularUser',
}

export type SystemUserTypeT = SystemUserTypeE | null;
