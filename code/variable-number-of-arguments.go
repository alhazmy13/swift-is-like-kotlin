func sumOf(numbers ...int) int {
    var sum = 0
    for number := range(numbers) {
        sum += number
    }
    return sum
}

func main() {
    sumOf(42, 597, 12)
}