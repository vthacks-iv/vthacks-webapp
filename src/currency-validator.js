// https://jsfiddle.net/chrisvfritz/1oqjojjx/?utm_source=website&utm_medium=embed&utm_campaign=1oqjojjx

export const CurrencyValidator = {
    format: (number) => (Math.trunc(number * 100) / 100).toFixed(2),
    parse: (newString, oldNumber) => {
        var CleanParse = (value) => {
            return { value: value }
        }
        var CurrencyWarning = (warning, value) => {
            return {
                warning: warning,
                value: value,
                attempt: newString
            }
        }
        var NotAValidDollarAmountWarning = (value) => {
            return new CurrencyWarning(newString + ' is not a valid dollar amount', value)
        }
        var AutomaticConversionWarning = (value) => {
            return new CurrencyWarning(newString + ' was automatically converted to ' + value, value)
        }

        var newNumber = Number(newString)
        var indexOfDot = newString.indexOf('.')
        var indexOfE = newString.indexOf('e')

        if (isNaN(newNumber)) {
            if (
                indexOfDot === -1 &&
                indexOfE > 0 &&
                indexOfE === newString.length - 1 &&
                Number(newString.slice(0, indexOfE)) !== 0
            ) {
                return new CleanParse(oldNumber)
            } else {
                return new NotAValidDollarAmountWarning(oldNumber)
            }
        }

        var newCurrencyString = CurrencyValidator.format(newNumber)
        var newCurrencyNumber = Number(newCurrencyString)

        if (newCurrencyNumber === newNumber) {
            if (indexOfE !== -1 && indexOfE === newString.length - 2) {
                return new AutomaticConversionWarning(newNumber)
            } else {
                return new CleanParse(newNumber)
            }
        } else {
            return new NotAValidDollarAmountWarning(
                newNumber > newCurrencyNumber
                ? newCurrencyNumber
                : oldNumber
            )
        }
    }
}
