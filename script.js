function animateFlow() {
    const inputNodes = document.querySelectorAll('#inputLayer .neuron');
    const hiddenNodes = document.querySelectorAll('#hiddenLayer .neuron');
    const outputNodes = document.querySelectorAll('#outputLayer .neuron');
    const statusText = document.getElementById('status-text');
    const detailText = document.getElementById('detail-text');
    const btn = document.getElementById('btnRun');

    resetFlow();
    btn.disabled = true;

    // STEP 1: INPUT
    statusText.innerText = "Stimulasi Input";
    statusText.style.color = "#10b981";
    detailText.innerText = "Saraf input menerima sinyal data dan mempersiapkan distribusi energi ke lapisan berikutnya.";
    
    inputNodes.forEach((n, i) => {
        setTimeout(() => n.classList.add('active'), i * 200);
    });

    // STEP 2: HIDDEN
    setTimeout(() => {
        statusText.innerText = "Pemrosesan Sinapsis";
        detailText.innerText = "Interaksi antar neuron terjadi. Bobot (Weights) menyaring informasi untuk menemukan pola yang relevan.";
        
        hiddenNodes.forEach((n, i) => {
            setTimeout(() => n.classList.add('active'), i * 200);
        });
    }, 1000);

    // STEP 3: OUTPUT
    setTimeout(() => {
        statusText.innerText = "Sintesis Keputusan";
        detailText.innerText = "Keputusan akhir dikristalisasi. Sinyal telah melewati seluruh jalur saraf tiruan.";
        
        outputNodes.forEach((n, i) => {
            setTimeout(() => n.classList.add('active'), i * 200);
        });
        btn.disabled = false;
    }, 2000);
}

function resetFlow() {
    document.querySelectorAll('.neuron').forEach(n => {
        n.classList.remove('active');
    });
    document.getElementById('status-text').innerText = "Standby";
    document.getElementById('status-text').style.color = "#fff";
    document.getElementById('detail-text').innerText = "Siap untuk memproses stimulasi data melalui jaringan.";
}