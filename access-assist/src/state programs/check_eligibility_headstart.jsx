function headstart_eligibility(age, is_homeless, in_fostercare) {
    if ((age >= 0 && age <= 5) && (is_homeless || in_fostercare)) {
        return true;
    }
        return false;
}