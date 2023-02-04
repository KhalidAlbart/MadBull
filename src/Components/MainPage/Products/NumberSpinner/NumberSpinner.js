import { HiPlusSm, HiMinusSm } from "react-icons/hi"
import React from "react"
import { SpinnerBox, Operator, Input, Font, Colors } from "./NumberSpinner.style"
import { useDispatch, useSelector } from "react-redux"
import { updateCartAction } from "../../../../Actions/ShoppingCard"

export function NumberSpinner(props) {
    const id = props.itemId
    const count = useSelector(state => {
        if (state.shoppingCart.length !== 0) {
            let search = state.shoppingCart.filter(item => item.id === id)
            if (search.length !== 0) {
                return search[0].value
            }
        } 
        
        return 0
    })
    const dispatch = useDispatch()

    const handleChange = (event) => {
        let value = Number(event.target.value)
        if (!isNaN(value) && value >=0) {
            dispatch(updateCartAction(value, id))
        }
    }

    const decrement = () => {
        if (count > 0) {
            dispatch(updateCartAction(count - 1, id))
        }
    }

    const implement = () => {
        dispatch(updateCartAction(count + 1, id))
    }


    return (
        <SpinnerBox maxWidth="115px" onSubmit={ (event) => event.preventDefault() }>
            <Operator onClick={ decrement } size={ Font.size.large } fill={ Colors.white }><HiMinusSm /></Operator>
            <Input center maxWidth="60px" onChange={ handleChange } value={ count } />
            <Operator onClick={ implement } size={ Font.size.large } fill={ Colors.white }><HiPlusSm /></Operator>
        </SpinnerBox>
    )
 }