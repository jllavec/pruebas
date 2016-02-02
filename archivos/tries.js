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

    
    
    
    function Arr_burb(arr)
    {
        Arr.call(this,arr);
        
    }
    
    Arr_burb.prototype=Object.create(Arr.prototype);
    Arr_burb.prototype.constructor=Arr_burb;
    Arr_burb.prototype.burbuja=function ()
        {
            var i,j,aux;
            var counter = 0;
            for(i=0;i<this.arr.length;i++)
            {
                for(j=i+1;j<this.arr.length;j++)
                {
                    counter++;
                    if(this.arr[i]>this.arr[j])
                    {
                        aux=this.arr[i];
                        this.arr[i]=this.arr[j];
                        this.arr[j]=aux;
                        
                    }
                }
            }
            console.log(counter);
            return this.arr;
        };
        var prueba = new Arr_burb([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]);
        
    
    function Arr(arr){
        this.arr=arr;
    }
    
    function Arr_col_burb(arr)
    {
        Arr.call(this,arr);
        
    }
    
    Arr_col_burb.prototype=Object.create(Arr.prototype);
    Arr_col_burb.prototype.constructor=Arr_col_burb;
    
    Arr_col_burb.prototype.burbuja=function ()
        {
            var k;
            for(k=0;k<this.arr.length;k++)
            {
                var i,j,aux;
                var counter = 0;
                for(i=0;i<this.arr[k].length;i++)
                {
                    for(j=i+1;j<this.arr[k].length;j++)
                    {
                        counter++;
                        if(this.arr[k][i]>this.arr[k][j])
                        {
                            aux=this.arr[k][i];
                            this.arr[k][i]=this.arr[k][j];
                            this.arr[k][j]=aux;
                            
                        }
                    }
                }
                console.log(counter);
                //return this.arr;
            }
        };
    var prueba2 = new Arr_col_burb([[ 3, 8, 7, 6, 5, -4, 3, 2, 1 ],[ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]]);
    console.log(prueba2.arr);
    prueba2.burbuja();
    console.log(prueba.arr);
    

    function burbuja(arr)
    {
        var i,j,aux;
        var counter = 0;
        for(i=0;i<arr.length;i++)
        {
            for(j=i+1;j<arr.length;j++)
            {
                counter++;
                if(arr[i]>arr[j])
                {
                    aux=arr[i];
                    arr[i]=arr[j];
                    arr[j]=aux;
                    
                }
            }
        }
        console.log(counter);
        return arr;
    }
 
