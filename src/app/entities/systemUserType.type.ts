/* ••[1]••••••••••••••••••••••••• systemUserType.type.ts •••••••••••••••••••••••••••••• */

export enum SystemUserTypeE {
  adminUser = 'Admin',
  regularUser = 'Regular',
}

export type SystemUserTypeT = SystemUserTypeE | null;
