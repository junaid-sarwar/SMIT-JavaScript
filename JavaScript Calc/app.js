const inputBox = document.getElementById("inputBox");

        function clearInput() {
            inputBox.value = "";
        }

        function deleteLast() {
            inputBox.value = inputBox.value.slice(0, -1) || "0";
        }

        function appendNumber(number) {
            if (inputBox.value === "0" && number !== ".") {
                inputBox.value = number;
            } else {
                inputBox.value += number;
            }
        }

        function appendOperator(operator) {
            inputBox.value += operator;
        }

        function calculateResult() {
            try {
                inputBox.value = eval(inputBox.value);
            } catch {
                inputBox.value = "Math Error";
            }
        }