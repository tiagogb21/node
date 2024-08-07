## Importação e Exportação em Node.js

1. CommonJS

    Uso: require / module.exports

2. ESModules

    Uso: import / export

    obs.: Não são aceitos por padrão.

==> Para habilitar ESModules

    Adicione "type": "module" no package.json.

## Diferenciar Módulos Internos e de Terceiros

Prefixe módulos internos com 'node:':

    ```js
    import http from 'node:http'; // módulo interno
    import fastify from 'fastify'; // módulo de terceiro
    ```

### Listar Módulos Internos do Node.js

Digite node: e pressione CTRL + Espaço para visualizar a lista.

## Objetos req e res no Node.js

### Objeto req

1. req.body

    - Contém os dados do corpo da requisição.
    - Utilizado principalmente em métodos POST e PUT.
    - Necessário usar middleware como body-parser ou express.json() para parsear o conteúdo.

2. req.params

    - Contém os parâmetros de rota capturados pela URL.
    - Utilizado em rotas dinâmicas.

3. req.query

    - Contém os parâmetros de consulta da URL.
    - Utilizado para capturar query strings.

    ```js
    req.query.term // Acessa o parâmetro de consulta 'term'
    ```

### Objeto res

    - Representa a resposta que o servidor enviará ao cliente.

1. res.send()

    - Envia uma resposta simples de texto ou JSON.

    ```js
    res.send('Hello World!');
    ```

2. res.json()

    - Envia uma resposta em formato JSON.

    ```js
    res.json({ message: 'Hello World!' });
    ```
3. res.status()

    - Define o status HTTP da resposta.

    ```js
    res.status(404).send('Not Found');
    ```

4. res.redirect()

    - Redireciona a solicitação para outra URL.

    ```js
    res.redirect('/new-url');
    ```

5. res.render()

    ```js
    res.render('index', { title: 'Home' });
    ```
