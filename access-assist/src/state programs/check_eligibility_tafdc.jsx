function tafdc_eligibility(children_age, is_pregnant, lives_in_ma, is_citizen) {
    if ((children_age <= 18 || is_pregnant) && (lives_in_ma || is_citizen)) {
        return true;
    }
        return false;
}

export default tafdc_eligibility