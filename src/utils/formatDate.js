// 특정 날짜의 YYYY-MM-DD 문자열을 반환하는 함수
export const formatDate = (date) => {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const weekday = date.toLocaleDateString('ko-KR', { weekday: 'short' }); // 요일을 '화'와 같은 형식으로 반환

  return `${month}/${day} ${weekday}`;
};

// 날짜 범위 내에서 각 날짜에 대한 시간 객체 생성 함수
export const getTimeDateArray = (startDateStr, endDateStr) => {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const timeDateArray = [];

  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const formattedDate = formatDate(date);

    // 객체 생성
    const timeData = {
      date: formattedDate,
      startTime: "10:00",
      endTime: "22:00"
    };

    timeDateArray.push(timeData);
  }

  return timeDateArray;
};