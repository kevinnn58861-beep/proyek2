function initProyek() {
    const garden = document.getElementById('flower-garden');
    const fallingContainer = document.getElementById('falling-leaves');
    
    // 1. Membuat Pohon Hati yang Sangat Rimbun (850 Bunga)
    const flowerCount = 850;
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';

        const angle = Math.random() * Math.PI * 2;
        const x = 16 * Math.pow(Math.sin(angle), 3);
        const y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

        const size = Math.random() * 7 + 3;
        const delay = Math.random() * 5;

        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        
        const spread = 7.5; 
        const offsetX = (Math.random() - 0.5) * 45;
        const offsetY = (Math.random() - 0.5) * 45;

        flower.style.left = `calc(50% + ${(x * spread) + offsetX}px)`;
        flower.style.top = `calc(40% + ${(y * spread) + offsetY}px)`;
        flower.style.animationDelay = `${delay}s, ${delay + 2}s`;
        
        const colors = ['#ffeb3b', '#ffd700', '#fbc02d', '#ffee58', '#fff176'];
        flower.style.background = colors[Math.floor(Math.random() * colors.length)];

        garden.appendChild(flower);
    }

    // 2. Membuat Efek Bunga Berjatuhan (Falling Petals) secara terus menerus
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const size = Math.random() * 5 + 3;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        
        // Muncul dari area pohon secara acak
        petal.style.left = Math.random() * 150 + 75 + 'px';
        petal.style.top = Math.random() * 100 + 40 + 'px';
        
        fallingContainer.appendChild(petal);
        
        // Hapus elemen setelah jatuh agar tidak membebani browser
        setTimeout(() => petal.remove(), 5000);
    }, 250); // Kecepatan munculnya bunga yang jatuh
}

initProyek();
