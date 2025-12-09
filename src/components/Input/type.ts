

export interface InputProps {
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
