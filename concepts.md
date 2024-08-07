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

    ```
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

    ```js
    const { name, email } = req.body;
    ```

2. req.params

    - Contém os parâmetros de rota capturados pela URL.
    - Utilizado em rotas dinâmicas.

    ```js
    const { id } = req.params;
    ```

3. req.query

    - Contém os parâmetros de consulta da URL.
    - Utilizado para capturar query strings.

    ```js
    req.query.term // Acessa o parâmetro de consulta 'term'
    ```

4. req.headers

    - Contém os cabeçalhos da requisição.
    - Utilizado para acessar informações como tipo de conteúdo, autenticação, etc.

    ```js
    req.headers['user-agent'] // Acessa o cabeçalho User-Agent
    ```

5 - req.cookies

    - Contém os cookies enviados pelo cliente.
    - Necessário usar middleware como cookie-parser para parsear os cookies.

    ```js
    req.cookies; // Acessa os cookies enviados na requisição
    ```

6 - req.method

    - Contém o método HTTP da requisição.
    - Utilizado para determinar se a requisição é GET, POST, etc.

    ```js
    req.method; // Acessa o método HTTP da requisição
    ```

7 - req.url

    - Contém a URL da requisição.
    - Utilizado para obter a URL completa ou partes dela.

    ```js
    req.url; // Acessa a URL da requisição
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

6. res.set()

    - Define um ou mais cabeçalhos HTTP na resposta.

    ```js
    res.set('Content-Type', 'application/json');
    ```

7. req.cookie()

    - Define um cookie na resposta.

    ```js
    res.cookie('name', 'value', { httpOnly: true });
    ```

8. res.clearCookie()

    - Remove um cookie da resposta.

    ```js
    res.clearCookie('name');
    ```

9. res.type()

    - Define o Content-Type da resposta.

    ```js
    res.type('json').send({ message: 'Hello World!' });
    ```

10. res.end()

    - Encerra o processo de resposta.
    - Utilizado para finalizar a resposta sem enviar dados adicionais.

    ```js
    res.end();
    ```

## requisição http

--> 2 principais recursos:

1 - Método HTTP
2 - URL
