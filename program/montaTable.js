var montaTable = (function(){

    var monta = () => {
        montaCabecalho();

        let iInicio = estatistica.getMenorElemento();
        let iFinal = iInicio + estatistica.getH();

        let oTableBody = document.getElementById('table_teste');

        for (let index = 1; index <= estatistica.getSturges(); index++) {
            
            let oTr = document.createElement('tr');

            let oTdi = document.createElement('td');
            oTdi.innerHTML = index;

            let oTdIntervalo = document.createElement('td');
            let sIntervalo = iInicio + '|- ' + iFinal;
            oTdIntervalo.innerHTML = sIntervalo;

            let oTdFi = document.createElement('td');
            let iFi = estatistica.getQuantidadeElementosNoIntervalo(iInicio, iFinal);
            oTdFi.innerHTML = iFi;

            let oTdFi2 = document.createElement('td');
            let iFI = estatistica.getQuantidadeElementosNoIntervalo(estatistica.getMenorElemento(), iFinal);
            oTdFi2.innerHTML = iFI;

            let oTdFrP = document.createElement('td');
            oTdFrP.innerHTML = estatistica.getFr(estatistica.getTotalElementos(), iFi);
            
            let oTdFr = document.createElement('td');
            oTdFr.innerHTML = estatistica.getFr(estatistica.getTotalElementos(), iFI);

            let oTdXi = document.createElement('td');
            oTdXi.innerHTML = iInicio+(estatistica.getH()/2);

            iInicio += estatistica.getH();
            iFinal += estatistica.getH();

            oTr.appendChild(oTdi);
            oTr.appendChild(oTdIntervalo);
            oTr.appendChild(oTdFi);
            oTr.appendChild(oTdFi2);
            oTr.appendChild(oTdFrP);
            oTr.appendChild(oTdFr);
            oTr.appendChild(oTdXi);

            oTableBody.appendChild(oTr);
        }
    };

    var montaCabecalho = () => {
        let oTable = getTable();

        let oTableBody = document.createElement('tbody');
        oTableBody.id = 'table_teste';
        let oTr = document.createElement('tr');

        let oTdi = document.createElement('td');
        oTdi.innerHTML = 'i';

        let oTdIntervalo = document.createElement('td');
        oTdIntervalo.innerHTML = 'Intervalo';

        let oTdFi = document.createElement('td');
        oTdFi.innerHTML = 'fi';

        let oTdFi2 = document.createElement('td');
        oTdFi2.innerHTML = 'FI';

        let oTdFrP = document.createElement('td');
        oTdFrP.innerHTML = 'fr(%)';

        let oTdFr = document.createElement('td');
        oTdFr.innerHTML = 'Fr';
        
        let oTdXi = document.createElement('td');
        oTdXi.innerHTML = 'Xi';
    
        oTr.appendChild(oTdi);
        oTr.appendChild(oTdIntervalo);
        oTr.appendChild(oTdFi);
        oTr.appendChild(oTdFi2);
        oTr.appendChild(oTdFrP);
        oTr.appendChild(oTdFr);
        oTr.appendChild(oTdXi);

        oTableBody.appendChild(oTr);

        oTable.appendChild(oTableBody);
    };

    var getTable = () => {
        return document.getElementById('table');
    };

    return {
        monta : () => {
            monta();
        }
    };

}());