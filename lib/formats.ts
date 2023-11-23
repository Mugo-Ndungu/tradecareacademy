export const formatPrice = (price:number) => {
    return new Intl.NumberFormat("en-KE",{
        style:"currency",
        currency:"Ksh"
    }).format(price)
}