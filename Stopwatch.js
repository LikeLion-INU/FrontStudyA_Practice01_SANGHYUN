// 'start' ��ư�� ������ 'start' �Լ� ����
document.getElementById("start").addEventListener("click", start);

// 'stop' ��ư�� ������ 'stop' �Լ� ����
document.getElementById("stop").addEventListener("click", stop);

// 'reset' ��ư�� ������ 'reset' �Լ� ����
document.getElementById("reset").addEventListener("click", reset);

let startTime, timer;  // ���� �ð��� �ð� ��� ���� ����

// ���� �Լ�
function start()
{
  // �ð� �޾ƿ���
  startTime = new Date();
  timer = setInterval(() => {
      let now = new Date();
      let differ = now - startTime;

      let totalSeconds = Math.floor(differ / 1000);  // �и��ʸ� �ʷ� ��ȯ

      // �ú��� ���
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds) % 3600 / 60);
      let seconds = totalSeconds % 60;

      // ���ڿ��� ��ȯ (00:00:00 �������� ���ֱ� ����)
      let hrs  = String(hours).padStart(2, '0');
      let mins = String(minutes).padStart(2, '0');
      let secs = String(seconds).padStart(2, '0');

      // ���
      let strTime = hrs + ":" + mins + ":" + secs;
      document.getElementById('display').innerText = strTime;
    }, 1000);
}

// ���� �Լ�
function stop()
{
  clearInterval(timer);  // ��� ���߱�
}

// ���� �Լ�
function reset()
{
  clearInterval(timer);  // ��� ���߱�
  document.getElementById("display").innerText = "00:00:00"; // �ʱⰪ���� ����
}

// ���� �׽�Ʈ ����