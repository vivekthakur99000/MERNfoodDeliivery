import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'


function Verify() {

    const [searchParams, setSearchParams] = useParams()

    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")

    const { url} = useContext(StoreContext)
    const navigate = useNavigate()

    const verifyPayment = async ()=> {
        const response = await axios.post(url +"api/order/verify", {success,orderId})
        if (response.data.success) {
            navigate("/myOrders")
        }else{
            navigate("/")
        }
    }

    useEffect(()=> {
        verifyPayment()
    }, [])
    

  return (
    <div className='verify max-h-[60vh] grid  '>
    <div className="spinner w-[100px] h-[100px] place-self-cente border-[5px] border-t-orange-500 rounded-full animate-spin "></div>
    </div>
  )
}

export default Verify
