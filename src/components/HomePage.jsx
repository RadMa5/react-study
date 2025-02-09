import React from "react";
import { useSelector } from "react-redux";

export default function HomePage() {
    const products = useSelector((state) => state.product);
    return (
        <div>
            <h1>Главная страница</h1>
            <a href="/addProduct">Добавить продукт</a>
            <br />
            <a href="/redactProduct">Редактировать продукт</a>
            <br />
            <h2>Все продукты: </h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        Название: {product.title}. Описание: {product.desc}. Цена: {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}