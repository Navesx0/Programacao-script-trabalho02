# Pokédex

Uma aplicação web interativa que permite aos usuários procurar e visualizar informações sobre Pokémon, construída com o framework **Vue.js**. Esta aplicação oferece uma experiência de usuário agradável e intuitiva, ideal para fãs de Pokémon e desenvolvedores que desejam aprender mais sobre Vue.js e APIs.

## Recursos

- **Busca de Pokémon**: Pesquise por nome de Pokémon usando uma barra de pesquisa responsiva.
- **Exibição de Detalhes**: Mostra informações detalhadas, incluindo:
    - ID do Pokémon
    - Tipo(s) do Pokémon
    - Peso do Pokémon
    - Imagem do Pokémon
- **Design Responsivo**: O layout se adapta a diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis e desktop.

## Tecnologias Usadas

- **HTML**: Utilizado para estruturar a aplicação.
- **CSS**: Fornece estilo e formatação, incluindo classes específicas para diferentes tipos de Pokémon.
- **JavaScript (Vue.js)**: Gerencia dados e interações do usuário de forma reativa.
- **PokéAPI**: API RESTful utilizada para buscar informações sobre Pokémon, permitindo acesso a uma vasta gama de dados.

## Como Funciona

1. A aplicação faz uma chamada à **PokéAPI** para obter uma lista de Pokémon.
2. Os usuários podem digitar o nome de um Pokémon na barra de pesquisa.
3. Ao encontrar um Pokémon correspondente, a aplicação exibe seus detalhes, como nome, ID, tipo(s) e peso.
4. O algoritmo de **Levenshtein** é usado para melhorar a precisão da busca, ajudando a encontrar Pokémon com nomes semelhantes em caso de erros de digitação.

## Exemplo de Uso

Ao digitar o nome de um Pokémon na barra de pesquisa, a aplicação realiza uma consulta à PokéAPI e exibe o Pokémon correspondente. Por exemplo, ao buscar "Pikachu", a aplicação mostrará:

- **Nome**: Pikachu
- **ID**: 25
- **Tipo(s)**: Elétrico
- **Peso**: 6 kg
- ![Imagem de Pikachu](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/front_default/25.png)
