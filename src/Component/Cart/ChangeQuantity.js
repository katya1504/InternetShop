const ChangeQuantity = ({quantity, setQuantity}) =>{

    const addQuantity =()=>{
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity =()=>{
        if (quantity <= 1)return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity);
    }


    return (<div className="quantity">
<button onClick={addQuantity} className='add'>+</button>
<span className="number">{quantity}</span>
<button onClick={removeQuantity} className='add'>-</button>
    </div>)
}


export default ChangeQuantity;