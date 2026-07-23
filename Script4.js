const genreSelect = document.getElementById('genreSelect');
const filterCheckbox = document.getElementById('filterCheckbox');
const gameItems = document.querySelectorAll('.game-item');

// 2. دالة التصفية الرئيسية
function filterGames() {
    const isFilterActive = filterCheckbox.checked; // هل الشيك بوكس مفعل؟
    const selectedGenre = genreSelect.value;       // النوع المحدد من السيلكت

    gameItems.forEach(game => {
        const gameGenre = game.getAttribute('data-genre');

        // إذا كان الشيك بوكس غير مفعل، اعرض جميع الألعاب بدون تصفية
        if (!isFilterActive) {
            game.style.display = 'block';
            return;
        }

        // إذا كان الشيك بوكس مفعل، طبق التصفية
        if (selectedGenre === 'all' || gameGenre === selectedGenre) {
            game.style.display = 'block'; // إظهار اللعبة المطابقة
        } else {
            game.style.display = 'none';  // إخفاء باقي الألعاب
        }
    });
}

// 3. تشغيل الدالة عند تغيير أي من العنصرين
genreSelect.addEventListener('change', filterGames);
filterCheckbox.addEventListener('change', filterGames);
