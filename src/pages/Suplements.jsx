import { useEffect, useState } from "react"; // Importa os hooks useEffect e useState do React para atualização e gerenciamento de estado
import "./Css/Suplements.css"; // Importa o arquivo de estilo CSS para este componente
import axios from "axios"; // Importa o Axios para fazer requisições HTTP

export function Suplements() { // Define o componente Suplements como uma função React

    const [posts, setPosts] = useState([]); // Define o estado 'posts' e uma função 'setPosts' para atualizá-lo, inicializado como uma lista vazia

    const getData = async() => { // Define uma função assíncrona chamada getData para obter os dados dos suplementos
        try{
            const response = await axios.get('http://localhost:7000/suplements'); // Faz uma requisição GET para obter os suplementos da API

            const data = response.data; // Extrai os dados da resposta
            setPosts(data); // Atualiza o estado 'posts' com os dados recebidos da API
        }catch (error) {
            console.log(error); // Captura e registra qualquer erro ocorrido durante a requisição
        }
    };

    useEffect(() => { // Utiliza o hook useEffect para executar a função getData quando o componente é montado (equivalente ao componentDidMount)
        getData(); // Chama a função getData para carregar os dados dos suplementos quando o componente é montado
    }, []); // O segundo argumento vazio [] indica que essa função deve ser executada apenas uma vez, equivalente ao componentDidMount

    const [suplementAdd, setSuplementAdd] = useState({ // Define o estado 'suplementAdd' e a função 'setSuplementAdd' para atualizá-lo, inicializado com um objeto vazio
        name: "",
        img: "",
        description: "",
        price: ""
    });

    const adicionarItem = async (event) => { // Define uma função assíncrona chamada adicionarItem para adicionar um novo suplemento
        event.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página

        try {
            const response = await axios.post( // Faz uma requisição POST para adicionar um novo suplemento à API
                'http://localhost:7000/suplements', suplementAdd
            );
            setSuplementAdd({ // Reseta o estado 'suplementAdd' para seus valores iniciais após a adição bem-sucedida
                name: "",
                img: "",
                description: "",
                price: ""
            });
        } catch (error) {
            console.log("Erro: ", error); // Captura e registra qualquer erro ocorrido durante a requisição de adição do suplemento
        }
    };

    const HandleInputAdicionar = (event) => { // Define uma função chamada HandleInputAdicionar para lidar com a mudança nos inputs do formulário
        const { name, value } = event.target; // Extrai o nome e o valor do input que foi alterado
        setSuplementAdd((eventTwo) => ({...eventTwo, [name]: value})); // Atualiza o estado 'suplementAdd' com o novo valor do input alterado
    };

    return (
        <> {/* Fragmento React usado para englobar múltiplos elementos sem adicionar um nó extra ao DOM */}

        <section>

            <form onSubmit={adicionarItem} className="add-item"> {/* Formulário para adicionar novos suplementos */}
                <label htmlFor="">Name: <input required name="name" value={suplementAdd.name} onChange={HandleInputAdicionar} placeholder="Digite o Nome" type="text" /></label> {/* Input para inserir o nome do suplemento */}
                <label htmlFor="">URL image: <input name="img" value={suplementAdd.img} onChange={HandleInputAdicionar} required placeholder="URL da imagem" type="text" /></label> {/* Input para inserir a URL da imagem do suplemento */}
                <label htmlFor="">Price: R$<input name="price" value={suplementAdd.price} onChange={HandleInputAdicionar} required placeholder="Digite o preço" type="text" /></label> {/* Input para inserir o preço do suplemento */}
                <label htmlFor="">Description: <input name="description" value={suplementAdd.description} onChange={HandleInputAdicionar} required placeholder="Descrição" type="text" /></label> {/* Input para inserir a descrição do suplemento */}
            
                <div className="button-adicionar"> {/* Div para o botão de adicionar */}
                        <button type="submit">Adicionar</button> {/* Botão para enviar o formulário e adicionar o suplemento */}
                </div>
            </form>

            <div className="container-suplements"> {/* Container para exibir os suplementos */}
                {posts.map((suplement) => ( // Mapeia os suplementos para exibir cada um deles
                    <div className="suplement-item" key={suplement.id}> {/* Div para cada item de suplemento */}
                        <h3>{suplement.name}</h3> {/* Título do suplemento */}
                        <img src={suplement.img} alt="" /> {/* Imagem do suplemento */}
                        <h4>R$ {suplement.price}</h4> {/* Preço do suplemento */}
                        <p>{suplement.description}</p> {/* Descrição do suplemento */}
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

/* useEffect: É um hook do React que permite executar efeitos colaterais em componentes funcionais. Neste caso, está sendo utilizado para fazer a chamada à API para obter os dados dos suplementos quando o componente é montado, simulando o comportamento do método de ciclo de vida componentDidMount em componentes de classe.

useState: É um hook do React que permite adicionar estado a componentes funcionais. Neste caso, está sendo usado para definir e atualizar o estado dos suplementos (posts) e do novo suplemento a ser adicionado (suplementAdd). Cada vez que o estado é atualizado, o componente é re-renderizado para refletir essas mudanças na interface do usuário. */