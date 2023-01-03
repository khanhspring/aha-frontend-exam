import {
  PasswordPolicy,
  PasswordPolicyValidationResult,
  POLICY_MESSAGES,
  POLICY_PATTERNS,
} from "../models/password-policy";

export const validatePassword = (
  passwordRaw: string,
  appliedPolicies: PasswordPolicy[] = [],
  minLength?: number
): PasswordPolicyValidationResult[] => {
  if (!appliedPolicies) {
    return [];
  }

  const results: PasswordPolicyValidationResult[] = [];

  for (const policy of appliedPolicies) {
    const regex = new RegExp(POLICY_PATTERNS[policy]);
    const result: PasswordPolicyValidationResult = {
      policy: policy,
      passed: regex.test(passwordRaw),
      message: POLICY_MESSAGES[policy]
    };
    results.push(result);
  }

  return results;
};
