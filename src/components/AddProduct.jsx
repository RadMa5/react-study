import React from "react";
import { addProduct } from "../app/ProductActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function AddProduct() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(0);
    const [available, setAvailable] = useState(false);
    const dispatch = useDispatch();

    const HandleAddProduct = () => {
        console.log(name);
        console.log(desc);
        console.log(price);
        dispatch(addProduct({title: name, desc: desc, price: price, available: available}));
    }

    return (
        <div>
            <a href="/">Главная страница</a>
            <h1>Добавить продукт</h1>
            <form>
                <label htmlFor="title">Название</label>
                <input type="text" name="title" onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="desc">Описание</label>
                <input type="text" name="desc" onChange={(e) => setDesc(e.target.value)}/>
                <label htmlFor="price">Цена</label>
                <input type="number" name="price" onChange={(e) => setPrice(e.target.value)}/>
                <br />
                <label htmlFor="availability">Доступность</label>
                <br />
                <label htmlFor="availability1">В наличии</label>
                <input type="radio" value={true} name="availability" id="availability1" onChange={(e) => setAvailable(e.target.value)}/>
                <label htmlFor="availability0">Нет в наличии</label>
                <input type="radio" value={false} name="availability" id="availability0" onChange={(e) => setAvailable(e.target.value)}/>
                <button type="submit" onClick={HandleAddProduct}>Отправить данные</button>
            </form>

        </div>
    );
}