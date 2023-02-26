def snap_eligibility(income_per_month, household):
    if (income_per_month <= 2266) and (household == 1):
        return True
    elif (income_per_month <= 3052) and (household == 2):
        return True
    elif (income_per_month <= 3840) and (household == 3):
        return True
    elif (income_per_month <= 4626) and (household == 4):
        return True
    elif (income_per_month <= 5412) and (household == 5):
        return True
    elif (income_per_month <= 6200) and (household == 6):
        return True
    elif (income_per_month <= 6986) and (household == 7):
        return True
    return False

