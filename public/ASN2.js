

//function var 
//
/*function myFunc()
{
    var v="Myfunc_scope"
    let le="MyFunc_let"
    console.log(v);
    console.log(le);

    for( let i=0;i<10;i++)
        console.log(i);
    console.log(i)
}
myFunc();
*/

/*var cb1=() =>{console.log('cb1');}
var cb2=() =>{console.log('cb2');}
console.log('Start...')
setTimeout(cb1,5000);
setTimeout(cb2, 500);
console.log('END...');
*/



const ShowUsr=() =>
{
    import { Pool } from 'pg';
    var pool;
    pool=new Pool({
      connectionStr: 'postgres://postgres:2205@localhost/users'
    })
    var getUsersQ='select * from usr';
    pool.query(getUsersQ,(error,result)=>{
        if(error)
        res.end(error);
        var rult={'rows':result.rows}
        document.getElementById('percen').innerHTML = rult;
    })

}