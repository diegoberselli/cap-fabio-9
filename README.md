# cap-fabio-9


PRODUCT ROUTES


-Create Product : Responsavel por criar o produto

-path: '/products'

-entrada esperada:
 
   {
       name: string: "nome do produto",
       description: string: "descrição do produto",
       price: number: "valor do produto",
       category: string: "categoria do produto"
   }

-saida esperada:

{
       id: string: "uuid do produto",
       name: string: "nome do produto",
       description: string: "descrição do produto",
       price: number: "valor do produto",
       category: string: "categoria do produto"
   }