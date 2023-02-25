def tafdc_eligibility(children_age, is_pregnant, lives_in_ma, is_citizen):
    if (children_age <= 18 or is_pregnant) and (lives_in_ma or is_citizen):
        return True
    return False

