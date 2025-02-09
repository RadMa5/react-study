import React from "react";
import { useState } from "react";

export default function RedactProduct() {
    return (
        <div>
            <a href="/">Главная страница</a>
            <h1>Отредактировать данные</h1>
            <form>
                <label htmlFor="id">Уникальный идентификатор</label>
                <input type="number" name="id"/>
                <label htmlFor="title">Название</label>
                <input type="text" name="title"/>
                <label htmlFor="desc">Описание</label>
                <input type="text" name="desc"/>
                <label htmlFor="price">Цена</label>
                <input type="number" name="price"/>
                <br />
                <label htmlFor="availability">Доступность</label>
                <br />
                <label htmlFor="availability1">В наличии</label>
                <input type="radio" value={1} name="availability" id="availability1"/>
                <label htmlFor="availability0">Нет в наличии</label>
                <input type="radio" value={0} name="availability" id="availability0"/>
                <button type="submit">Отправить данные</button>
                <button type="submit">Отправить данные</button>
            </form>
        </div>
    );
}