import { createSlice } from "@reduxjs/toolkit";

import P1 from "../asset/image/productsorce/the lean startup.jpg"
import P2 from "../asset/image/productsorce/product2.jpg"
import P3 from "../asset/image/productsorce/product3.jpg"
import P4 from "../asset/image/productsorce/product4.jpg"
import P5 from "../asset/image/productsorce/product5.jpg"
import P6 from "../asset/image/productsorce/product6.jpg"

const shoppingSlice = createSlice({
    name: 'shoppingCart',
    initialState:[{
        users:[
            {
                id:1,
                name:'test',
                email:'test@test.com',
                password:'123456789',
                present:false,
            },
            {
                id:2,
                name:'Souhail',
                email:'souhail@test.com',
                password:'souhailTest',
                present:false,
            }
        ],
        user:null,
        basket:[],
        basketRemove:[],
        product:[
            {
                id:1,
                title:"The Lean Startup",
                description:"The Lean Startup",
                price:29.99,
                image:P1,
                rating:4,
            },
            {
                id:2,
                title:"Gaming Chair",
                description:"YSSOA Backrest and Seat Height Adjustable Swivel Recliner Racing Office Computer ErgonomicVideo Game Chair, Black/Red",
                price:99.99,
                image:P2,
                rating:4,
            },
            {
                id:3,
                title:"Gaming Mouse",
                description: "Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac",
                price:27.95,
                image:P3,
                rating:5,
            },
            {
                id:4,
                title:"Gaming Keyboard",
                description:"Logitech G910 Orion Spectrum RGB Wired Mechanical Gaming Keyboard , Black",
                price:131.13,
                image:P4,
                rating:3,
            },
            {
                id:5,
                title:"Gaming Headset",
                description:"BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games",
                price:19.26,
                image:P5,
                rating:3,
            },
            {
                id:6,
                title: "Gaming Laptop",
                description:"Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU | 15.6Ps Full HD 144Hz 3ms IPS Display | 16GB DDR4 | 512GB SSD | Killer WiFi 6 | RGB Keyboard",
                price:1234.87,
                image:P6,
                rating:3,
            },
        ],
        productSearch:null,
    },
],
    reducers:{
        userSignIn:(state,actions) =>{
            const users= state[0].users
            const index=users.findIndex((users)=>users.id=== actions.payload.id);
            users[index].present=actions.payload.present
            state[0].user=users[index]
        },
        userSignOut:(state, action) => {
            state[0].user=null
        },
        registerUser:(state, action) => {
            state[0].users= [...state[0].users, action.payload]
        },
        searchProduct:(state, action) => {
            const search= action.payload.toLowerCase()
            const filteredProduct= state[0].product.filter(product =>product.title.toLowerCase().includes(search))
            state[0].productSearch=filteredProduct
        },
        addToBasket:(state,action)=>{
            const payload=action.payload
            state[0].basket= [...state[0].basket,payload]
        },
        removeFromBasket:(state,action)=>{
            const index = state[0].basket.findIndex((basketItem) => basketItem.id === action.payload.id);
            let newBasket = [...state[0].basket];
            if (index>=0) {
                newBasket.splice(index, 1);
            }
            else{
                console.warn('Cant remove product (id: $ {action.id})as its not in the basket')
            }
            state[0].basketRemove= newBasket
            state[0].basket= state[0].basketRemove
        },
    },
})

export const {
    userSignIn,
    userSignOut,
    registerUser,
    searchProduct,
    addToBasket,
    removeFromBasket,
} =shoppingSlice.actions

export default shoppingSlice.reducer