function medicaid_eligibility(is_citizen, age, is_disability, is_parent_or_pregnant) {
  if ((is_citizen && is_parent_or_pregnant) || (age <= 65 && is_disability)) {
    return true;
  }
  return false;
}
export default medicaid_eligibility;