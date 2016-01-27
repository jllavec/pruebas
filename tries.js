function repetir(str,n)
{
    if(n<1)
        return '';
    else
        return str + repetir(str,n-1);

    
}

function string_chop(str,n)
{
    var aux;

    if (str.length<=n)
        return [str.substring(0,str.length)];
    else
    {   
        aux=string_chop(str.slice(n,str.length),n);
        aux.unshift(str.slice(0,n));
        return aux;
    }
}

console.log(string_chop('pacopacopacortr',2));