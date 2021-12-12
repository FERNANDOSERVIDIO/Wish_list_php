const cosas = [
    {id: 1, nombre: 'Iman', aclaracion:'(es muy genial)', enlace:'https://articulo.mercadolibre.com.ar/MLA-876610659-iman-neodimio-48mm-fuerza-hasta-115kg-pesca-magnetica-_JM#position=17&type=item&tracking_id=c5369fa3-5195-40d7-8f6c-283088339c70'},
    {id: 2, nombre: 'Disco Solido', aclaracion:'', enlace:''},
    {id: 3, nombre: 'Laminas para Enmarcar', aclaracion:'', enlace:''},
    {id: 4, nombre: 'Tapa Camara', aclaracion:'(Asi ->)', enlace:'https://listado.mercadolibre.com.ar/tapa-camara#D[A:tapa%20camara]'},
    {id: 5, nombre: 'Fresas Dremel para Minitorno', aclaracion:'', enlace:''},
    {id: 6, nombre: 'Hub USB', aclaracion:'(es esto ->)', enlace:'https://www.google.com/search?q=hub+usb&client=opera&hs=VXN&sxsrf=ALeKk00XGVDbt63mL3jJH_K4hLD8m3pp9A:1607917018653&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj7iODVxcztAhX5KLkGHZlfBgEQ_AUoAXoECBcQAw&biw=1560&bih=790'},
    {id: 7, nombre: 'Lamina del Subte', aclaracion:'(como la del enlace)', enlace:'https://articulo.mercadolibre.com.ar/MLA-833114582-lamina-mapa-metro-buenos-aires-imprimible-_JM#position=3&type=item&tracking_id=39657ed0-735a-477e-bd37-ae39ef1cad72'},
    {id: 8, nombre: 'La Marca de Atenea', aclaracion:'(Rick Riordan)', enlace:''},
    {id: 9, nombre: 'El Silmarillion', aclaracion:'(j.R.R. Tolkien)', enlace:''},
    {id: 10, nombre: 'Uno Flip', aclaracion:'', enlace:''},
    {id: 11, nombre: 'Marco de Estilo Antiguo', aclaracion:'', enlace:''},
    {id: 12, nombre: 'Rompecabezas', aclaracion:'(No mucho paisaje porque soy malisimo)', enlace:''},
    {id: 13, nombre: 'Juego de Ingenio', aclaracion:'Ese esta copado ->', enlace:'https://articulo.mercadolibre.com.ar/MLA-829291593-juego-de-encastre-madera-cube-puzzle-ar1-787-02a-ellobo-_JM#reco_item_pos=2&reco_backend=machinalis-seller-items-pdp&reco_backend_type=low_level&reco_client=vip-seller_items-above&reco_id=696dfe97-f4a8-41b2-b51e-b8f1a3c5ebe8'},
    {id: 14, nombre: 'Arena Kinética', aclaracion:'Por que?...porque no?', enlace:''},
    {id: 15, nombre: 'Cualquier Juego de Mesa', aclaracion:'', enlace:''},
    {id: 16, nombre: '', aclaracion:'', enlace:''},
    {id: 17, nombre: '', aclaracion:'', enlace:''},
    {id: 18, nombre: '', aclaracion:'', enlace:''},
    {id: 19, nombre: '', aclaracion:'', enlace:''},
    {id: 20, nombre: '', aclaracion:'', enlace:''},
    {id: 21, nombre: '', aclaracion:'', enlace:''},
    {id: 22, nombre: '', aclaracion:'', enlace:''},
    {id: 23, nombre: '', aclaracion:'', enlace:''},
];

//Funciones----------------------------------------------------------------------
function CargarDom(){
    for(let i = 0; i<cosas.length;i++){
        
        if(cosas[i].nombre !=''){
            console.log('en el for');
            $('#main').append(
                `
                <div class="lista-item" id='cosa${cosas[i].id}'>
                <div>
                    <h4>${cosas[i].nombre}</h4>
                    <p>${cosas[i].aclaracion}</p>
                </div>
    
            </div>
                `
            )
            if(cosas[i].enlace != ""){
                console.log('entro en el if');
                $(`#cosa${cosas[i].id}`).append(
                    `
                    <a href="${cosas[i].enlace}" >Enlace</a>
                    `
                )
            }
        }
        
        
    }
}

CargarDom();

