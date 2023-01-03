export const PASSWORD_POLICES = ['Uppercase', 'Lowercase', 'Number', 'Special', 'MinLength'] as const;

export type PasswordPolicy = typeof PASSWORD_POLICES[number];

export const POLICY_PATTERNS: {[key in PasswordPolicy]: string} = {
  Uppercase: '[A-Z]+',
  Lowercase: '[a-z]+',
  Number: '[0-9]+',
  Special: '[^A-Za-z0-9]+',
  MinLength: '.{8,}'
}

export const POLICY_MESSAGES: {[key in PasswordPolicy]: string} = {
  Uppercase: 'Have at least one uppercase letter',
  Lowercase: 'Have at least one lowercase letter',
  Number: 'Have at least one number',
  Special: 'Have at least one special character (!@#$...etc)',
  MinLength: 'Longer than 8 characters'
}

export type PasswordPolicyValidationResult = {
  policy: PasswordPolicy;
  passed: boolean;
  message: string;
}