// 숫자/연산자 버튼을 클릭하면 display 함수 실행
document.querySelector(".nums").addEventListener("click", display);
document.querySelector(".operators").addEventListener("click", display);

// '=' 버튼을 클릭하면 equals 함수 실행
document.getElementById("equals").addEventListener("click", equals);

// 'C' 버튼을 클릭하면 clear 함수 실행
document.getElementById("clear").addEventListener("click", clear);

let inputStr = "";  // 버튼 누를 때마다 여기에 숫자/연산자를 문자열로 이어붙임

// 화면 표시 함수
function display(event)
{
  if (event.target.tagName === "BUTTON")  // 버튼을 눌렀을 때만 실행
  {
    // 누른 숫자 받아오기
    const clickedChar = event.target.innerText;
    const display = document.getElementById("display");

    inputStr += clickedChar;  // inputStr에 누른 숫자 추가

    // 초기값이 0이면 지우고 표시
    if (display.innerText == "0")
      display.innerText = clickedChar;
    else
      display.innerText += clickedChar;
  }
}

// 숫자-연산자 분리 함수
function equals()
{
  let numbers = [];      // 숫자들 저장 배열
  let operators = [];    // 연산자들 저장 배열
  let currentNum = "";   // 지금 검사 중인 숫자(문자열로)
    
  for (let i = 0; i < inputStr.length; i++)
  {
    // 연산자를 만나면
    if (inputStr[i] === '+' || inputStr[i] === '-' || inputStr[i] === '*' || inputStr[i] === '/')
    {
        numbers.push(currentNum);     // 지금까지 모은 숫자를 저장
        operators.push(inputStr[i]);  // 연산자도 저장
        currentNum = "";              // 숫자 초기화
    }
    else  // 연산자가 아니라면 숫자 계속 저장
      currentNum += inputStr[i];
  }    

  numbers.push(currentNum);  // 마지막 숫자도 저장

  // 계산 후 출력
  let result = numbers[0];

  for (let i = 0; i < operators.length; i++)
    result = calculate(result, operators[i], numbers[i + 1]);
  
  document.getElementById("display").innerText = result;
}  

// 사칙연산 함수
function calculate(n1, operator, n2)
{
  let result = 0;

  switch (operator)
  {
    case '+':
      result = Number(n1) + Number(n2);
      break;
    case '-':
      result = Number(n1) - Number(n2);
      break;
    case '*':
      result = Number(n1) * Number(n2);
      break;
    case '/':
      result = Number(n1) / Number(n2);
      break;
  }

  return result;
}

// 초기화 함수
function clear()
{
  inputStr = "";
  document.getElementById("display").innerText = "0";
}