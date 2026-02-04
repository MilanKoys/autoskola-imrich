import { ButtonSeverity } from 'primeng/button';

export interface HeroAction {
  label: string;
  severity?: ButtonSeverity;
  variant?: 'outlined' | 'text';
  command?: () => void;
  route?: string;
}
