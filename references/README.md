# Referencias

Os arquivos de referencias foram todos obtidos no site da própria UNICAMP ([http://www.nepa.unicamp.br/taco/tabela.php](http://www.nepa.unicamp.br/taco/tabela.php)).

Para montar este projeto, 2 arquivos foram usados como base:

- [original-Taco_4a_edicao_2011.xls](./original-Taco_4a_edicao_2011.xls) - Esse arquivo é a versão original e sem alterações do arquivo de banco de dados, disponibilizado no site;
- [taco_4_edicao_ampliada_e_revisada.pdf](./taco_4_edicao_ampliada_e_revisada.pdf) - Esse é o estudo em completo com comentários e descrições de como as medições foram realizadas. Serviu como base de referencia para duvidas pontuais sobre os dados, legendas, etc.

## Processo de tratamento dos dados

Dentro da pasta `./references/normalization`, você vai encontrar arquivos `.xlsx`. Cada arquivo representa uma etapa do tratamento, tendo foco na modelagem relacional que será feita posteriormente e inserção no banco de dados.

Abaixo, a lista dos arquivos e suas descrições:

- `taco_phase_1_no_format.xlsx` - a limpeza da formatação da tabela. Aqui, me concentrei em tirar linhas em branco, duplas ou duplicadas e qualquer coisa que dificultasse a transposição de `.xlsx` pra `.csv` no final do processo;
- `taco_phase_2_normalize_values` - nessa etapa, eu normalizei valores de células que não fossem números. Isso é extremamente importante para a inserção dos valores no banco de dados posteriormente. As alterações foram as seguintes:
  - `NA` (Não Aplicável) -> deixei o espaço em branco
  - `*` (Amostras sendo reavaliadas) -> deixei o valor em branco
  - `Tr` (traço) -> Traço representa valores que entre 0.5 e 0, ou seja, valores que não tem relevância. Coloquei o valor de `0`.
- `taco_phase_3_rename_labels` -> Nessa etapa, eu fiz uma limpeza nos nomes das colunas, removendo espaços, a unidade dos nutrientes e traduzindo para inglês;
- `taco_phase_4_decouple_category` -> Nessa etapa, eu criei uma outra tabela somente com as categorias, assim, ao invés de duplicar o nome da categoria (por exemplo `Cereais e derivados`), eu faço uma referencia ao seu `id` em cada alimento (por exemplo, `1`);
- `taco_phase_5_decouple_food` -> A última etapa foi separar o alimento dos nutrientes em outra planilha, criando uma relação pelo seu ID entre as outras tabelas.

Por último, fiz a extração de todas as planilhas dentro do `taco_phase_5_decouple_food` para `.csv` (comma separated value). Isso facilita na transposição dos dados em JSON.
