def ssi_eligibility(adult_age, adult_disabled, is_citizen, child_age, child_disabled):
    if ((adult_age >= 65 or adult_disabled) and is_citizen) or (child_age<18 and child_disabled):
        return True
    return False
    