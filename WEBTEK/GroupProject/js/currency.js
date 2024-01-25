function currencyConverterUSD(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputUSD").innerHTML = valNum * 1;
    document.getElementById("outputNOK").innerHTML = valNum * 10.53;
    document.getElementById("outputEUR").innerHTML = valNum * 1.03;
    document.getElementById("outputGBP").innerHTML = valNum * 0.89;
    document.getElementById("outputCNY").innerHTML = valNum * 7.44;
  }
  function currencyConverterNOK(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputUSD").innerHTML = valNum * 0.094;
    document.getElementById("outputNOK").innerHTML = valNum * 1;
    document.getElementById("outputEUR").innerHTML = valNum * 0.098;
    document.getElementById("outputGBP").innerHTML = valNum * 0.084;
    document.getElementById("outputCNY").innerHTML = valNum * 0.69;
  }
  function currencyConverterEUR(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputUSD").innerHTML = valNum * 0.97;
    document.getElementById("outputNOK").innerHTML = valNum * 10.34;
    document.getElementById("outputEUR").innerHTML = valNum * 1;
    document.getElementById("outputGBP").innerHTML = valNum * 0.87;
    document.getElementById("outputCNY").innerHTML = valNum * 7.15;
  }
  function currencyConverterGBP(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputUSD").innerHTML = valNum * 1.13;
    document.getElementById("outputNOK").innerHTML = valNum * 11.96;
    document.getElementById("outputEUR").innerHTML = valNum * 1.16;
    document.getElementById("outputGBP").innerHTML = valNum * 1;
    document.getElementById("outputCNY").innerHTML = valNum * 8.27;
  }
  function currencyConverterCNY(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputUSD").innerHTML = valNum * 0.14;
    document.getElementById("outputNOK").innerHTML = valNum * 1.45;
    document.getElementById("outputEUR").innerHTML = valNum * 0.14;
    document.getElementById("outputGBP").innerHTML = valNum * 0.12;
    document.getElementById("outputCNY").innerHTML = valNum * 1;
  }