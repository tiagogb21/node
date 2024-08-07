// 'node:fs' --> utiliza a antiga estrutura, sem promise. Porém permite utilizar os métodos Stream
// 'node:fs/promises' --> permite utilizar a nova estrutura de promise, async e await. NÃO deixa utilizar métodos Stream

import fs from 'node:fs/promises';

// ATENÇÃO! __dirname e __filename NÃO são métodos de "type": "module"

    // import.meta.url --> retorna o caminho relativo até o arquivo atual

// new URL(nome_arquivo, caminho_relativo_do_arquivo) --> permite criar um objeto URL a partir de uma string de URL
    // permite manipular e acessar facilmente diferentes partes da URL, como:
        // o protocolo, o host, o caminho, a consulta e os fragmentos.
const databasePath = new URL('db.json', import.meta.url)

export class Database {
    // Para tornar um método privado em js utilizamos #
    #database = {}

    #persist() {
        // ATENÇÃO! o node SEMPRE referencia o diretório a partir do qual o node foi executado, se for executado dentro da raiz será a raiz, se for dentro do src, será o src
        // Para termos mais autonomia na criação, podemos utilizar o caminho relativo
        fs.writeFile(databasePath, JSON.stringify(this.#database));
    }

    select(table) {
        const data = this.#database[table] ?? [];

        return data;
    }

    insert(table, data) {
        if(Array.isArray(this.#database[table])) {
            this.#database[table].push(data);
        } else {
            this.#database[table] = data
        }

        return data;
    }
}