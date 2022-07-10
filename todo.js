function Todo ({todo,index,remove}){
    function handle(){
        remove (index);
    }
    return <div className="Todo" onClick={handle}>{todo.text} (-)</div>
}