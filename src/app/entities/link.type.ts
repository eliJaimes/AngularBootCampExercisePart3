/* ••[1]••••••••••••••••••••••••• link.type.ts •••••••••••••••••••••••••••••• */

import { SystemUserTypeE } from './systemUserType.type';

export type LinkT = {
  exact?: true;
  label: string;
  path: string;
  visible: Array<SystemUserTypeE | 'SHOW_HOME'>;
};
