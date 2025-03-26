// 'start' 버튼을 누르면 'start' 함수 실행
document.getElementById("start").addEventListener("click", start);

// 'stop' 버튼을 누르면 'stop' 함수 실행
document.getElementById("stop").addEventListener("click", stop);

// 'reset' 버튼을 누르면 'reset' 함수 실행
document.getElementById("reset").addEventListener("click", reset);

let startTime, timer;  // 시작 시간과 시간 재는 변수 선언

// 시작 함수
function start()
{
  // 시간 받아오기
  startTime = new Date();
  timer = setInterval(() => {
      let now = new Date();
      let differ = now - startTime;

      let totalSeconds = Math.floor(differ / 1000);  // 밀리초를 초로 변환

      // 시분초 계산
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds) % 3600 / 60);
      let seconds = totalSeconds % 60;

      // 문자열로 변환 (00:00:00 형식으로 써주기 위해)
      let hrs  = String(hours).padStart(2, '0');
      let mins = String(minutes).padStart(2, '0');
      let secs = String(seconds).padStart(2, '0');

      // 출력
      let strTime = hrs + ":" + mins + ":" + secs;
      document.getElementById('display').innerText = strTime;
    }, 1000);
}

// 중지 함수
function stop()
{
  clearInterval(timer);  // 기록 멈추기
}

// 리셋 함수
function reset()
{
  clearInterval(timer);  // 기록 멈추기
  document.getElementById("display").innerText = "00:00:00"; // 초기값으로 변경
}

// 수정 테스트 각주