function add(a: number, b: number){
    return a+b;
}
const twoPlusFour=add(2,4);
console.log(twoPlusFour);

function es5Functions(){
    return (
        <div>
        <h2>Functions</h2>
        <h3>Legacy ES5 functions</h3>
        twoPlusFour={ twoPlusFour } <br/>
        add(2,4)={ add(2,4) }<br/>
        </div>
    );
}

export default es5Functions