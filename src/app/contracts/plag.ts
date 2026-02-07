import { Severity } from './severity';

export interface Plag {
  detail: string;
  summary: string;
  severity?: Severity;
}
