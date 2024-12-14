# Faulty Calculator

This repository contains a **Faulty Calculator** program written in JavaScript. The calculator intentionally provides incorrect results for approximately 10% of the time, adding a fun twist to basic calculations.

## Features
- Basic arithmetic operations: Addition, Subtraction, Multiplication, and Division.
- Predefined "faulty" results for certain input combinations.
- Simple and interactive web interface.

## Technologies Used
- **JavaScript**: For scripting the logic and handling user interactions.
- **HTML**: For creating the user interface.

## How it Works
The program performs basic arithmetic calculations but deliberately provides incorrect results for specific cases. This is achieved through conditional statements that override the correct calculation when predefined inputs are entered.

### Example
If the user inputs:
- `45 * 3`, the output will be `555` (faulty result).
- `56 + 9`, the output will be `77` (faulty result).

For all other inputs, the calculator performs accurate calculations.

## How to Use
1. Clone this repository:
   ```bash
   git clone https://github.com/RifatParadoxical/faultyCalculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd faultyCalculator
   ```
3. Open the `index.html` file in your browser to use the calculator.

## File Structure
```
faultyCalculator/
|-- index.html           # Main HTML file
|-- faulty_calculator.js # Main JavaScript file
|-- README.md            # Project documentation
```

## Credits
This project was created as a fun and educational exercise to practice JavaScript programming.

## Feedback
Feel free to fork this repository, open issues, or submit pull requests to improve the code or add new features.

---

Happy calculating! ✨
