document.addEventListener('DOMContentLoaded', function () {
    const requiredAgreementBoxes = document.querySelectorAll('.required-agreement-box');
    const checkCircleBig = document.querySelector('.check-circle-big');
    const allAgreementBox = document.querySelector('.all-agreement-box');

    // 개별 체크박스를 클릭할 때 토글하고, 전체 체크 여부 확인
    requiredAgreementBoxes.forEach(box => {
        box.addEventListener('click', function () {
            const checkCircleSmall = this.querySelector('.check-circle-small');
            checkCircleSmall.classList.toggle('box-active');

            // 모든 개별 체크박스에 box-active가 있는지 확인
            const allChecked = Array.from(requiredAgreementBoxes).every(box =>
                box.querySelector('.check-circle-small').classList.contains('box-active')
            );

            if (allChecked) {
                checkCircleBig.classList.add('big-box-active');
            } else {
                checkCircleBig.classList.remove('big-box-active');
            }
        });
    });

    // 전체 동의 박스를 클릭할 때 모든 개별 체크박스 활성화/비활성화
    allAgreementBox.addEventListener('click', function () {
        const allChecked = checkCircleBig.classList.contains('big-box-active');

        // 모든 체크가 되어 있으면 모두 비활성화, 아니면 모두 활성화
        requiredAgreementBoxes.forEach(box => {
            const checkCircleSmall = box.querySelector('.check-circle-small');
            if (!allChecked) {
                checkCircleSmall.classList.add('box-active');
            } else {
                checkCircleSmall.classList.remove('box-active');
            }
        });

        // 전체 동의 체크박스의 활성화 상태를 토글
        if (allChecked) {
            checkCircleBig.classList.remove('big-box-active');
        } else {
            checkCircleBig.classList.add('big-box-active');
        }
    });
});
