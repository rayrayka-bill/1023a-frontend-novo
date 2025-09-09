use ("bancoaula");
db.createCollection("produtos"); 
db.produtos.insertMany
([ 
    {Id: 1, nome: "Notebook", preco: 3500, Urlimagem: "", 
        descricao: "Notebook like" }, 
    {Id: 2, nome: "celular", preco: 6000, Urlimagem: "",
         descricao: "Celular redmi 11" }, 
    {Id: 3, nome: "teclado", preco: 400, Urlimagem: "", 
        descricao: "teclado brilhante" } 
]);

