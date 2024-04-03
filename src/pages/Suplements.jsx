import { useEffect, useState } from "react"
import "./Css/Suplements.css"
import axios from "axios";

export function Suplements() {

    const [posts, setPosts] = useState([]);

    const getData = async() => {
        try{
            const response = await axios.get('http://localhost:7000/suplements');

            const data = response.data;
            setPosts(data);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    const [suplementAdd, setSuplementAdd] = useState({
        name: "",
        img: "",
        description: "",
        price: ""
    });

    const adicionarItem = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post (
                'http://localhost:7000/suplements', suplementAdd
            );
            setSuplementAdd({
                name: "",
                img: "",
                description: "",
                price: ""
            })
        } catch (error) {
            console.log("Erro: ", error)
        }
    }

    const HandleInputAdicionar = (event) => {
        const { name, value } = event.target;
        setSuplementAdd((eventTwo) => ({...eventTwo, [name]: value}));
    }


    return (
        <>
        <section>

            <form onSubmit={adicionarItem} className="add-item">
                <label htmlFor="">Name: <input value={suplementAdd.name} onChange={HandleInputAdicionar} required placeholder="Digite o Nome" type="text" /></label>
                <label htmlFor="">URL image: <input value={suplementAdd.img} onChange={HandleInputAdicionar} required placeholder="URL da imagem" type="text" /></label>
                <label htmlFor="">Price: <input value={suplementAdd.price} onChange={HandleInputAdicionar} required placeholder="Digite o preço" type="text" /></label>
                <label htmlFor="">Description: <input value={suplementAdd.description} onChange={HandleInputAdicionar} required placeholder="Descrição" type="text" /></label>
            </form>

            <div className="button-adicionar">
                    <button type="submit">Adicionar</button>
            </div>

            <div className="container-suplements">
                {posts.map((suplement) => (
                    <div className="suplement-item" key={suplement.id}>
                        <h3>{suplement.name}</h3>
                        <img src={suplement.img} alt="" />
                        <h4>{suplement.price}</h4>
                        <p>{suplement.description}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}