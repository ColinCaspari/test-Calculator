function App() {
    return (

        <><div id="result"></div>


            <table>
                <tr>
                    <td onClick="appendOperation(7)">7</td>
                    <td onclick="appendOperation(8)">8</td>
                    <td onclick="appendOperation(9)">9</td>
                    <td onclick="appendOperation(' + ')" className="operator">+</td>
                    <td onclick="deleteLast()" id="clear-button">C</td>
                </tr>

                <tr>
                    <td onclick="appendOperation(4)">4</td>
                    <td onclick="appendOperation(5)">5</td>
                    <td onclick="appendOperation(6)">6</td>
                    <td onclick="appendOperation(' - ')" className="operator">-</td>
                </tr>

                <tr>
                    <td onclick="appendOperation(1)">1</td>
                    <td onclick="appendOperation(2)">2</td>
                    <td onclick="appendOperation(3)">3</td>
                    <td onclick="appendOperation(' / ')" className="operator">/</td>
                </tr>
                <tr>
                    <td onclick="appendOperation(0)">0</td>
                    <td onclick="appendOperation('.')" className="operator">.</td>
                    <td onclick="calculate()" id="result-button">=</td>
                    <td onclick="appendOperation(' * ')" className="operator">*</td>
                </tr>

            </table></>
    );
}






export default App