export type VFormProps = {
  buttonText?: string;
  errorMessage?: string;
  /** if loading status is `true` submit won't triggered */
  loading?: boolean;
};
export type VFormEmits = {
  /** event is triggered when the button or the `enter` is clicked */
  submit: [];
};
