function eaedc_eligibility(lives_in_ma, is_citizen, is_disabled, age) {
    if ((lives_in_ma && is_citizen) && (is_disabled || age > 65)) {
        return true;
    }
        return false;
}