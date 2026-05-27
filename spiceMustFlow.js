function spiceMining (yield) {
    let days = 0;
    let spiceExtracted = 0;

    while (yield >= 100) {
        spiceExtracted += yield;
        yield -= 10;

        if (spiceExtracted >= 26) {
            spiceExtracted -= 26;
        
        }
        days ++;
    }
    if (spiceExtracted >= 26) {
        spiceExtracted -= 26;
    }

console.log(days);
console.log(spiceExtracted);

}
spiceMining (111);