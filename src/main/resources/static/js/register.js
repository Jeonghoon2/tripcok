function toggleActive(button) {
    // 모든 버튼에서 gender-active 클래스 제거
    const buttons = document.querySelectorAll('.gender-btn');
    buttons.forEach(btn => btn.classList.remove('gender-active'));

    // 클릭된 버튼에 gender-active 클래스 추가
    button.classList.add('gender-active');
}