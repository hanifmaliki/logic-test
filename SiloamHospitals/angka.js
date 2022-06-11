function printAngka(angka) {
    const angkaStr = angka.toString();
    const angkaLength = angkaStr.length;

    for (let i = 0; i < angkaLength; i++) {
        let angkaPrint = '';
        angkaPrint += angkaStr[i];
        for (let j = 1; j < angkaLength - i; j++) {
            angkaPrint += '0';
        }
        console.log(angkaPrint);
    }
}

printAngka(1345679);