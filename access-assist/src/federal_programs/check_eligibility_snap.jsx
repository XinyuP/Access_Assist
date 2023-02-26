function snap_eligibility(income_per_month, household) {
    if (income_per_month <= 2266 && household === 1) {
        return true;
    } else if (income_per_month <= 3052 && household === 2) {
        return true;
    } else if (income_per_month <= 3840 && household === 3) {
        return true;
    } else if (income_per_month <= 4626 && household === 4) {
        return true;
    } else if (income_per_month <= 5412 && household === 5) {
        return true;
    } else if (income_per_month <= 6200 && household === 6) {
        return true;
    } else if (income_per_month <= 6986 && household === 7) {
        return true;
    }
        return false;
}

export default snap_eligibility;
