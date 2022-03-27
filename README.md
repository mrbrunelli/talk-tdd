## Talk TDD + Jest + Node

Vamos contruir um endpoint que calcula o custo de uma entrega, **cobrindo nossa regra de negócios com testes unitários** e conhecendo alguns recursos do Jest para nos ajudar a testar **entrada e saída** de nossas funções.

### Fluxo do negócio

```mermaid
flowchart TD
  client[Client] --Request --> shipping((GET /shipping/cost \n--distance \n--rate \n--weight));
  shipping --> getCost[getCost];
  getCost --> isFree{Free Shipping?};
  isFree --No --> result[R$ Total Cost];
  isFree --Yes --> zero[R$ 0,00];
  result --> reply[Reply];
  zero --> reply;
  reply --Response --> client;
```
