document.addEventListener('DOMContentLoaded', function () {
    const requiredAgreementBoxes = document.querySelectorAll('.required-agreement-box');
    const checkCircleBig = document.querySelector('.check-circle-big');
    const allAgreementBox = document.querySelector('.all-agreement-box');
    const submitButton = document.querySelector('.agreement-submit');

    // 모든 필수 체크박스가 활성화되었는지 확인하고 버튼 상태 업데이트
    function updateSubmitButtonStatus() {
        const allChecked = Array.from(requiredAgreementBoxes).every(box =>
            box.querySelector('.check-circle-small').classList.contains('box-active')
        );

        // 모든 체크박스가 활성화된 경우 버튼 활성화 및 클릭 이벤트 추가
        if (allChecked) {
            submitButton.disabled = false;
            submitButton.addEventListener('click', () => {
                window.location.href = '/register';
            });
        } else {
            // 그렇지 않은 경우 버튼 비활성화 및 클릭 이벤트 제거
            submitButton.disabled = true;
            submitButton.removeEventListener('click', () => {
                window.location.href = '/register';
            });
        }
    }

    // 개별 체크박스를 클릭할 때 상태를 토글하고 전체 동의 상태를 업데이트
    requiredAgreementBoxes.forEach(box => {
        box.addEventListener('click', function () {
            const checkCircleSmall = this.querySelector('.check-circle-small');
            checkCircleSmall.classList.toggle('box-active'); // 선택 상태 토글

            // 모든 필수 체크박스가 활성화되었는지 확인하여 전체 동의 체크박스 업데이트
            const allChecked = Array.from(requiredAgreementBoxes).every(box =>
                box.querySelector('.check-circle-small').classList.contains('box-active')
            );

            if (allChecked) {
                checkCircleBig.classList.add('big-box-active');
            } else {
                checkCircleBig.classList.remove('big-box-active');
            }

            updateSubmitButtonStatus(); // 버튼 상태 업데이트
        });
    });

    // 전체 동의 체크박스를 클릭할 때 모든 개별 체크박스를 활성화/비활성화
    allAgreementBox.addEventListener('click', function () {
        const allChecked = checkCircleBig.classList.contains('big-box-active');

        // 모든 체크박스를 활성화 또는 비활성화
        requiredAgreementBoxes.forEach(box => {
            const checkCircleSmall = box.querySelector('.check-circle-small');
            if (!allChecked) {
                checkCircleSmall.classList.add('box-active'); // 활성화
            } else {
                checkCircleSmall.classList.remove('box-active'); // 비활성화
            }
        });

        // 전체 동의 체크박스의 상태 토글
        if (allChecked) {
            checkCircleBig.classList.remove('big-box-active');
        } else {
            checkCircleBig.classList.add('big-box-active');
        }

        updateSubmitButtonStatus(); // 버튼 상태 업데이트
    });

    // 초기 상태에서 "다음 단계" 버튼 비활성화
    submitButton.disabled = true;
});
