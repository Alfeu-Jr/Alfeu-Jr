# Painel de Acesso com PIN

Este repositório contém um código JavaScript e HTML para um painel de acesso com PIN. O sistema permite que o usuário insira um PIN de 4 dígitos e valida o PIN inserido com um PIN gerado aleatoriamente. O resultado da validação é exibido em uma mensagem.

## Utilização

1. Abra o arquivo `index.html` em um navegador da web.
2. Insira um PIN de 4 dígitos no campo de entrada.
3. Clique no botão "Entrar".
4. Uma mensagem será exibida informando se o PIN está correto ou se há algum erro.
5. Caso o PIN inserido esteja correto, você será redirecionado para o site PIN.html.

## Detalhes da Avaliação

O código JavaScript gera um PIN aleatório e valida o PIN inserido pelo usuário, PIN aleatório gerado pode ser visualizado no console do navegador. A função `validar(pin)` compara o PIN inserido com o PIN gerado e retorna uma mensagem de erro correspondente. A função `checkInput(input)` verifica se o valor inserido é um número.

## Dificuldades Conhecidas

Durante o processo de geração de um valor aleatório, percebi que, em termos de lógica matemática, zeros à esquerda em números naturais são ignorados. Devido a isso, decidi implementar uma lógica alternativa. Se o primeiro número da senha for "0", o zero será concatenado com os próximos dígitos da senha.
