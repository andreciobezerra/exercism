class NaturalNumber {
    private int number;

    NaturalNumber(int number) {
        if (number <= 0) {
            throw new IllegalArgumentException("You must supply a natural number (positive integer)");
        }
        this.number = number;
    }

    Classification getClassification() {
        int aliquotSum = calculateAliquotSum();

        if (aliquotSum == number) {
            return Classification.PERFECT;
        } else if (aliquotSum > number) {
            return Classification.ABUNDANT;
        } else {
            return Classification.DEFICIENT;
        }
    }

    private int calculateAliquotSum() {
        if (number == 1) {
            return 0;
        }

        int sum = 1; // 1 is always a proper divisor for numbers > 1
        int sqrt = (int) Math.sqrt(number);

        for (int i = 2; i <= sqrt; i++) {
            if (number % i == 0) {
                sum += i;
                int complement = number / i;
                if (complement != i) {
                    sum += complement;
                }
            }
        }

        return sum;
    }
}
