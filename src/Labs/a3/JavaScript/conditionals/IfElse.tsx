function ifElse(){
    let true1=true;
    let false1=false;

    return (
        <div>
            <h2>If Else</h2>
            {true1 && <p>true1</p>}
            { !false1 ? <p>!false1</p> : <p>false1</p> }
        </div>
    );
}

export default ifElse

