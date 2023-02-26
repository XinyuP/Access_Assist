function ssi_eligibility(adult_age, adult_disabled, is_citizen, child_age, child_disabled) {
    if ((adult_age >= 65 || adult_disabled) && is_citizen || (child_age < 18 && child_disabled)) {
        return true;
    }
        return false;
}