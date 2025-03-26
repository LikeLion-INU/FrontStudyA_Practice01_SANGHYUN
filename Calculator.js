// ����/������ ��ư�� Ŭ���ϸ� display �Լ� ����
document.querySelector(".nums").addEventListener("click", display);
document.querySelector(".operators").addEventListener("click", display);

// '=' ��ư�� Ŭ���ϸ� equals �Լ� ����
document.getElementById("equals").addEventListener("click", equals);

// 'C' ��ư�� Ŭ���ϸ� clear �Լ� ����
document.getElementById("clear").addEventListener("click", clear);

let inputStr = "";  // ��ư ���� ������ ���⿡ ����/�����ڸ� ���ڿ��� �̾����

// ȭ�� ǥ�� �Լ�
function display(event)
{
  if (event.target.tagName === "BUTTON")  // ��ư�� ������ ���� ����
  {
    // ���� ���� �޾ƿ���
    const clickedChar = event.target.innerText;
    const display = document.getElementById("display");

    inputStr += clickedChar;  // inputStr�� ���� ���� �߰�

    // �ʱⰪ�� 0�̸� ����� ǥ��
    if (display.innerText == "0")
      display.innerText = clickedChar;
    else
      display.innerText += clickedChar;
  }
}

// ����-������ �и� �Լ�
function equals()
{
  let numbers = [];      // ���ڵ� ���� �迭
  let operators = [];    // �����ڵ� ���� �迭
  let currentNum = "";   // ���� �˻� ���� ����(���ڿ���)
    
  for (let i = 0; i < inputStr.length; i++)
  {
    // �����ڸ� ������
    if (inputStr[i] === '+' || inputStr[i] === '-' || inputStr[i] === '*' || inputStr[i] === '/')
    {
        numbers.push(currentNum);     // ���ݱ��� ���� ���ڸ� ����
        operators.push(inputStr[i]);  // �����ڵ� ����
        currentNum = "";              // ���� �ʱ�ȭ
    }
    else  // �����ڰ� �ƴ϶�� ���� ��� ����
      currentNum += inputStr[i];
  }    

  numbers.push(currentNum);  // ������ ���ڵ� ����

  // ��� �� ���
  let result = numbers[0];

  for (let i = 0; i < operators.length; i++)
    result = calculate(result, operators[i], numbers[i + 1]);
  
  document.getElementById("display").innerText = result;
}  

// ��Ģ���� �Լ�
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

// �ʱ�ȭ �Լ�
function clear()
{
  inputStr = "";
  document.getElementById("display").innerText = "0";
}