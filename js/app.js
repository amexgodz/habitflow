function switchScreen(screenId) {
    // Скрываем все экраны
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    // Убираем активный класс у кнопок навигации
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Активируем выбранный экран
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    // Подсвечиваем соответствующую кнопку
    const targetBtn = document.querySelector(`.nav-btn[data-screen="${screenId}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
}

// Навешиваем слушатели на кнопки навигации
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const screenId = btn.getAttribute('data-screen');
        switchScreen(screenId);
    });
});

// Переключение состояния привычки и пересчет прогресса
function toggleHabit(btn) {
    btn.classList.toggle('checked');
    btn.textContent = btn.classList.contains('checked') ? '✓' : '';
    
    const parentItem = btn.closest('.habit-item');
    if (parentItem) {
        parentItem.classList.toggle('completed');
    }

    updateProgress();
}

function updateProgress() {
    const total = document.querySelectorAll('.habit-item').length;
    const completed = document.querySelectorAll('.check-box.checked').length;
    const percent = Math.round((completed / total) * 100);

    const percentText = document.getElementById('progress-percent');
    const progressBar = document.getElementById('progress-bar');

    if (percentText) percentText.textContent = `${percent}%`;
    if (progressBar) progressBar.style.width = `${percent}%`;
}
