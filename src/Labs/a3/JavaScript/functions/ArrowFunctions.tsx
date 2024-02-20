const subtract=(a: number, b: number)=>{
    return a-b;
}
const threeMinusOne=subtract(3,1);
console.log(threeMinusOne);

function arrowFunction(){
    return (
        <div>
            <h3>New ES6 arrow functions</h3>
            threeMinusOne={threeMinusOne}<br/>
            subtract(3,1)={subtract(3,1)}<br/>
        </div>
    );
}

export default arrowFunction