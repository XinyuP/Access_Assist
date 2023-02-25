def eaedc_eligibility(lives_in_ma, is_citizen, is_disabled, age):
    if (lives_in_ma and is_citizen) and (is_disabled or age>65):
        return True
    return False