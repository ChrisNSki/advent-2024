# Advent of Code 2024

These are my attempted solutions to the Advent of Code 2024 challenge.

## Day 1

### Part 1

A distance from array items calculation:

- Function divides the text file into 2 lists, List A and List B.
- Sorts each list smallest to largest.
- For loops through the list numbers calculating the distance between List A's and List B's numbers.
- Adds the distance to the overall list.

Can be ran with the following:
`node 1/distance_compare.js`

### Part 2

A similarity between arrays:

- Function still divides the text file into 2 lists, List A and List B.
- For loops through List A's numbers and:
  - Checks if List B contains has the same number.
  - If List B has the number in question, check how many times it occurs.
  - Multiply the number by the amount of times it occurs
  - Add the calculation to the similarity score
