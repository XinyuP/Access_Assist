function masshealth_eligibility(lives_in_ma, is_citizen) {
    if (lives_in_ma && is_citizen) {
        return true;
    }
        return false;
}

export default masshealth_eligibility