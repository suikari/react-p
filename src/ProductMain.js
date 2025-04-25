import { useState, useEffect } from "react"

function ProductList (){
    
    //let [productId,setProductId] = useState('');
    let [list,setList] = useState([]);

    let [form, setForm] = useState({
        productId: '',
        productName: '',
        price: '',
        stock: '',
        category: ''
      });

    let initialState = {
        productId: '',
        productName: '',
        price: '',
        stock: '',
        category: ''
    };


    const fnAdd = ( ()=> {
        //console.log(productId,productName,price,stock,category);
        setList([form ,...list]);

        setForm(initialState);

        
    //   let item = {id : list.length+1 , name : userName };
    //   let newList = [...list,item];
    //   //  let newList = [ {id : list.length+1 , name : userName } , ...list]
    //   //newList.push({id : list.length+1 , name : userName });
    //   // setList([item,...list]);
    //   setList(newList);
    //   console.log(userlist);
    })


    useEffect ( () => {
        fetch('http://localhost:3003/product')
        .then((res)=> res.json())
        .then((data) => {
            console.log(data);
            setList(data.list);
            
        });
    }, [])


    const fnInput = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({
          ...prev,
          [id]: value
        }));
    }

    return (
        <div>
            <div>
                <input id="productId" placeholder="번호" onChange={fnInput} value={form.productId} ></input>
            </div>
            <div>
                <input id="productName" placeholder="상품명" onChange={fnInput} value={form.productName} ></input>
            </div>
            <div>
                <input id="price" placeholder="가격" onChange={fnInput} value={form.price} ></input>
            </div>
            <div>
                <input id="stock" placeholder="재고" onChange={fnInput}  value={form.stock}></input>
            </div>
            <div>
                <input id="category" placeholder="분류" onChange={fnInput}  value={form.category}></input>
            </div>
            <div>
                <button onClick={()=>{
                    fnAdd();
                }}>추가</button>
            </div>
            



            <table>
                <thead>
                    <tr>
                        <th>등록번호</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>재고</th>
                        <th>분류</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map( function(item){
                     return <tr key={item.productId}>
                             <td> {item.productId} </td>
                             <td> {item.productName} </td>
                             <td> {item.price} </td>
                             <td> {item.stock} </td>
                             <td> {item.category} </td>
                            </tr>
                        
                    })}
                </tbody>
               
            </table>

        </div>
    )
}

function Product () {
    const [show, setShow] = useState(true);

    return (
        <div>

            <button onClick={()=>{
                setShow(!show);
            }}>{show ? "가리기" : "보이기"}</button>

            { show && <ProductList /> }
        
        </div>
    )
}



export default Product