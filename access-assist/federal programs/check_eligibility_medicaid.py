def medicaid_eligibility(is_citizen, age, is_disability, is_parent_or_pregnant):
    if (is_citizen and is_parent_or_pregnant) or (age <= 65 and is_disability):
        return True
    return False

