def headstart_eligibility(age, is_homeless, in_fostercare):
    if (age >= 0 and age <= 5) and (is_homeless or in_fostercare):
        return True
    return False    