import { useEffect, useState } from "react";
import styled from "styled-components";
import InsertForm from "./InsertForm";
import axios from "axios";

export default function ShoppingList() {

    const [items, setItems] = useState([]);

    useEffect(loadItems, []);

    function loadItems() {
        axios.get(`http://localhost:4000/shopping`)
            .then(r => setItems(r.data))
            .catch(e => console.log(e));
    }

    return (
        <>
            <InsertForm onAddItem={loadItems} />
            <List>
                {items.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </List>
        </>
    );
}

const List = styled.ul`
  margin-top: 40px;
  background: #fff;
  width: 600px;
  padding: 20px;
  border-radius: 10px;
  font-size: 25px;
  padding-left: 50px;
  line-height: 40px;
  list-style-type: disc;
`;
