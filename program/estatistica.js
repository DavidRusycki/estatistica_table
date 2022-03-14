var estatistica = (function(){
    
    var getTextArea = () => {
        return document.getElementById('elementos');
    };

    var getH = () => {
        let iValue = 0;

        iValue = (getMaiorElemento() - getMenorElemento());
        iValue = iValue/getSturges(getTotalElementos());

        return Math.round(iValue);
    };

    var getMaiorElemento = () => {
        let aElementos = getElementos();
        iMaior = getFirstFromArray(aElementos);

        for (let indice of aElementos) {
            indice = parseInt(indice);
            if (indice > iMaior) 
            {
                iMaior = indice;
            }
        }

        return iMaior;
    };

    var getMenorElemento = () => {
        let aElementos = getElementos();
        iMenor = getFirstFromArray(aElementos);

        for (let indice of aElementos) {
            indice = parseInt(indice);
            if (indice < iMenor) 
            {
                iMenor = indice;
            }
        }

        return iMenor;
    };

    var getFirstFromArray = (aArray) => {
        for (let indice of aArray) {
            return parseInt(indice);
        }
    };

    var getTotalElementos = () => {
        let aElementos = getElementos();
        let iTotal = aElementos.length;
        return iTotal;
    };

    var getElementos = () => {
        let sValor = getTextArea().value;
        let aElementos = sValor.split(',');
        return aElementos;
    };

    var getSturges = (iQuantidade) => {
        let aSturges = getTableSturges();
        let iSturges = aSturges[getIndiceFromQuantidade(iQuantidade)];
        return iSturges;
    };

    var getIndiceFromQuantidade = (iQuantidade) => {
        let xResult = 0;
        if (iQuantidade == 1) 
        {
            xResult = 1;
        }
        else if (iQuantidade == 2)
        {
            xResult = 2;
        }
        else if (iQuantidade >= 3 && iQuantidade <= 5)
        {
            xResult = 3;
        }
        else if (iQuantidade >= 6 && iQuantidade <= 11)
        {
            xResult = 4;
        }
        else if (iQuantidade >= 12 && iQuantidade <= 23)
        {
            xResult = 5;
        }
        else if (iQuantidade >= 24 && iQuantidade <= 46)
        {
            xResult = 6;
        }
        else if (iQuantidade >= 47 && iQuantidade <= 93)
        {
            xResult = 7;
        }
        else if (iQuantidade >= 94 && iQuantidade <= 187)
        {
            xResult = 8;
        }
        else if (iQuantidade >= 188 && iQuantidade <= 376)
        {
            xResult = 9;
        }
        return xResult;9
    }

    var getTableSturges = () => {
        aSturges = [];
        aSturges[1] = 1;
        aSturges[2] = 2;
        aSturges[3] = 3;
        aSturges[4] = 4;
        aSturges[5] = 5;
        aSturges[6] = 6;
        aSturges[7] = 7;
        aSturges[8] = 8;
        aSturges[9] = 9;
        return aSturges;
    };

    var getQuantidadeElementosNoIntervalo = (iInicio, iFinal) => {
        let aElementos = getElementos();
        let iQuantidadeElementosNoIntervalo = 0;
        for (let indice of aElementos) {
            if (indice >= iInicio && indice < iFinal) {
                iQuantidadeElementosNoIntervalo++;
            }
        }
        return iQuantidadeElementosNoIntervalo;
    };

    var getFr = (iTotal, iFi) => {
        return (iFi/iTotal)*100;
    }

    return {
        getH : () => {
            return getH();
        },
        getSturges : () => {
            return getSturges(getTotalElementos());
        },
        getTotalElementos : () => {
            return getTotalElementos();
        },
        getMaiorElemento : () => {
            return getMaiorElemento();
        },
        getMenorElemento : () => {
            return getMenorElemento();
        },
        getQuantidadeElementosNoIntervalo : (iInicio, iFinal) => {
            return getQuantidadeElementosNoIntervalo(iInicio, iFinal);
        },
        getFr : (iTotal, iFi) => {
            return getFr(iTotal, iFi);
        }
    }
    
}())