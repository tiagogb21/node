## Conceitos:

1. Stateful: informação armazenada em memória

    - A aplicação de informações armazenadas em memória para continuar funcionando

    - Mantém o estado da sessão entre requisições --> a aplicação lembra das interações anteriores do usuário e as usa para processar novas requisições

    ex.: aplicações que precisam lembrar do contexto do usuário - preferências do usuário, histórico de navegação ou status de login.

2. Stateless: NÃO salva em memória, mas em dispositivos externos (ex.: BD, arquivos de texto)

    - Cada requisição é independente e não tem conhecimentos das requisições anteriores. NÃO mantém o estado entre as requisições.

    ex.: APIs RESTful (cada requisição deve conter todas as informações necessárias para ser processada, SEM depender do estado armazenado pelo cliente)

- resumo

    - Mantém o estado e contexto entre requisições.

3. Cache: técnica para armazenar dados temporariamente com o objetivo de melhorar a eficiência e reduzir o tempo de acesso.

    - O cache guarda dados frequentemente solicitados ou computados para que possam ser rapidamente recuperados sem a necessidade de recalcular ou buscar os dados novamente.

    obs.: pode ser usado tanto em sistemas statefull quanto stateless