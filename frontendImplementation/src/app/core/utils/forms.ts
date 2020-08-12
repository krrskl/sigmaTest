/* Angular forms */
import { FormControl, Validators } from '@angular/forms';

export const email = () => {
  return new FormControl(
    '',
    Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
    ]),
  );
};

export const password = () => {
  return new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(30),
  ]);
};

export const defaultData = (value?: string) => {
  return new FormControl(value || '', Validators.required);
};

export const fieldWithoutValidations = (value?: string) => {
  return new FormControl(value || '', null);
};
