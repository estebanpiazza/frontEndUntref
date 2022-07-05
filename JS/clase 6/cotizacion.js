let cotizacion = [
    {"casa":
        {"compra":"126,47","venta":"132,47","agencia":"349","nombre":"Dolar Oficial","variacion":"1,36","ventaCero":"TRUE","decimales":"2"}},
        {"casa":{"compra":"255,00","venta":"267,00","agencia":"310","nombre":"Dolar Blue","variacion":"11,72","ventaCero":"TRUE","decimales":"2"}},
        {"casa":{"compra":"No Cotiza","venta":"0","agencia":"311","nombre":"Dolar Soja","variacion":"0","ventaCero":"TRUE","decimales":"3"}},
        {"casa":{"compra":"283,64","venta":"289,05","agencia":"312","nombre":"Dolar Contado con Liqui","variacion":"14,60","ventaCero":"TRUE","decimales":"2"}},
        {"casa":{"compra":"271,840","venta":"269,080","agencia":"313","nombre":"Dolar Bolsa","variacion":"10,750","ventaCero":"TRUE","decimales":"3"}},
        {"casa":{"compra":"9.852,070","venta":"0","agencia":"399","nombre":"Bitcoin","variacion":"-100,00","ventaCero":"TRUE","decimales":"3"}},
        {"casa":{"nombre":"Dolar turista","compra":"No Cotiza","venta":"218,58","agencia":"406","variacion":"1,36","ventaCero":"TRUE","decimales":"2"}},
        {"casa":{"compra":"122,79","venta":"130,61","agencia":"302","nombre":"Dolar","decimales":"3"}},
        {"casa":{"nombre":"Argentina","compra":"2.489,00","venta":"1,55","mejor_compra":"True","mejor_venta":"False","fecha":"05\/05\/15","recorrido":"16:30","afluencia":{},"agencia":"141","observaciones":{}}}]
let dolarBLue = (cotizacion[1].casa.venta)
console.log("EL precio del dolar blue es: " + dolarBLue)
