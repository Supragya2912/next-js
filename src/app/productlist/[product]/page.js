"use client"
export default function Product ({params}) {
    console.log(params)
    return(
        <div>
            <h1> Product Details</h1>
            <h1> Name of the product {params.product}</h1>
        </div>
    )
}