import React, {useState} from 'react'
import Button from './components/Button';
import TextBox from './components/TextBox';
import './FormWallet.css';

function FormWallet () {
  const [productPrice1, setproductPrice1] = useState("");
  const [productPrice2, setproductPrice2] = useState("");
  const [productPrice3, setproductPrice3] = useState("");
  const [productPrice4, setproductPrice4] = useState("");
  const[walletMoney,setWalletMoney]=useState("");

  const [totalAmount, setTotalAmount] = useState(null);

  function sumAmount(e) {
    e.preventDefault();
    console.log(e.target.value);
    let totalAmount=Number(productPrice1) +Number(productPrice2)+Number(productPrice3)+Number(productPrice4);
    setTotalAmount(totalAmount);
    return totalAmount;
 }
 
  return (
    <div className="form-content">
    <form className="form" >


   <div className='podloga'>
   <h1 className=''>
            Enter wallet amount.
        </h1>
   <div className='sirina'>
           <TextBox 
                id="walletMoney" 
                type="number" 
                name="walletMoney" 
                placeholder="Wallet money" 
                value={walletMoney} 
                onChange={(e) => setWalletMoney(e.target.value)}
            />
           </div>
        <h1 className=''>
            Enter product names and their prices to calculate their total price.
        </h1>
        <div className="form-inputs" className="pad">
           
            
            <div>
            <TextBox 
            
            id="productName1" 
            type="text" 
            name="productName1" 
            placeholder="Product name 1" 
        />
            </div>
          
           <div className='sirina'>
           <TextBox 
                id="productPrice1" 
                type="number" 
                name="productPrice1" 
                placeholder="Price 1" 
                value={productPrice1} 
                onChange={(e) => setproductPrice1(e.target.value)}
            />
           </div>
              
           
         </div>
        
        <div className="form-inputs" className="pad">
            
            <TextBox 
                id="productName2" 
                type="text" 
                name="productName2" 
                placeholder="Product name 2" 
            />
             <div className='sirina'>
           <TextBox 
                id="productPrice2" 
                type="number" 
                name="productPrice2" 
                placeholder="Price 2" 
                value={productPrice2} 
                onChange={(e) => setproductPrice2(e.target.value)}
            />
           </div>
        </div>
        <div className="form-inputs" className="pad">
           
            <TextBox 
                id="productName3" 
                type="text" 
                name="productName3" 
                placeholder="Product name 3" 
            />
             <div className='sirina'>
           <TextBox 
                id="productPrice3" 
                type="number" 
                name="productPrice3" 
                placeholder="Price 3" 
                value={productPrice3} 
                onChange={(e) => setproductPrice3(e.target.value)}
            />
           </div>
        </div>
        <div className="form-inputs" className="pad">
           
            <TextBox 
                id="productName4" 
                type="text" 
                name="productName4" 
                placeholder="Product name 4" 
            />
             <div className='sirina'>
           <TextBox 
                id="productPrice4" 
                type="number" 
                name="productPrice4" 
                placeholder="Price 4" 
                value={productPrice4} 
                onChange={(e) => setproductPrice4(e.target.value)}
            />
           </div>
        </div>
       
     
        <Button className="form-input-btn" text="Total price" onClick={(e) => sumAmount(e)}/>
        
        {totalAmount && (
          <div className='pad'>
            <p className="form-input-sumAmount" >Total Amount to pay: {totalAmount} </p>
            <p className="form-input-sumAmount" >Amount left in wallet: {walletMoney-totalAmount} </p>
          </div>
        )}
     </div>
    </form>
        
    </div>
  );
}

export default FormWallet